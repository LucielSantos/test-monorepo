import { ButtonHTMLAttributes, FC, memo, ComponentProps, ReactNode } from "react";

import { Icon, LoadingMessage } from 'vy/app/components'

import * as Styles from "./styles";

type RootButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

interface IProps extends Styles.StyledButtonProps, RootButtonProps {
  isLoading?: boolean;
  icon?: ComponentProps<typeof Icon>;
  children: ReactNode
}

const ButtonComponent = ({ children, isLoading, type = 'button', icon, ...props }: IProps) => {
  return (
    <Styles.StyledButton type={type} {...props}>
      {isLoading ? (
        <LoadingMessage color="inherit" size={25} />
      ) : (
        <>
          {icon && <Icon {...icon} size={icon.size || 1} />}
          {children}
        </>
      )}
    </Styles.StyledButton>
  )
};

export const Button = memo(ButtonComponent);
