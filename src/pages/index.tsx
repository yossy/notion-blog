import Header from '../components/header'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/vercel-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>My Notion Blog</h1>

      <Features />

      <div className="explanation">
      </div>
    </div>
  </>
)
