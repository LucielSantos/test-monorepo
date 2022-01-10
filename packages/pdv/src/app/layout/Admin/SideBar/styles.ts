import styled from 'styled-components'

import { NavLink as RootLink } from 'react-router-dom'

export const Container = styled.div`
  width: 5rem;
  height: 100%;
  padding: 1rem 0;
  background: #242424;
`

export const NavLink = styled(RootLink)`

`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1.75rem;
`

export const Li = styled.li`

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: .5rem;
    color: ${({ theme }) => theme.colors.text400}


  }

  a.active {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      fill: ${({ theme }) => theme.colors.primary}
    }
  }
`