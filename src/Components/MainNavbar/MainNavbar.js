import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MainNavbar.css'

export const MainNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="w-100 row d-flex">
          {/* <div className="col-4">
            <Link
              to="/">
              <p className="mx-4 my-0 badge badge-pill badge-dark">Ignacio Henin Coldorf</p>
            </Link>
          </div> */}
          <Nav className="col-8 ml-5">
            <Link
              to="/"
              className="badge badge-pill badge-dark align-self-center navItem">
              Home
              </Link>
            <Link
              to="/projects"
              className="badge badge-pill badge-dark align-self-center navItem ml-4">
              Projects
              </Link>
          </Nav>
        </Navbar.Brand>
      </Navbar>
    </div >
  )
}
