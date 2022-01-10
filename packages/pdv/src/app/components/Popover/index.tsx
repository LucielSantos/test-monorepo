import React, { memo, ReactComponentElement, ReactNode, useState } from 'react';
import { Popover as MuiPopover } from '@mui/material';

import * as Styles from './styles';
import { Icon } from 'vy/app/components';

interface Option extends Styles.ItemPressProps {
  label: string | ReactComponentElement<any>;
  onClick?: () => void;
  disabled?: boolean;
}

interface PopOverProps {
  options: Option[];
  id?: string;
  children?: ReactNode;
}

function BasePopOver(props: PopOverProps) {

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderOptions = props.options.map(
    (option, index) =>
      !option.disabled && (
        <Styles.Item key={index}>
          <Styles.ItemPress
            variante={option.variante}
            onClick={() => {
              option.onClick?.();
              handleClose();
            }}
          >
            {option.label}
          </Styles.ItemPress>
        </Styles.Item>
      ),
  );

  const children = props.children || (
    <Icon name="moreVert" color={isOpen ? 'primary' : 'text500'} size={1.3} />
  );

  const toggle =
    typeof props.children === 'string' ? (
      <Styles.Toggle aria-describedby={props.id} onClick={handleClick}>
        {children}
      </Styles.Toggle>
    ) : (
      <Styles.ToggleIcon aria-describedby={props.id} onClick={handleClick}>
        {children}
      </Styles.ToggleIcon>
    );

  return (
    <Styles.Container onClick={event => event.stopPropagation()}>
      {toggle}
      <MuiPopover
        id={props.id}
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {renderOptions}
      </MuiPopover>
    </Styles.Container>
  );
}

export const Popover = memo(BasePopOver);
