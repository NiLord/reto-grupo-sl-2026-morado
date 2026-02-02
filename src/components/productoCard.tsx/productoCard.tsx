type ProductoCardProps = {
  productName: string;
  productPrice: number;
  productStock: number;
  productId: number;
  quantitySelected: number;

  onCardPress: (productId: number) => void;
  onRemovePress: (productId: number) => void;
};

function ProductoCard({
  productName,
  productPrice,
  productStock,
  productId,
  quantitySelected,
  onCardPress,
  onRemovePress,
}: ProductoCardProps) {
  return (
    <div
      className="productCard"
      id={productId.toString()}
      onClick={() => onCardPress(productId)}
    >
      <div className="productTop">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemovePress(productId);
          }}
        >
          -
        </button>

        <img src="" alt="" className="productImg" />
        <div className="productSelected">x{quantitySelected}</div>
      </div>

      <p className="productName">{productName}</p>
      <p className="productPrice">${productPrice.toFixed(2)}</p>
      <p className="productoStock">Disponible {productStock}</p>
    </div>
  );
}

export default ProductoCard;
