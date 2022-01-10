import { memo, ReactNode } from "react";

import * as Styles from './styles'

import { SideBar } from './SideBar'
import { Header } from './Header'
import { Flex } from "vy/app/styles/Flex";

interface AdminProps {
  children: ReactNode
}

function BaseAdmin ({ children }: AdminProps) {
  return (
    <Styles.Container>
      <Header />
      <Styles.Row>
        <SideBar />
        <Styles.Main>
          <div>
            {children}
          </div>
        </Styles.Main>
      </Styles.Row>
    </Styles.Container>
  )
}

export const Admin = memo(BaseAdmin);
