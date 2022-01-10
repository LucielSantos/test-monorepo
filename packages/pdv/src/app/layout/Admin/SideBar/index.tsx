import { memo } from "react"

import * as Styles from './styles'

import { adminRoutes } from 'vy/app/constants/routes'

function BaseSideBar () {

  const renderLinks = adminRoutes.map(({ icon: Icon, ...route}, index) => (
    <Styles.Li key={index}>
      <Styles.NavLink to={route.path}>
        <Icon iconSize={2} />
        <span>{route.label}</span>
      </Styles.NavLink>
    </Styles.Li>
  ))

  return (
    <Styles.Container>
      <Styles.Ul>
        {renderLinks}
      </Styles.Ul>
    </Styles.Container>
  )
}

export const SideBar = memo(BaseSideBar)