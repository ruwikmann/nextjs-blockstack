import Link from 'next/link'
import NavBar from '../components/NavBar';
import "../styles/index.scss"

const Index = () => (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <NavBar />
        <main role="main" className="inner cover">
            <h1 className="cover-heading">Decentralized Computing</h1>
            <p className="lead">Welcome to Next.js + Blockstack 🤟</p>
            <p className="lead">
                <Link href='/about'><button type="button" className="btn btn-secondary">Sign in with Blockstack</button></Link>
            </p>
        </main>
    </div>
);

export default Index;