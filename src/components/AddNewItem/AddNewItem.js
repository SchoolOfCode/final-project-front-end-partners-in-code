import React, { useState, useEffect } from 'react';
import style from './AddNewItem.module.css';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import Auth0LoginButton from '../Auth0/Auth0LoginButton/Auth0Login';

import UploadImages from '../ImageUpload/ImageUpload.js';

export default function AddItemPopUp({ onAddNewItem }) {
  const { isAuthenticated } = useAuth0();

  //states for each of the input fields
  const [newProductName, setProductName] = useState('');
  const [newProductLocation, setProductLocation] = useState('');
  const [newProductCondition, setProductCondition] = useState('');
  const [newProductDescription, setProductDescription] = useState('');

  //these track the value of the input fields
  const handleNameChange = (event) => setProductName(event.target.value);
  const handleLocationChange = (event) =>
    setProductLocation(event.target.value);
  const handleConditionChange = (event) =>
    setProductCondition(event.target.value);
  const handleDescriptionChange = (event) =>
    setProductDescription(event.target.value);

  //states for allowing image upload and rendering images in the application
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  //use useEffect to look for changes in our images array, and when it detects a change first we want to see if there are images to convert into strings
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    //if there are images within bounds, start adding them to a temporary array to collect those URL strings
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image))); // <- //createObjectURL: takes in an image object and then returns a string of a temporary local source for that image
    //Please note, on page reload or on re-render these strings will have to be re-built
    setImageURLs(newImageUrls);
  }, [images]);

  // access the files through the event object and then store them in our state
  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  // //function to generate random number and store in variable
  // function randomIdNumber() {
  //   return Math.floor(Math.random() * (1000 - 12)) + 12;
  // }

  // let temporaryId = randomIdNumber();

  // //this variable handles the structure(template) of our object item
  // const newItem = {
  //   itemId: temporaryId,
  //   title: newProductName,
  //   location: newProductLocation,
  //   image: {
  //     img: imageURLs,
  //     alt: newProductName,
  //   },
  //   description: newProductDescription,
  // };

  //sets the state for the modal (toggle)
  const { isOpen, onOpen, onClose } = useDisclosure();
  //sets the state (size) of the modal
  const [size, setSize] = React.useState('xl');
  // sets the size of the model once open button is clicked
  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  //testing backdrop
  // function BackdropExample() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="40%"
      backdropBlur="2px"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  //above this testing backdrop

  if (isAuthenticated) {
    return (
      <>
        <div data-testid="modal">
          <div data-testid="modal-button">
            <Button
              onClick={() => {
                handleSizeClick(size);
                setOverlay(<OverlayOne />); //sets overlay
                onOpen(); //runs overlay once on open (prevents loop)
              }}
              key={size}
              color="black"
              variant="ghost"
              fontSize="40px"
              bgColor="color.pink"
              borderRadius="50px"
              width="80px"
              height="80px"
              justifyContent="center"
              display="flex"
              alignItems="center"
              textAlign="center"
              boxShadow="dark-lg"
              padding="30px"
            >
              +
            </Button>

            {/* MODAL START */}
            <Modal isOpen={isOpen} size={size} onClose={onClose} isCentered>
              {overlay}

              <ModalContent bgColor="color.beige" borderRadius="25px">
                <ModalHeader
                  fontFamily="font.heading"
                  bgColor="color.dustygreen"
                  color="white"
                  textAlign="center"
                  borderTopLeftRadius="25px"
                  borderTopRightRadius="25px"
                >
                  Add product
                </ModalHeader>
                {/* modal close button  */}
                <ModalCloseButton />

                {/* Modal body */}
                <ModalBody>
                  {/* Upload images button */}
                  <UploadImages
                    onImageChange={onImageChange}
                    imageURLs={imageURLs}
                  />
                  {/* product name input  */}
                  <FormControl>
                    <FormLabel>Product Name</FormLabel>
                    <Input
                      placeholder="Name of Your Product"
                      value={newProductName}
                      onChange={handleNameChange}
                      bgColor="white"
                      borderRadius="25px"
                    />
                  </FormControl>
                  {/* product location input */}
                  <FormControl mt={4}>
                    <FormLabel>Location</FormLabel>
                    <Input
                      placeholder="Product Location"
                      value={newProductLocation}
                      onChange={handleLocationChange}
                      bgColor="white"
                      borderRadius="25px"
                    />
                  </FormControl>
                  {/* product condition input */}
                  <FormControl mt={4}>
                    <FormLabel>Condition</FormLabel>
                    <Input
                      placeholder="Product Condition"
                      value={newProductCondition}
                      onChange={handleConditionChange}
                      bgColor="white"
                      borderRadius="25px"
                    />
                  </FormControl>
                  {/* product description input */}
                  <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      // to be used in the future
                      placeholder="Please, Describe Your Product"
                      value={newProductDescription}
                      onChange={handleDescriptionChange}
                      bgColor="white"
                      borderRadius="25px"
                      //unused above this line to next breaker
                    />
                  </FormControl>
                </ModalBody>
                {/* Lower area of model (buttons) */}
                <ModalFooter
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* add item button */}
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => {
                      //on clicking, this button does two things:
                      onAddNewItem(); // 1) adds a new item to the existing array of items
                      onClose(); // 2) closes the add item modal
                    }}
                    color="black"
                    variant="ghost"
                    fontSize="20px"
                    bgColor="color.pink"
                    width="180px"
                    height="45px"
                    size="lg"
                    display="flex"
                    textAlign="center"
                    boxShadow="lg"
                    position="center"
                    borderRadius="25px"
                  >
                    Add Item
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={style.auth0Plus}>
        <Auth0LoginButton text="+" />
      </div>
    );
  }
}
