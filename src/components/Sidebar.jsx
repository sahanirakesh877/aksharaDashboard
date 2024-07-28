import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
{/* ======= Sidebar ======= */}
<aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <a className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Dashboard</span>
      </a>
    </li>{/* End Dashboard Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-menu-button-wide" /><span>Components</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Alerts</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Accordion</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Badges</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Breadcrumbs</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Buttons</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Cards</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Carousel</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>List group</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Modal</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Tabs</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Pagination</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Progress</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Spinners</span>
          </a>
        </li>
        <li>
          <a href>
            <i className="bi bi-circle" /><span>Tooltips</span>
          </a>
        </li>
      </ul>
    </li>{/* End Components Nav */}



    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-journal-text" /><span>Forms</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <Link to="/latest-blog">
            <i className="bi bi-circle" /><span>Latest Blog</span>
          </Link>
        </li>
        <li>
          <Link to='/activity-blog'>
            <i className="bi bi-circle" /><span>Activity Blog</span>
          </Link>
        </li>
        <li>
          <Link to='/banner-photo'>
            <i className="bi bi-circle" /><span>bannerPhoto</span>
          </Link>
        </li>
        <li>
          <Link to='/threeD'>
            <i className="bi bi-circle" /><span>3-D gallery Rotation</span>
          </Link>
        </li>
      </ul>
    </li>{/* End Forms Nav */}



    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-gem" /><span>Icons</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="icons-bootstrap.html">
            <i className="bi bi-circle" /><span>Bootstrap Icons</span>
          </a>
        </li>
        <li>
          <a href="icons-remix.html">
            <i className="bi bi-circle" /><span>Remix Icons</span>
          </a>
        </li>
        <li>
          <a href="icons-boxicons.html">
            <i className="bi bi-circle" /><span>Boxicons</span>
          </a>
        </li>
      </ul>
    </li>{/* End Icons Nav */}


    <li className="nav-heading">Pages</li>

    <li className="nav-item">
      <Link className="nav-link collapsed" to="/profile">
        <i className="bi bi-person" />
        <span>Profile</span>
      </Link>
    </li>{/* End Profile Page Nav */}


    <li className="nav-item">
      <Link className="nav-link collapsed" to="/register">
        <i className="bi bi-card-list" />
        <span>Register</span>
      </Link>
    
    
    </li>{/* End Register Page Nav */}


    <li className="nav-item">
      <Link className="nav-link collapsed" to="/login">
        <i className="bi bi-box-arrow-in-right" />
        <span>Login</span>
      </Link>
    </li>{/* End Login Page Nav */}
    <li className="nav-item">
      <Link className="nav-link collapsed" to="*">
        <i className="bi bi-dash-circle" />
        <span>Error 404</span>
      </Link>
    </li>{/* End Error 404 Page Nav */}
  </ul>
</aside>{/* End Sidebar*/}

    </>
  )
}

export default Sidebar
