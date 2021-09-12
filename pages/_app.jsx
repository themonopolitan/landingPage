import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '../styles/fonts.css'

function MyApp({ Component, pageProps }) {
  return <>
    <head>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      <title>Monopolitan</title>
      <meta name="description" content='Master Class' />
      <meta charset="UTF-8" />

    </head>

    <Component {...pageProps} />
  </>
}

export default MyApp
