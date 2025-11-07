import { memo } from "react";
import { UserAuth } from "../../../context/AuthContext";
import ProductCard from "./product_cards/ProductCard";
import LoadingComponent from "../../Loading/LoadingComponent";

const ShopPage = memo(() => {
  const { products_array } = UserAuth();

  return (
    <>
      <div
        className="relative min-h-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-3/4 lg:mx-auto gap-6 justify-items-center items-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        {Array.isArray(products_array) ? (
          products_array.map((prodct, i) => (
            <ProductCard key={i} prodct={prodct} />
          ))
        ) : (
          <div className="absolute my-auto mx-auto md:w-full md:h-full text-center">
            <LoadingComponent />
            <p className="text-xl text-black my-6">
              This will take a moment...
            </p>
          </div>
        )}
      </div>
    </>
  );
});

export default ShopPage;
