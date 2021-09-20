
export const getProductList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Product 1',
          price: '30',
          units: 20,
          imageUrl: '',
          productId: 'p1'
        },
        {
          name: 'Product 2',
          price: '20',
          units: 0,
          imageUrl: '',
          productId: 'p2'
        },
        {
          name: 'Product 3',
          price: '10',
          units: 20,
          imageUrl: '',
          productId: 'p3'
        },
        {
          name: 'Product 4',
          price: '30',
          units: 20,
          imageUrl: '',
          productId: 'p4'
        }
      ])
    }, 1000)
  })
}
