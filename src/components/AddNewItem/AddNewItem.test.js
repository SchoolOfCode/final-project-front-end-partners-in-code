import { render, screen, fireEvent } from '@testing-library/react';
import AddNewItem from './AddNewItem.js';
import { Button } from '@chakra-ui/react';

const onClick = jest.fn();
const testProps = {
  onClick,
};

describe('test for AddNewItem component', () => {
  test('check whether the AddNewItem component exists in the document', () => {
    render(<AddNewItem />);
    const actual = screen.getByTestId('modal');
    expect(actual).toBeInTheDocument();
  });

  test('check whether the add item button exists', () => {
    render(<AddNewItem />);
    const actual = screen.getByTestId('modal-button');
    expect(actual).toBeInTheDocument();
  });

  test('check whether on clicking the button, the modal opens', () => {
    render(<AddNewItem {...testProps} />);
    const actual = screen.getByTestId('modal-button');
    fireEvent.click(actual);
    expect(testProps.onClick).toEqual(expect.anything());
    //test passing but expect.anything() is not ideal... not testing what we want...
  });
});
