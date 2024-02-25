import styles from "../styles/gallery.module.scss";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const images = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/19554/2---JUcW6Fi-th.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/19554/2---JUcW6Fi-th.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/19554/2---JUcW6Fi-th.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/19554/2---JUcW6Fi-th.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/19554/2---JUcW6Fi-th.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/19554/2---JUcW6Fi-th.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/19554/2---JUcW6Fi-th.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/19554/2---JUcW6Fi-th.jpg",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
    setShowModal(false);
  };
  return (
    <div className={styles.gallery_container}>
    <h1>Image Gallery</h1>
    <div className={styles.image_gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.gallery_item} onClick={() => handleImageClick(image)}>
          <div className={styles.thumbnail}>
            <span>
              <img src={image} alt={`Image ${index}`} />
            </span>
          </div>
        </div>
      ))}
    </div>
    <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
      <Modal.Body>
        {selectedImage && (
          <img src={selectedImage} alt="Fullscreen" style={{ width: '100%', height: 'auto' }} />
        )}
      </Modal.Body>
    </Modal>
  </div>
  );
}
export default Gallery;
