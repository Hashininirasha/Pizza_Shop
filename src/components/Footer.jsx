import {Link, NavLink} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>

        <nav className='d-flex justify-content-center'>
            <NavLink to='/' 
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Home</NavLink>
            <NavLink to='about'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >About</NavLink>
            <NavLink to='products'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Pizza</NavLink>
            {/* <NavLink to='login'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Login</NavLink> */}
        </nav>
        <div className="copyrights">
          &copy; 2023 <Link to="/"> Hashini Munasinghe</Link> - All Rights Reserved.
        </div>
        <FacebookIcon></FacebookIcon>
      </div>
    </footer>
  )
}

export default Footer