import { Link, NavLink } from 'react-router-dom';
import "./style.css";
import Footer from '../Footer';
import { useState } from 'react';

function NavBar() {    
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleLinkClick = () => {
        setExpanded(false);
    };

    return (
        <nav className="navbar navbar-expand-sm py-0">
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-12">
                        <div className="topImg">
                        <img src="./me.jpg" alt="My photo" className="rounded-circle mb-3" width="200px"/>
                        <Link className="text-decoration-none" to="/">
                            <h3>NATALIA VESELOVA</h3>                            
                        </Link>
                        <p>FRONT-END WEB DEVELOPER</p>
                        </div>                        
                        <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={expanded ? "true" : "false"} aria-label="Toggle navigation" onClick={handleToggle}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-2 me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
                                        ABOUT
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/project-gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
                                        PROJECT GALLERY
                                    </NavLink>
                                </li>   
                                <li className="nav-item">
                                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleLinkClick}>
                                        CONTACT
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link to="https://drive.google.com/file/d/1vRDJntc5SUfD650RGyxeFK9yGfF_-exB/view?usp=sharing" target="_blank" className='nav-link' onClick={handleLinkClick}>
                                        RESUME
                                    </Link>
                                </li>                 
                            </ul>                
                        </div>
                    </div>
                    <div className="col-12 hideNav">
                        <Footer />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;