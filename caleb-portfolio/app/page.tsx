import PhotoGrid from "../components/gallery/PhotoGrid";
import { photos } from "../data/photos/photos";

export default function Home() {
  return (
    <section>
      <section id="gallery" className="scroll-mt-24 px-4 pb-12 sm:px-6">
      <h1 className="sr-only">Caleb Macedo, photography</h1>
        <PhotoGrid photos={photos} />
      </section>
    </section>
  );
}
