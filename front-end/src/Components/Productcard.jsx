import '../stylesheets/ProductCard.css'

function ProductCard({category}){
    if (!category) return <p>Loading..</p>
    return (
        category.length === 0 ? (
            <p>No products found</p>
          ) : (
            <div className="product_list">
              {category.map((product, index) => (
                <div key={index} className="product_card">
                  <h2>{product.style_number}</h2>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <p>{product.category}</p>
                  <img src={product.image_url} alt={product.title} />
                </div>
              ))}
            </div>
          )
    )
}

export default ProductCard;