import { memo } from "react"
import { useHistory } from "react-router-dom"

import { ReactComponent as Logo } from 'vy/app/assets/vyoo-logo.svg'
import { Popover, Icon } from "vy/app/components"
import { routePaths } from "vy/app/constants/routes"

import * as Styles from './styles'

function BaseHeader () {
  const history = useHistory()

  return (
    <Styles.Container>
      <Logo />
      <Popover
        options={[
          {
            label: (
              <>
                <Icon name="logout" marginRight={0.5} color="danger" />
                Sign Out
              </>
            ),
            onClick: () => history.push(routePaths.login),
          },
        ]}
      >
        <Icon name="user" size={1.3} color="text300" />
      </Popover>
    </Styles.Container>
  )
}

export const Header = memo(BaseHeader)
