import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export function Gallery() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className="modal-window gallery">
      <div className="exitBtn-container">
        <button className="exitBtn">X</button>
      </div>
      <h2 className="section-title">Campground Gallery</h2>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        showIndex={true}
      />
    </div>
  );
}
