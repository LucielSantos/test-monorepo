import { ComponentProps, memo, useCallback, useState } from 'react';
import { UnTextField } from '../';

interface Props extends ComponentProps<typeof UnTextField> {}

const UnPasswordInputComponent = (props: Props): JSX.Element => {
  const [hide, setHide] = useState<boolean>(true);

  const toggleHide = useCallback(() => {
    setHide(prev => !prev);
  }, []);

  return (
    <UnTextField
      type={hide ? 'password' : 'text'}
      endIcon={{
        name: hide ? 'openEye' : 'closeEye',
        clickable: true,
        size: 1.4,
        color: 'text600',
        onClick: toggleHide,
      }}
      {...props}
    />
  );
};

export const UnPasswordInput = memo(UnPasswordInputComponent);
