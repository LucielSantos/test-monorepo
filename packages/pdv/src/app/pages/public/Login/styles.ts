import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 2rem;
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    margin-bottom: 3rem;
  }

  .MuiCheckbox-root {
    padding-left: 0;
  }
`;

export const ForgotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text600};

  > a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  }
`;
