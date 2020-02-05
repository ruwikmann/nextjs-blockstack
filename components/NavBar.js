import React from 'react'
import Link from './ActiveLink'

export default function NavBar() {
    return (
        <header className="masthead mb-auto">
            <div className="inner">
                <h3 className="masthead-brand">Next.js Blockstack</h3>
                <nav className="nav nav-masthead justify-content-center">
                    <Link activeClassName="active" href="/"><a className="nav-link ">Home</a></Link>
                    <Link activeClassName="active" href="/about"><a className="nav-link ">About</a></Link>
                </nav>
            </div>
        </header>
    )
}