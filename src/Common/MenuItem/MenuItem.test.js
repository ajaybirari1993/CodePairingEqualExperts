import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';

describe("MenuItem", () => {
  it('should render passed content', () => {
    render(
      <MenuItem>Menu item 1</MenuItem>
    );
    const heading = screen.getByText('Menu item 1');
    expect(heading).toBeInTheDocument();
  });
})