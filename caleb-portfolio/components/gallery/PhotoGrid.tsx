import Image from "next/image";
import type {Photo} from "../../data/photos/photos";



export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  return (
    <ul className="columns-1 gap-4 p-5 sm:columns-2 lg:columns-3">
      {photos.map((photo) => (
        <li key={photo.src} className="mb-4 break-inside-avoid overflow-hidden rounded-lg">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-auto w-full"
          />
        </li>
      ))}
    </ul>
  );
}