import { Alert, AlertIcon } from '@chakra-ui/react';

export default function AlertPopUp() {
  return (
    <Alert status="warning">
      <AlertIcon />
      Please login or create an account to view contact information
    </Alert>
  );
}
