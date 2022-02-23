import React from 'react';
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

export default function AddItemPopUp() {
  //sets the state for the modal (toggle)
  const { isOpen, onOpen, onClose } = useDisclosure();
  //sets the state (size) of the modal
  const [size, setSize] = React.useState('xl');
  // sets the size of the model once open button is clicked
  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Button onClick={() => handleSizeClick(size)} key={size}>
        Open Modal
      </Button>

      <Modal
        isOpen={isOpen}
        size={size}
        onClose={onClose}
        isCentered
        //scrollBehavior={outside}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Box boxSize="100px" objectFit="cover">
              <Image src={Logo} alt="Logo" onClick={items[0].image.img} />
            </Box> */}
            <UploadImages />
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input placeholder="name your product!" />
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
              <FormLabel>Decription</FormLabel>
              <Textarea placeholder="Please describe your what your giving!" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Add Item
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
