import React, { useState } from 'react';
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

// import UploadImages from '../ImageUpload/ImageUpload.js';

import DropboxChooser from 'react-dropbox-chooser';

const APP_KEY = 'njr7zjs0q6taanq';

export default function AddItemPopUp({ onAddNewItem }) {
  const { isAuthenticated } = useAuth0();

  //states for each of the input fields
  const [newProductName, setProductName] = useState('');
  const [newProductLocation, setProductLocation] = useState('');
  const [newEmail, setEmail] = useState('');
  const [newProductDescription, setProductDescription] = useState('');

  //these track the value of the input fields
  const handleNameChange = (event) => setProductName(event.target.value);
  const handleLocationChange = (event) =>
    setProductLocation(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleDescriptionChange = (event) =>
    setProductDescription(event.target.value);

  //DROPBOX
  const [url, setUrl] = useState('');
  function handleSuccess(files) {
    setUrl(files[0].link);
    // console.log(url);
    console.log(files);
  }

  //this variable handles the structure(template) of our object item
  const newItem = {
    title: newProductName,
    location: newProductLocation,
    image: url,
    email: newEmail,
    description: newProductDescription,
  };
  console.log(newItem);

  //ASYNC Function for posting the inputs state into the database API.
  async function postForm() {
    const url = 'https://reloved.herokuapp.com/items';
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
  }
  console.log(url);

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
                  {/* <UploadImages
                    onImageChange={onImageChange}
                    imageURLs={imageURLs}
                  /> */}
                  {/* <h1 style={{ textAlign: 'center' }}>
                    Upload Or Choose Files to DropBox
                  </h1>
                  <br />
                  <br /> */}
                  <div className={style.dropboxChooser}>
                  <DropboxChooser
                    appKey={APP_KEY}
                    success={handleSuccess}
                    cancel={() => console.log('closed')}
                    multiselect={true}
                    linkType={'direct'}
                  >
                    <Button
                      bgColor="color.pink"
                      borderRadius="25px"
                      fontFamily="font.body"
                      fontWeight="400"
                    >
                      Upload or Choose Files
                    </Button>

                    <img src={url} width="100" height="100" alt="" />
                  </DropboxChooser>
                  </div>

                  {/* product name input  */}
                  <FormControl>
                    <FormLabel fontFamily="font.body">Product Name</FormLabel>
                    <Input
                      placeholder="Name of Your Product"
                      value={newProductName}
                      onChange={handleNameChange}
                      bgColor="white"
                      borderRadius="25px"
                      fontFamily="font.body"
                      fontWeight="400"
                    />
                  </FormControl>
                  {/* product location input */}
                  <FormControl mt={4}>
                    <FormLabel fontFamily="font.body">Location</FormLabel>
                    <Input
                      placeholder="Product Location"
                      value={newProductLocation}
                      onChange={handleLocationChange}
                      bgColor="white"
                      borderRadius="25px"
                      fontFamily="font.body"
                      fontWeight="400"
                    />
                  </FormControl>
                  {/* product condition input */}
                  <FormControl mt={4}>
                    <FormLabel fontFamily="font.body">Email Address</FormLabel>
                    <Input
                      placeholder="Email Address"
                      value={newEmail}
                      onChange={handleEmailChange}
                      bgColor="white"
                      borderRadius="25px"
                      fontFamily="font.body"
                      fontWeight="400"
                    />
                  </FormControl>
                  {/* product description input */}
                  <FormControl mt={4}>
                    <FormLabel fontFamily="font.body">Description</FormLabel>
                    <Textarea
                      // to be used in the future
                      placeholder="Please, Describe Your Product"
                      value={newProductDescription}
                      onChange={handleDescriptionChange}
                      bgColor="white"
                      borderRadius="25px"
                      fontFamily="font.body"
                      fontWeight="400"
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
                      //on clicking, this button does three things:
                      onAddNewItem(); // 1) switches the toggle to fetch data
                      postForm(); // 2) adds a new item to the existing array of items
                      onClose(); // 3) closes the add item modal
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

//states for allowing image upload and rendering images in the application
// const [images, setImages] = useState([]);
// const [imageURLs, setImageURLs] = useState([]);

//use useEffect to look for changes in our images array, and when it detects a change first we want to see if there are images to convert into strings
// useEffect(() => {
//   if (images.length < 1) return;
//   const newImageUrls = [];
//   //if there are images within bounds, start adding them to a temporary array to collect those URL strings
//   images.forEach((image) => newImageUrls.push(URL.createObjectURL(image))); // <- //createObjectURL: takes in an image object and then returns a string of a temporary local source for that image
//   //Please note, on page reload or on re-render these strings will have to be re-built
//   setImageURLs(newImageUrls);
// }, [images]);

// access the files through the event object and then store them in our state
// function onImageChange(e) {
//   setImages([...e.target.files]);
// }
