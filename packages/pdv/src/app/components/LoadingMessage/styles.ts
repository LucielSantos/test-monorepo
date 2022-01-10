import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
  }
`;
