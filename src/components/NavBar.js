import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => (
  <nav className=" container-fluid m-0 p-3 d-block d-md-flex justify-content-start align-content-center gap-3 border navbar">
    <div className="   m-0 p-0 pe-5">
      <h2 className="nav-header">BooKstore CMS</h2>
    </div>
    <div className="d-flex gap-3">
      <Link className="text-decoration-none" to="/">Books</Link>
      <Link className="text-decoration-none" to="/categories">Categories</Link>
    </div>
    <div className="icon container  justify-content-end flex-fill">
      <FaUserCircle className="user-account" />
    </div>
  </nav>
);
export default NavBar;
