import styled from 'styled-components';
import { IconButton, ButtonBase } from '@mui/material';

export const Container = styled.div``;

export const List = styled.ul`
  box-shadow: 0px 3px 20px #00000029;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  position: absolute;
  top: 100%;
  right: 100%;
  z-index: 100;
`;

export const Item = styled.li`
  font-weight: 500;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.foreground};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const ToggleIcon = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Toggle = styled(ButtonBase)`
  display: block;
  cursor: pointer;
  padding: .5rem 1rem !important;
  text-align: left;
  border-radius: ${props => props.theme.borderRadius.md};

`;

export interface ItemPressProps {
  variante?: 'error' | 'warn' | 'success' | 'defaultTheme';
}

export const ItemPress = styled(ButtonBase)<ItemPressProps>`
  width: 100%;
  height: 100%;
  min-width: 7rem;
  padding: 0.5rem 1rem;
  justify-content: flex-start;
  color: ${({ theme, variante = 'defaultTheme' }) => theme.popover[variante].color};
`;
