import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const Row = styled.div`
  display:  flex;
  flex: 1;
  overflow-y: hidden;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  overflow-y: auto
`
