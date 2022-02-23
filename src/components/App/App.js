import './App.css';
import Homepage from '../Homepage/Homepage.js';

import ContactPage from '../ContactPage/ContactPage';
import { Routes, Route, Link } from 'react-router-dom';

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
} from '@chakra-ui/react';

import ItemsDisplay from '../ItemsDisplay/ItemsDisplay.js';
import items from '../../libs/items.js';

function App() {
  function AddItemPopUp() {
    //sets the state for the modal (toggle)
    const { isOpen, onOpen, onClose } = useDisclosure();
    //sets the state (size) of the modal
    const [size, setSize] = React.useState('xl');
    // sets the size of the model once open button is clicked
    const handleSizeClick = (newSize) => {
      setSize(newSize);
      onOpen();
    };

    const [newProductName, setProductName] = useState('');
    const [newProductLocation, setProductLocation] = useState('');
    const [newProductCondition, setProductCondition] = useState('');
    const [newProductDescription, setProductDescription] = useState('');
    const [updatedListItems, setupdatedListItems] = useState('');

    const handleChange = (event) => setProductName(event.target.value);

    function handleClick() {
      setupdatedListItems([
        {
          itemId: 13,
          title: newProductName,
          location: newProductLocation,
          image: {
            img: '',
            alt: newProductName,
          },
        },
        ...items,
      ]);
    }

    return (
      <>
        <Button onClick={() => handleSizeClick(size)} key={size}>
          Open Modal
        </Button>

        <Modal isOpen={isOpen} size={size} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box boxSize="sm">
                <Image src={Logo} alt="Logo" />
              </Box>
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input
                  placeholder="name your product!"
                  value={newProductName}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input placeholder="Where is the item located?" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Condition</FormLabel>
                <Input placeholder="condition of the item" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea placeholder="Please describe your what your giving!" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Add Item
              </Button>
              <Button onClick={handleClick} variant="ghost">
                Secondary Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/newitems" element={<AddItemPopUp />} />
        <Route
          path="/items"
          element={<ItemsDisplay items={updatedListItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;
