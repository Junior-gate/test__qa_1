import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id='modal__root'></div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
