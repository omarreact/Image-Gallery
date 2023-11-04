// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "./App.css";

// const finalSpaceCharacters = [
//   {
//     id: "gary",
//     name: "Gary Goodspeed",
//     thumb: "/images/gary.png",
//   },
//   {
//     id: "cato",
//     name: "Little Cato",
//     thumb: "/images/cato.png",
//   },
//   {
//     id: "kvn",
//     name: "KVN",
//     thumb: "/images/kvn.png",
//   },
//   {
//     id: "mooncake",
//     name: "Mooncake",
//     thumb: "/images/mooncake.png",
//   },
//   {
//     id: "quinn",
//     name: "Quinn Ergon",
//     thumb: "/images/quinn.png",
//   },
//   {
//     id: "hgjhg",
//     name: "Gary Goodspeed",
//     thumb: "/images/gary.png",
//   },
//   {
//     id: "vbn",
//     name: "Little Cato",
//     thumb: "/images/cato.png",
//   },
//   {
//     id: "fgg",
//     name: "KVN",
//     thumb: "/images/kvn.png",
//   },
//   {
//     id: "asd",
//     name: "Mooncake",
//     thumb: "/images/mooncake.png",
//   },
//   {
//     id: "qwe",
//     name: "Quinn Ergon",
//     thumb: "/images/quinn.png",
//   },
// ];

// function App() {
//   const [characters, updateCharacters] = useState(finalSpaceCharacters);

//   function handleOnDragEnd(result) {
//     if (!result.destination) return;

//     const items = Array.from(characters);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     updateCharacters(items);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Final Space Characters</h1>
//         <DragDropContext onDragEnd={handleOnDragEnd}>
//           <Droppable droppableId="characters">
//             {(provided) => (
//               <ul
//                 className="characters"
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//               >
//                 {characters.map(({ id, name, thumb }, index) => {
//                   return (
//                     <Draggable key={id} draggableId={id} index={index}>
//                       {(provided) => (
//                         <li
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                         >
//                           <div className="characters-thumb">
//                             <img src={thumb} alt={`${name} Thumb`} />
//                           </div>
//                           <p>{name}</p>
//                         </li>
//                       )}
//                     </Draggable>
//                   );
//                 })}
//                 {provided.placeholder}
//               </ul>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </header>
//       <p>
//         Images from{" "}
//         <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">
//           Final Space Wiki
//         </a>
//       </p>
//     </div>
//   );
// }

// export default App;

import React, { useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

// Component for individual image item
const ImageItem = ({ image, index, handleToggleSelect }) => {
  return (
    <div
      className={
        index === 0
          ? "col-span-2 row-span-2 image-shadow border-solid border-2 border-#8d8d8d-500 bg-white rounded-lg"
          : "image-shadow border-solid border-2 border-#8d8d8d-500 bg-white rounded-lg"
      }
    >
      <Draggable
        key={image.id.toString()}
        draggableId={image.id.toString()}
        index={index}
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="image-box"
          >
            <input
              type="checkbox"
              className="check_box"
              checked={image.selected}
              onChange={() => handleToggleSelect(image.id)}
            />
            <label htmlFor="vue-checkbox">
              <img
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={`Image ${image.id}`}
              />
            </label>
            <div className="middle" />
          </div>
        )}
      </Draggable>
    </div>
  );
};

// Component for the upload section
const UploadSection = ({ handleFileChange, handleUpload }) => {
  return (
    <div className=" border-solid border-2 border-#8d8d8d-500 rounded-lg text-center">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover-bg-bray-800  hover-bg-gray-100 dark-border-gray-600 dark:hover-border-gray-500 dark-hover-bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark-text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark-text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark-text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <button
        className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark-bg-blue-600 dark-hover-bg-blue-700 focus-outline-none dark-focus-ring-blue-800  mt-5"
        onClick={handleUpload}
      >
        Upload Image
      </button>
    </div>
  );
};

// Component for the main App
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
    const updatedImages = images.filter((image) => !image.selected);
    setImages(updatedImages);
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

  const [isDraggingHorizontal, setIsDraggingHorizontal] = useState(false);

  const handleDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;

      const items = Array.from(images);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      setImages(items);
    },
    [images]
  );

  const handleDragUpdate = useCallback((update) => {
    // Detect the drag direction based on update information
    const xMovement =
      update.destination?.droppableId - update.source.droppableId;

    setIsDraggingHorizontal(xMovement !== 0);
  }, []);

  return (
    <>
      <div className="bg-white m-20 rounded-lg">
        <nav style={{ borderBottom: "2px solid #eee" }}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <h2 className="heading text-xl ">
              {selectedImages === 0
                ? `Gallery`
                : `${selectedImages} File Selected`}
            </h2>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-solid-bg"
            >
              <a
                className="heading text-xl"
                onClick={handleDeleteSelected}
                style={{
                  textDecoration: "underline",
                  color: "rgb(255, 84, 84)",
                  cursor: "pointer",
                }}
              >
                Delete files
              </a>
            </div>
          </div>
        </nav>

        <DragDropContext
          onDragEnd={handleDragEnd}
          onDragUpdate={handleDragUpdate}
        >
          <Droppable
            droppableId="characters"
            direction={isDraggingHorizontal ? "horizontal" : "vertical"}
          >
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="grid grid-cols-5 gap-4 p-10"
              >
                {images.map((image, index) => (
                  <ImageItem
                    key={image.id}
                    image={image}
                    index={index}
                    handleToggleSelect={handleToggleSelect}
                  />
                ))}
                {provided.placeholder}
                <UploadSection
                  handleFileChange={handleFileChange}
                  handleUpload={handleUpload}
                />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default App;
