import { memo, useRef, useEffect, ComponentProps } from 'react';
import { useField } from '@unform/core';

import { Checkbox } from 'vy/app/components';

type CheckboxRootProps = ComponentProps<typeof Checkbox>;

interface UnCheckboxProps extends CheckboxRootProps {
  name: string;
  returnValue?: boolean;
}

function BaseUnCheckbox({ name, returnValue, helperText, ...props }: UnCheckboxProps) {

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      // setValue: (ref, value) => (ref.current.checked = value),
      getValue: ref =>
        returnValue
          ? ref.current.checked
            ? ref.current.value
            : ref.current.checked
          : ref.current.checked,
    });
  }, [fieldName, registerField]);

  return (
    <Checkbox
      defaultChecked={defaultValue}
      {...props}
      ref={inputRef}
      helperText={error ? error : helperText}
    />
  );
}

export const UnCheckbox = memo(BaseUnCheckbox);
