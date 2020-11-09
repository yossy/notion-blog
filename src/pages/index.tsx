import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import Link from 'next/link'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/music-cat.jpg"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>My Notion Blog</h1>
      <h2>
        <Link href={'/blog'}>
          <a className={sharedStyles.layout}>
            → Go to Article list!
          </a>
        </Link>
      </h2>

      <div className="explanation">
      </div>
    </div>
  </>
)
