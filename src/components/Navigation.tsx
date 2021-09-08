import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavWrapper } from 'src/styles/Navigation.style'

const menu = [
  { title: 'Top stories', path: '/' },
  { title: 'New stories', path: '/new' },
  { title: 'Ask HN', path: '/ask' },
  { title: 'Show HN', path: '/show' },
  { title: 'Jobs', path: '/jobs' },
]

const Navigation = () => {
  const router = useRouter()

  return (
    <NavWrapper>
      <h1>Hacker News</h1>
      <nav>
        <ul>
          {menu.map((item, index) => {
            return (
              <li key={index} className={
                router.pathname === item.path ? `active` : ``
              }>
                <Link href={item.path}>
                  {item.title}
                </Link>
              </li>
        )
      })}
        </ul>
      </nav>
    </NavWrapper>
  )
}

export default Navigation
