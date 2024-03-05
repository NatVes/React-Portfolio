import { Link, NavLink } from 'react-router-dom';
import "./style.css";
import Footer from '../Footer';

function NavBar() {    

    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col">
                    <img src="src/assets/me.jpg" alt="My photo" className="rounded-circle" width="200px"/>
                    <Link className="navbar-brand" to="/">
                        <h3>Natalia Veselova</h3>
                        <strong>Front-End Web Developer</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>               
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/project-gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                    Project Gallery
                                </NavLink>
                            </li>   
                            <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                    Contact
                                </NavLink>
                            </li>                 
                        </ul>                
                    </div>
                    <div className="col">
                        <Footer />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;