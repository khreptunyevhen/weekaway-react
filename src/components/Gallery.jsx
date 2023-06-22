import galleryImg1 from "../images/gallery/gallery-1.jpg";
import galleryImg2 from "../images/gallery/gallery-2.jpg";
import galleryImg3 from "../images/gallery/gallery-3.jpg";
import galleryImg4 from "../images/gallery/gallery-4.jpg";
import galleryImg5 from "../images/gallery/gallery-5.jpg";

function Gallery() {
  return (
    <div id="gallery" className="max-w-[1140px] mx-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 grid-rows-[repeat(3,200px)] md:grid-rows-[repeat(2,200px)] gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src={galleryImg1}
            alt="weekaway gallery"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={galleryImg2}
            alt="weekaway gallery"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={galleryImg3}
            alt="weekaway gallery"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={galleryImg4}
            alt="weekaway gallery"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={galleryImg5}
            alt="weekaway gallery"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
