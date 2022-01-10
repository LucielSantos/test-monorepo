import React, {
  memo,
  useRef,
  useEffect,
  ComponentProps,
  useState,
} from "react";
import { useField } from "@unform/core";
import { TextField } from "../../TextField";

type InputRoot = Omit<
  ComponentProps<typeof TextField>,
  "defaultValue" | "error" | "ref"
>;

interface UnTextFieldProps extends InputRoot {
  name: string;
}

function BaseUnTextField({
  name,
  helperText,
  onChange,
  onFocus,
  onBlur,
  ...props
}: UnTextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);
  const [shrinkLabel, setShrinkLabel] = useState(!!defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        if (value) setShrinkLabel(true);

        clearError();

        ref.current.value = value;
      },
      clearValue: (ref) => (ref.current.value = ""),
    });
  }, [fieldName, registerField, inputRef]);

  return (
    <TextField
      {...props}
      ref={inputRef}
      defaultValue={defaultValue}
      error={!!error}
      helperText={error ? error : helperText}
      onFocus={(e) => {
        onFocus?.(e);
        setShrinkLabel(true);
      }}
      onBlur={(e) => {
        onBlur?.(e);

        if (e.target.value) return;

        setShrinkLabel(false);
      }}
      onChange={(e) => {
        onChange?.(e);
        error && clearError();

        if (e.target.value) setShrinkLabel(true);
      }}
      InputLabelProps={{ shrink: shrinkLabel }}
    />
  );
}

export const UnTextField = memo(BaseUnTextField);
