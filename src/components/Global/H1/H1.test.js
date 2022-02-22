import React from 'react';
import { render } from '@testing-library/react';
import H1 from './H1';

// TDD testing
const testProps = {
  text: 'Reloved',
};
test('the h1 should render', () => {
  const { getByText } = render(<H1 {...testProps} />);
  const actual = getByText('Reloved');
  expect(actual).toBeInTheDocument();
});

// const testProps = {
//   buttonText: "Clear Liiist",
//   clearList: jest.fn(),
// };

// test("Given props of buttonText, the button should show with its own name", () => {
//   const { getByText } = render(<ClearList {...testProps} />);
//   const actual = getByText("Clear Liiist");
//   expect(actual).toBeInTheDocument();
// });
