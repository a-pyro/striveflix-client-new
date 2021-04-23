import React, { Component } from 'react';
import '../css/header.css';
import logoSVG from '../assets/logo.svg';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  makeActive = (path) => (this.props.location === path ? 'active' : '');

  render() {
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark fixed-top bg-transparent'>
          <Link className='navbar-brand' to='/'>
            <img src={logoSVG} alt='netflix-logo' width='160px' height='40px' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className={`nav-item` + this.makeActive('/')}>
                <Link className='nav-link' to='/'>
                  Home <span className='sr-only'></span>
                </Link>
              </li>
              <li className={`nav-item` + this.makeActive('/registration')}>
                <Link className='nav-link' to='/registration'>
                  Registration
                </Link>
              </li>
            </ul>

            <div className='mr-5'>
              <ul className='navbar-nav mr-auto'>
                <li>
                  <a href='#home'>
                    <i className='fas fa-search bg-transparent text-light mx-3 mt-3'></i>
                  </a>
                </li>
                <li>
                  <a href='#home'>
                    <i className='fas fa-gift bg-transparent text-light mx-3 mt-3'></i>
                  </a>
                </li>
                <li>
                  <a href='#home'>
                    <i className='fas fa-bell bg-transparent text-light mx-3 mt-3'></i>
                  </a>
                </li>

                <li className='dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#home'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <img
                      src='https://occ-0-2835-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYnnca7HCf0z4YHtIK5R8MIGCeMyodAsxBYSBmMkYHqjSw46VWWyNQirfwxT-CkbxPkp-G84Wu-iOMwGG-r9QAs.png?r=f71'
                      alt=''
                    />
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <a className='dropdown-item' href='edit-profile.html'>
                      Edit Profile
                    </a>
                    <a className='dropdown-item' href='#home'>
                      Another action
                    </a>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='#home'>
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div id='header-text'>
          <p className='text-light'>
            Search in the Open Movie Data Base.
            <br />
            Get info on your favourites movies & TV Shows.
          </p>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
