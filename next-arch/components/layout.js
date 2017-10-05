import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href={{ pathname: '/me', query: { name: 'ghigt' } }}><a>Me</a></Link>
        <Link href='/contact'><a>Contact</a></Link>
        <style jsx>{`
          a {
            margin-right: 1vw
          }
        `}</style>
      </nav>
    </header>

    {children}

    <footer>
      I'm here to stay
    </footer>
  </div>
)
