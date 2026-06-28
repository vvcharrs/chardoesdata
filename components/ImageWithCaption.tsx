import Image from 'next/image';
import { withBasePath } from '@/lib/site';

export function ImageWithCaption({
  src,
  alt,
  caption
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-16">
      <div className="overflow-hidden bg-camel/25">
        <Image
          src={withBasePath(src)}
          alt={alt}
          width={1600}
          height={1000}
          sizes="(min-width: 1024px) 65vw, 100vw"
          className="w-full object-cover"
        />
      </div>
      <figcaption className="mt-4 max-w-3xl border-l border-camel/80 pl-4 text-sm leading-6 text-boho">
        {caption}
      </figcaption>
    </figure>
  );
}
