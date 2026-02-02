type productoCardsProps = {
    productName : string;
    productPrice : number;
    productStock : number;
    productId: number;
    quantitySelected: number;
}

function productoCard({productName,productPrice,productStock,productId,quantitySelected}:productoCardsProps){

    return <div className="productCard" id={productId.toString()}>
        <div className="productTop">
            <button>Eliminar</button>
            <img src="" alt=""  className="productImg"/>
            <div className="productSelected">x{quantitySelected}</div>
        </div>
        <p className="productName">${productName}</p>
        <p className="productPrice">${productPrice.toFixed(2)}</p>
        <p className="productoStock">Disponible ${productStock}</p>
    </div>
}

export default productoCard;