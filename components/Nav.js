import ActiveLink from './ActiveLink'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar id="nav" expand="lg" bg="dark" variant="dark">
            <Link href="/" passHref>
                <Navbar.Brand style={{marginLeft: 10}}>
                    <Image
                        src="/img/logo_yellow.svg"
                        className="d-inline-block align-top"
                        alt="Database Logo"
                        width={36}
                        height={36}
                    />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/submissions">Submission</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
  }