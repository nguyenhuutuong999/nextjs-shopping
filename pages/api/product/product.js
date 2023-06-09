import data from '../data.json';

export function getProductsById(productId) {
  const product = data.find((product) => product.id == productId);
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
