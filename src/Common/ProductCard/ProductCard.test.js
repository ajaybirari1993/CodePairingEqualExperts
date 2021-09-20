import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe("ProductCard", () => {

  it('should render image', () => {
    render(
      <ProductCard data={{
        name: 'Product 1',
        price: '30',
        units: 0,
        imageUrl: ''
      }} />
    );
    const imageEle = screen.getByTestId('Product 1');
    expect(imageEle).toBeInTheDocument();

    const productName = screen.getByText('Product 1');
    expect(productName).toBeInTheDocument();


  });
})