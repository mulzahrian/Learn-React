import { Fragment,useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import PageContainer from "../components/fragments/PageContainer";
import CardProduct from "../components/fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Nike Air Max 270",
    description: "Nike Air Max 270 features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks. The sleek, modern design roots itself in Nike running heritage, while the bold colorways take it to the next level.",
    price: 299,
    imageSrc: "/images/shoes-1.jpg",
  },
  {
    id: 2,
    title: "Adidas Ultraboost 21",
    description: "Adidas Ultraboost 21 features a responsive Boost midsole for energy return and comfort. The Primeknit upper adapts to your foot for a snug, supportive fit, while the Stretchweb outsole provides flexibility and traction.",
    price: 299,
    imageSrc: "/images/shoes-1.jpg",
  },
  {
    id: 3,
    title: "Puma RS-X3 Puzzle",
    description: "Puma RS-X3 Puzzle combines retro style with modern comfort. The chunky silhouette is inspired by 80s and 90s sneakers, while the cushioned midsole and durable outsole ensure all-day wearability.",
    price: 299,
    imageSrc: "/images/shoes-1.jpg",
  },
  {
    id: 4,
    title: "Reebok Classic Leather",
    description: "Reebok Classic Leather offers timeless style with modern comfort. The soft leather upper provides a premium look and feel, while the EVA midsole ensures lightweight cushioning for all-day wear.",
    price: 299,
    imageSrc: "/images/shoes-1.jpg",
  },
];

const Dashboard = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    }
  ]);

  const handleAddToCart = (id) => {
    setCart([
      ...cart,
      {
        id,
        qty: 1,
      } 
    ])

  }


  return (
    <MainLayout>
      <PageContainer title="Dashboard">
        <Fragment>
        <div className="flex justify-center py-5">
          <div className="w-3/4 flex flex-w">
            {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header imageSrc={product.imageSrc} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}/>
            </CardProduct>
          ))}
          </div>
          <div className="w-1/4">
            <h1 className="text-3xl font-bold text-purple-600">Cart</h1>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const product = products.find((p) => p.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{item.qty}</td>
                      <td>{product.price * item.qty}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        </Fragment>
      </PageContainer>
    </MainLayout>
  );
};

export default Dashboard;