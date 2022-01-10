import { CircularProgress, CircularProgressProps } from '@mui/material';
import { memo } from 'react';

import * as Styles from './styles';

interface IProps extends CircularProgressProps {
  text?: string;
}

const LoadingMessageComponent = ({ text, ...props }: IProps): JSX.Element => {
  return (
    <Styles.Container>
      <CircularProgress {...props} />

      {text && <p>{text}</p>}
    </Styles.Container>
  );
};

export const LoadingMessage = memo(LoadingMessageComponent);
