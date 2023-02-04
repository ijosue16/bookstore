import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => (
  <nav className=" container-fluid m-0 p-3 d-block d-md-flex justify-content-start align-content-center gap-3 border navbar">
    <div className="   m-0 p-0 pe-5">
      <h2 className="nav-header fw-bold">BooKstore CMS</h2>
    </div>
    <div className="d-flex gap-5">
      <Link className="text-decoration-none fw-bold books" to="/">BOOKS</Link>
      <Link className="text-decoration-none categories" to="/categories">CATEGORIES</Link>
    </div>
    <div className="icon container  justify-content-end flex-fill">
      <FaUserCircle className="user-account" />
    </div>
  </nav>
);
export default NavBar;
