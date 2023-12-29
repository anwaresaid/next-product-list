import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/productDetails/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="product-price">${product.price}</p>
    </Link>
  );
};

export default ProductCard;
