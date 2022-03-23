import ActiveLink from './ActiveLink'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar id='nav' className="navbar fixed-top navbar-expand-lg navbar-dark">
            <Link href="/">
                <a className="navbar-brand" style={{marginLeft: 10}}>
                    <Image
                        src="/img/logo_yellow.svg"
                        className="d-inline-block align-top"
                        alt="Database Logo"
                        width={36}
                        height={36}
                    />
                </a>
            </Link>
            <button 
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <ActiveLink activeClassName="active" href="/">
                            <a className="nav-link"> Home</a>
                        </ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink activeClassName="active" href="/submissions">
                            <a className="nav-link"> Submissions</a>
                        </ActiveLink>
                    </li>
                </ul>
            </div>
        </Navbar>
    );
  }