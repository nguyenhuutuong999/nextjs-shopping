import data from './auth.json';

export function login(username, password) {
  const user = data?.user?.find((user) => user.username == username && user.password === password);
  return user;
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
