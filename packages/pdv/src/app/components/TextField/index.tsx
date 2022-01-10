import React, { memo, forwardRef } from "react";
import { TextFieldProps as TextFieldMuiProps } from "@mui/material";

import * as Styles from "./styles";
import { Icon, IIconProps } from "../Icon";

export type TextFieldProps = Omit<
  TextFieldMuiProps,
  "variant" | "inputRef" | "size"
> & {
  label?: string;
  clearHelperTextSpacing?: boolean;
  contained?: boolean;
  startIcon?: IIconProps | IIconProps["name"];
  placeholderAlternative?: string;
  endIcon?: IIconProps | IIconProps["name"];
};

const BaseTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      clearHelperTextSpacing,
      helperText,
      startIcon,
      endIcon,
      contained,
      placeholder,
      placeholderAlternative,
      ...props
    },
    ref
  ) => {
    return (
      <Styles.TextField
        contained={contained}
        variant="outlined"
        inputRef={ref}
        label={label}
        size="medium"
        helperText={helperText || (clearHelperTextSpacing ? undefined : " ")}
        placeholder={placeholderAlternative || placeholder}
        InputProps={{
          startAdornment: startIcon && (
            <Icon
              color="text500"
              {...(typeof startIcon === "string"
                ? { name: startIcon }
                : startIcon)}
            />
          ),
          endAdornment: endIcon && (
            <Icon
              color="text500"
              {...(typeof endIcon === "string" ? { name: endIcon } : endIcon)}
            />
          ),
          ...props.InputProps,
        }}
        {...props}
      />
    );
  }
);

export const TextField = memo(BaseTextField);
