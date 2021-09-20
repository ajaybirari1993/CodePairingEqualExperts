import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Header", () => {
  it('should render heading', () => {
    render(
      <Header />
    );
    const heading = screen.getByText('My Cart');
    expect(heading).toBeInTheDocument();
  });
})