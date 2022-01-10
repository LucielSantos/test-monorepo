import { memo, forwardRef } from 'react';

import { CheckboxProps as MuiCheckboxProps } from '@mui/material';

import * as Styles from './styles';
import { Flex } from 'vy/app/styles/Flex';

interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
  leftLabel?: boolean;
  helperText?: string;
  clearHelperTextSpacing?: boolean;
}

const BaseCheckbox = forwardRef<any, CheckboxProps>(
  ({ label, leftLabel, clearHelperTextSpacing, helperText, ...props }, ref) => {

    return (
      <Flex column gap={1}>
        <Styles.Container>
          {leftLabel && label && <label>{label}</label>}
          <Styles.Checkbox {...props} inputRef={ref} />
          {!leftLabel && label && <label>{label}</label>}
        </Styles.Container>
        {!clearHelperTextSpacing && <Styles.HelperText>{helperText}</Styles.HelperText>}
      </Flex>
    );
  },
);

export const Checkbox = memo(BaseCheckbox);
