import React, { FC } from 'react'

import Head from 'next/head'

type Props = {
    children?: React.ReactNode,
    titulo?: string,
  };

export const Layout: FC<Props> = ( { children, titulo }) => {
  return (
    <>
      <Head>
        <title>{ titulo || "pedido material" }</title>
        <meta name="autor" content="Iñigo Miranda" />
        <meta name="descripcion" content="Hoja pedido materiales" />
        <meta name="keywords" content={ `${titulo}, Ezentis `}/>
      </Head> 

      <main>
        { children }
      </main> 
    </>
  )
}



