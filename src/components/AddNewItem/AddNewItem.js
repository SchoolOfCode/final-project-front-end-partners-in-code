import React, { useState, useEffect } from 'react';
import colors from '../../index';

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
  Image,
  Box,
  scrollBehavior,
} from '@chakra-ui/react';

import UploadImages from '../ImageUpload/ImageUpload.js';

export default function AddItemPopUp({ onAddNewItem }) {
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

  //this variable handles the structure(template) of our object item
  const newItem = {
    itemId: 13,
    title: newProductName,
    location: newProductLocation,
    image: {
      img: imageURLs,
      alt: newProductName,
    },
  };

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
  return (
    <>
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
        bg="#e6998d"
        borderRadius="50"
        size="lg"
        justifyContent="center"
        display="flex"
        alignItems="center"
        textAlign="center"
        padding="30px"
      >
        +
      </Button>

      <Modal
        isOpen={isOpen}
        size={size}
        onClose={onClose}
        isCentered
        //scrollBehavior={outside}
      >
        {overlay}

        <ModalContent>
          <ModalHeader>Add product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UploadImages onImageChange={onImageChange} imageURLs={imageURLs} />

            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="Name of Your Product"
                value={newProductName}
                onChange={handleNameChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input
                placeholder="Product Location"
                value={newProductLocation}
                onChange={handleLocationChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Condition</FormLabel>
              <Input
                placeholder="Product Condition"
                value={newProductCondition}
                onChange={handleConditionChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                // to be used in the future
                placeholder="Please, Describe Your Product"
                value={newProductDescription}
                onChange={handleDescriptionChange}
                //unused above this line to next breaker
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                //on clicking, this button does two things:
                onAddNewItem(newItem); // 1) adds a new item to the existing array of items
                onClose(); // 2) closes the add item modal
              }}
              variant="ghost"
            >
              Add Item
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
