import data from '../data.json';

export function getProductsById(productId) {
  console.log('productId:', productId)
  console.log('data:', data)
  const product = data.find((product) => product.id == productId);
  console.log('product:', product)
  return product;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsById(req.query.product);
    res.status(200).json(products);
  }
}
