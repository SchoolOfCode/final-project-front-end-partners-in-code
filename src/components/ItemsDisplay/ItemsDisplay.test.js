import { render, screen } from '@testing-library/react';
import ListItem from '../ListItem/ListItem.js';
import ItemsDisplay from './ItemsDisplay.js';

describe('test for ItemsDisplay component', () => {
  test('check whether the ListItem component exists in the ItemsDisplay component', () => {
    render(<ItemsDisplay />);
    const actual = screen.getByTestId('list-item');
    expect(actual).toBeInTheDocument();
  });
});
