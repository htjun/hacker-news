import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavWrapper, NavItem } from 'src/styles/Navigation.style'
import HnLogo from 'src/assets/images/HnLogo.svg'
import IconGraphUp from 'src/assets/icons/IconGraphUp.svg'
import IconHandUp from 'src/assets/icons/IconHandUp.svg'
import IconIdCard from 'src/assets/icons/IconIdCard.svg'
import IconMegaphone from 'src/assets/icons/IconMegaphone.svg'
import IconSparkle from 'src/assets/icons/IconSparkle.svg'

const menu = [
  { title: 'Top stories', path: '/' },
  { title: 'New stories', path: '/new' },
  { title: 'Ask HN', path: '/ask' },
  { title: 'Show HN', path: '/show' },
  { title: 'Jobs', path: '/jobs' },
]

const getMenuIcon = (path: string) => {
  switch (path) {
    case '/':
      return <IconGraphUp />
      break;
    case '/new':
      return <IconSparkle />
      break;
    case '/ask':
      return <IconHandUp />
      break;
    case '/show':
      return <IconMegaphone />
      break;
    case '/jobs':
      return <IconIdCard />
      break;
    default:
      break;
  }
}

const Navigation = () => {
  const router = useRouter()

  return (
    <NavWrapper>
      <h1><HnLogo /></h1>
      <nav>
        <ul>
          {menu.map((item, index) => {
            return (
              <NavItem key={index} className={
                router.pathname === item.path ? `active` : ``
              }>
                <Link href={item.path}>
                  <a>
                    {getMenuIcon(item.path)}
                    <span>{item.title}</span>
                  </a>
                </Link>
              </NavItem>
        )
      })}
        </ul>
      </nav>
    </NavWrapper>
  )
}

export default Navigation
