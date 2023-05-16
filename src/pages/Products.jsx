import { Link } from 'react-router-dom'
import PRODUCTS from '../data.js'
import '../components/projectSize/proSize.css'
import '../components/projectSize/prostyle.css'


const Products = () => {
  return (
    <main>
    

      <div className="container content">
        <div className="row products-row">
          {PRODUCTS.map( (product) => {
            return (
              <div className="col-lg-4" key={product.id}>
                <div className="card fade-in-card">
                
                <div className="card">
                  <div className="img-wrap">
                    <img src={product.image} alt="" className="fixed-size-image" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.details}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to={`/products/${product.name}`} className="btn btn-primary btn-sm">MORE &#8594;</Link>
                    </div>  
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

export default Products