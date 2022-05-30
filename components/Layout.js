import Head from 'next/head'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
        <title></title>
        <meta name="keywords" content={keywords}/>
        <meta name="description" content={description}/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        
        
        <main className='container mx-auto my-7'>
          {children}
        </main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcome to  Devspace',
  keywords: 'developement, coding, programming',
  description: 'The best info about tech'
}
