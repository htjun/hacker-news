import { LayoutOuter, LayoutInner } from 'src/styles/Layout.style'

const Layout = (props: any) => {

  return (
    <LayoutOuter>
      <LayoutInner>
        {props.children}
      </LayoutInner>
    </LayoutOuter>
  )
}

export default Layout
