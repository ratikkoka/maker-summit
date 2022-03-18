import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <Link href="/">
                <a className="navbar-brand">
                    <Image
                        src="/img/logo_yellow.svg"
                        className="d-inline-block align-top"
                        alt="Database Logo"
                        width={36}
                        height={36}
                    />
                </a>
            </Link>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link" activeClassName="active"> Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/submissions">
                        <a className="nav-link" activeClassName="active"> Submissions</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
  }