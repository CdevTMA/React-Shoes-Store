const ProductItem = ({ product, addToCart, showDetail }) => {
    const { name, image, price } = product;
    return (
        <div className='col-md-4'>
            <div className='card'>
                <img src={image} alt='' />
                <div className='card-body'>
                    <p>{name}</p>
                    <p>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
                <div className='card-footer'>
                    <button
                        className='btn btn-warning me-2'
                        onClick={() => {
                            addToCart(product);
                        }}>
                        Add to Cart <i className='fa-solid fa-cart-plus'></i>
                    </button>
                    <button
                        className='btn btn-info'
                        data-bs-toggle='modal'
                        data-bs-target='#modelDetailId'
                        onClick={() => {
                            showDetail(product);
                        }}>
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductItem;
