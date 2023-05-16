import { Link } from 'react-router-dom';
import '../components/projectSize/proSize.css'
import '../components/projectSize/prostyle.css'
import PRODUCTS from '../data2.js'

const SingleProduct = () => {
  return (
    <main>
    

      <div className="container content">
        <div className="row products-row">
          {PRODUCTS.map( (product) => {
            return (
              <div className="col-lg-4" key={product.id}>
                
                <div className="card">
                  <div className="img-wrap">
                    <img src={product.image} alt="" className="fixed-size-image"/>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.details}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <span>Price: <strong className="price">{product.price}</strong></span>
                      <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">VIEW &#8594;</Link>
                    </div>
                  </div>
                </div>

              </div>
            )
          } )}
        </div>
      </div>

    </main>
  )
}

export default SingleProduct;