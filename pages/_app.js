import '../styles/globals.css'
import Layout from '../comps/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {
  return (
    <Layout>
     <Component{...pageProps}/>
    </Layout>
  )
}
