import Button from "../components/elements/Button";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <div className="w-full max-w-sm bg-purple-300 border border-purple-700 rounded-lg shadow-lg">
        <a href="#">
          <img
            src="/images/shoes-1.jpg"
            alt="Product Image"
            className="p-8 rounded-t-lg"
          />
        </a>

        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-light text-center text-white">
              New Shoes
            </h5>
            <p className="text-white text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi non quod deserunt.
            </p>
          </a>
        </div>

        <div className="flex items-center justify-between px-5 pb-5">
          <span className="text-3xl font-bold text-white">$299</span>
          <Button className="bg-black text-purple-600 hover:bg-gray-200 font-bold py-2 px-4 rounded">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;