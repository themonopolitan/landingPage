import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '../styles/fonts.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
