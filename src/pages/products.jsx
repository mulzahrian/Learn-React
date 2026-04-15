import Button from "../components/elements/Button";
import CardProduct from "../components/fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "New Shoes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi non quod deserunt.",
    price: 299,
    imageSrc: "/images/shoes-1.jpg",
  },
  {
    id: 2,
    title: "New Shoes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi non quod deserunt.",
    price: 299,
    imageSrc: "/images/shoes-1.jpg",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header imageSrc={product.imageSrc} />
          <CardProduct.Body title={product.title}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;