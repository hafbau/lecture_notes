import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from './Game';

test('Change cheat state when clicking on robot', () => {
  const { container, getByTestId, getByText } = render(<Game />);
  // const robotIcon = getByTestId('robot-icon');
  const robotIcon = getByText('🤖');

  fireEvent.click(robotIcon);
  expect(robotIcon).toHaveClass('cheating');

  fireEvent.click(robotIcon);
  expect(robotIcon).not.toHaveClass('cheating');
});
