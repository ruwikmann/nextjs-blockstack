import Link from 'next/link'
import NavBar from '../components/NavBar'
import "../styles/index.scss"

const About = () => (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <NavBar />
        <main role="main" className="inner cover">
            <h1 className="cover-heading">This Is The Future of Apps</h1>
            <p className="lead">Next.js + Blockstack is a wicked combo 🤩</p>
            <p className="lead">
                <Link href='/'><button type="button" className="btn btn-secondary">Sign out</button></Link>
            </p>
        </main>
    </div >


);

export default About;