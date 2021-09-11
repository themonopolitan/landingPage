import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }

    render() {

        return (
            <Html>
                <Head>
 
                </Head>
                <body className="overflow-x-hidden bg-primary">
                    <Main className="h-screen"/>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
