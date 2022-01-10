import { ButtonBase, ButtonBaseProps } from '@mui/material';
import styled, { DefaultTheme, css } from 'styled-components';

export interface StyledButtonProps extends ButtonBaseProps {
  variant?: keyof DefaultTheme['buttons'];
  fullWidth?: boolean;
  outline?: boolean;
}

export const StyledButton = styled(ButtonBase)<StyledButtonProps>`
  padding: 0.5rem 1rem;
  min-height: 2.9375rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  min-width: ${({ fullWidth }) => !fullWidth && '8rem'};
  transition: filter 0.2s;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  :hover {
    filter: brightness(95%);
  }

  :disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }

  background-color: ${({ theme, variant = 'primary', outline }) =>
    outline ? theme.buttons[variant].outline.background : theme.buttons[variant].background};
  color: ${({ theme, variant = 'primary', outline }) =>
    outline ? theme.buttons[variant].outline.color : theme.buttons[variant].color};
  border: ${({ theme, variant = 'primary', outline }) =>
    outline && `1px solid ${theme.buttons[variant].outline.borderColor}`};
`;
