import "./App.css";
import ProductCardList from "./components/productCardList.tsx/productCardList";

function home() {
  return (
    <>
      <div className="mainContainer">
        <ProductCardList></ProductCardList>
      </div>
    </>
  );
}

export default home;
