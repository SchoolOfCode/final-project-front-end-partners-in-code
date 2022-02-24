import React, { useState } from 'react';
import Logo from '../Global/Logo/LogoImage.png';
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
import items from '../../libs/items.js';
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

  //this variable handles the structure(template) of our object item
  const newItem = {
    itemId: 13,
    title: newProductName,
    location: newProductLocation,
    image: {
      img: '',
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
      >
        Open Modal
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
            <UploadImages />
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
