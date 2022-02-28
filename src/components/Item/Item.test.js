import { render, screen } from '@testing-library/react';
import Item from './Item.js';

const testProps = {
  img: '../../../public/images/bomber jacket.jpeg',
  alt: 'Pink bomber jacket',
  title: 'Pink Bomber Jacket',
  location: 'London',
};

describe('test for Item component', () => {
  test('check whether the Item component exists in the document', () => {
    render(<Item />);
    const actual = screen.getByTestId('item');
    expect(actual).toBeInTheDocument();
  });

  test('to check whether inside the Item component there is a p tag that displays the title', () => {
    render(<Item {...testProps} />);
    const actual = screen.getByTestId('item-title');
    expect(actual).toHaveTextContent(testProps.title);
  });

  test('to check whether inside the Item component there is a p tag that displays the location', () => {
    render(<Item {...testProps} />);
    const actual = screen.getByTestId('item-location');
    expect(actual).toHaveTextContent(testProps.location);
  });
});
