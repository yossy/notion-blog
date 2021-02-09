import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/yossy_dev',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/yossy',
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img
          src="/music-cat.jpg"
          height="85"
          width="250"
          alt="avatar with music-cat"
        />
      </div>

      <h1 style={{ marginTop: 0 }}>About</h1>

      <div className={contactStyles.name}>
        Taiki Yoshimura
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
