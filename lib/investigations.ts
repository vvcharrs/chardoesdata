import fs from 'fs';
import path from 'path';
import { cache } from 'react';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { slugify } from '@/utils/slugify';

const investigationsDirectory = path.join(
  process.cwd(),
  'content/investigations'
);

export type Investigation = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  coverImage: string;
  coverAlt: string;
  dek?: string;
  featured?: boolean;
  readingTime: string;
  content: string;
};

type InvestigationFrontmatter = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  coverImage: string;
  coverAlt: string;
  dek?: string;
  featured?: boolean;
};

function isString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.length > 0 && value.every(isString);
}

function getInvestigationFiles() {
  if (!fs.existsSync(investigationsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(investigationsDirectory)
    .filter((file) => file.endsWith('.mdx'));
}

function assertFrontmatter(
  data: Record<string, unknown>,
  slug: string
): InvestigationFrontmatter {
  const requiredStringFields = [
    'title',
    'summary',
    'date',
    'coverImage',
    'coverAlt'
  ] as const;

  for (const key of requiredStringFields) {
    if (!isString(data[key])) {
      throw new Error(
        `Investigation "${slug}" frontmatter field "${key}" must be a non-empty string.`
      );
    }
  }

  if (!isStringArray(data.tags)) {
    throw new Error(
      `Investigation "${slug}" frontmatter field "tags" must be a non-empty string array.`
    );
  }

  if (data.dek !== undefined && !isString(data.dek)) {
    throw new Error(
      `Investigation "${slug}" frontmatter field "dek" must be a string when provided.`
    );
  }

  if (data.featured !== undefined && typeof data.featured !== 'boolean') {
    throw new Error(
      `Investigation "${slug}" frontmatter field "featured" must be a boolean when provided.`
    );
  }

  return {
    title: data.title as string,
    summary: data.summary as string,
    date: data.date as string,
    tags: data.tags as string[],
    coverImage: data.coverImage as string,
    coverAlt: data.coverAlt as string,
    dek: data.dek as string | undefined,
    featured: data.featured as boolean | undefined
  };
}

export const getAllInvestigations = cache(
  function getAllInvestigations(): Investigation[] {
    return getInvestigationFiles()
      .map((file) => {
        const slug = file.replace(/\.mdx$/, '');
        const fullPath = path.join(investigationsDirectory, file);
        const source = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(source);
        const frontmatter = assertFrontmatter(data, slug);

        return {
          slug,
          ...frontmatter,
          readingTime: readingTime(content).text,
          content
        };
      })
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  }
);

export function getInvestigation(slug: string) {
  return getAllInvestigations().find(
    (investigation) => investigation.slug === slug
  );
}

export function getFeaturedInvestigation() {
  const investigations = getAllInvestigations();
  return (
    investigations.find((investigation) => investigation.featured) ??
    investigations[0]
  );
}

export function getRelatedInvestigations(current: Investigation, limit = 3) {
  const currentTags = new Set(current.tags);

  return getAllInvestigations()
    .filter((investigation) => investigation.slug !== current.slug)
    .map((investigation) => ({
      investigation,
      score: investigation.tags.filter((tag) => currentTags.has(tag)).length
    }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        new Date(b.investigation.date).getTime() -
          new Date(a.investigation.date).getTime()
    )
    .slice(0, limit)
    .map(({ investigation }) => investigation);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date));
}

export function getHeadingsFromMdx(content: string) {
  return content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const title = line.replace(/^##\s+/, '').trim();
      const id = slugify(title);

      return { id, title };
    });
}
