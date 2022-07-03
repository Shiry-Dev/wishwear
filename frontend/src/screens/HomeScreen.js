import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen(){
    return ( 
    <div>
        <h1>Produtos em destaque</h1>
          <div className="products">
            {
              data.products.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name}/>
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p><strong>R${product.price}</strong></p>
                  <button>Add no carrinho</button>
                </div>
              </div>))
            }
          </div>
    </div>
    );
   
}

export default HomeScreen;