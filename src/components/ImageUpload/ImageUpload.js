import React from 'react';
import { Box } from '@chakra-ui/react';

export default function UploadImages({ onImageChange, imageURLs }) {
  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      {imageURLs.map(
        (
          imageSrc //map function to render the temporary array of URL strings to the user
        ) => (
          <div className="imageDisplay">
            <Box boxSize="100px" objectFit="cover">
              <img src={imageSrc} alt={imageSrc} />
            </Box>
          </div>
        )
      )}
    </>
  );
}
