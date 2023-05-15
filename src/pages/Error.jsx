import { Link } from 'react-router-dom'
import '../shared/shared.css';
// import { Errors } from '../components/Error-section/Hero';



const Error = () => {
  return (
    <main>
  {/* <Errors/> */}
      <div className="container content">
        <p>Sorry ... Page not found...</p>
        <Link to="/" className="btn btn-primary">Go Back to Homepage</Link>
      </div>
    </main>
  )
}

export default Error