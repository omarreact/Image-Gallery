import React, { useState } from "react";
import SingleImage from "./components/SingleImage";
import UploadImage from "./components/UploadImage";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Import your image assets here
import image1 from "./images/image-1.webp";
import image2 from "./images/image-10.jpeg";
import image3 from "./images/image-11.jpeg";
import image4 from "./images/image-2.webp";
import image5 from "./images/image-3.webp";
import image6 from "./images/image-4.webp";
import image7 from "./images/image-5.webp";
import image8 from "./images/image-6.webp";
import image9 from "./images/image-7.webp";
import image10 from "./images/image-8.webp";
import image11 from "./images/image-9.webp";

const App = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: image1,
      selected: false,
    },
    {
      id: 2,
      src: image2,
      selected: false,
    },
    {
      id: 3,
      src: image3,
      selected: false,
    },
    {
      id: 4,
      src: image4,
      selected: false,
    },
    {
      id: 5,
      src: image5,
      selected: false,
    },
    {
      id: 6,
      src: image6,
      selected: false,
    },
    {
      id: 7,
      src: image7,
      selected: false,
    },
    {
      id: 8,
      src: image8,
      selected: false,
    },
    {
      id: 9,
      src: image9,
      selected: false,
    },
    {
      id: 10,
      src: image10,
      selected: false,
    },
    {
      id: 11,
      src: image11,
      selected: false,
    },
    // Add more image objects here
  ]);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleToggleSelect = (id) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, selected: !image.selected } : image
    );
    setImages(updatedImages);
  };

  const handleDeleteSelected = () => {
    const selectedImagesCount = images.filter((image) => image.selected).length;

    if (selectedImagesCount > 0) {
      // Ask for confirmation before deleting

      const confirmDelete = window.confirm(
        `Are you sure you want to delete ${selectedImagesCount} ${
          selectedImagesCount > 1 ? "selected images" : "selected image"
        }?`
      );

      if (confirmDelete) {
        // User confirmed, delete selected images
        const updatedImages = images.filter((image) => !image.selected);
        setImages(updatedImages);
      }
    } else {
      // No selected images, show a message
      alert("No images selected for deletion.");
    }
  };

  const selectedImages = images.filter((image) => image.selected).length;

  const handleFileChange = (event) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newImage = {
        id: images.length + 1, // Generate a unique ID
        src: URL.createObjectURL(selectedFile), // Create a URL for the uploaded image
        selected: false,
      };

      setImages([...images, newImage]);
      setSelectedFile(null);
    }
  };

  function onChange(sourceId, sourceIndex, targetIndex) {
    const nextState = swap(images, sourceIndex, targetIndex);
    setImages(nextState);
  }

  return (
    <>
      <div className="container image-gallery rounded">
        <nav
          class="navbar navbar-light bg-light p-5"
          style={{ borderBottom: "2px solid #eee" }}
        >
          <span>
            <h4 className="heading text-xl ">
              {selectedImages === 0
                ? `Image Gallery`
                : `☑ ${selectedImages} File Selected`}
            </h4>
          </span>
          <span>
            <Button className="btn btn-danger" onClick={handleDeleteSelected}>
              Delete files
            </Button>
          </span>
          <span>
            <UploadImage
              handleFileChange={handleFileChange}
              handleUpload={handleUpload}
            />
          </span>
        </nav>

        <GridContextProvider onChange={onChange}>
          <GridDropZone
            id="images"
            boxesPerRow={5}
            rowHeight={250}
            style={{ height: 255 * Math.ceil(images.length / 4) }}
            className="box-group"
          >
            {images.map((image, index) => (
              <GridItem
                key={image.id}
                className={index === 0 ? "item1 allitem" : "allitem"}
              >
                <SingleImage
                  image={image.src}
                  id={image.id}
                  selected={image.selected}
                  handleToggleSelect={handleToggleSelect}
                />
              </GridItem>
            ))}
          </GridDropZone>
        </GridContextProvider>
      </div>
    </>
  );
};

export default App;
