import Link from 'next/link'
import NavBar from '../components/NavBar';
import { AppConfig } from 'blockstack'
import ReactBlockstack, { useBlockstack } from 'react-blockstack'
import "../styles/index.scss"

const appConfig = new AppConfig(['store_write'])
const blockstack = ReactBlockstack({appConfig})

const Index = () => {
  const { signIn } = useBlockstack()
  return(
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <NavBar />
        <main role="main" className="inner cover">
            <h1 className="cover-heading">Decentralized Computing</h1>
            <p className="lead">Welcome to Next.js + Blockstack 🤟</p>
            <p className="lead">
                <Link href='/about'>
                  <button type="button" className="btn btn-secondary"
                          disabled={!signIn || null}
                          onClick={signIn}>
                    Sign in with Blockstack
                  </button>
                </Link>
            </p>
        </main>
    </div>
  )
};

export default Index;
