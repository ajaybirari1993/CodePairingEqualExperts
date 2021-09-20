
export const getProductList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Product 1',
          price: '30',
          units: 20,
          imageUrl: ''
        },
        {
          name: 'Product 2',
          price: '20',
          units: 0,
          imageUrl: ''
        },
        {
          name: 'Product 3',
          price: '10',
          units: 20,
          imageUrl: ''
        },
        {
          name: 'Product 4',
          price: '30',
          units: 20,
          imageUrl: ''
        }
      ])
    },3000)
  })
}
