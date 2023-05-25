import { useRouter } from 'next/router';

export default function DetalleProducto() {
  const router = useRouter();
  return <p>Id Producto: {router.query.slug}</p>;
}