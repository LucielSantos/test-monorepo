import { TextField as TextFieldMui } from '@mui/material';

import { styled } from '@mui/material/styles';
import { DefaultTheme } from 'styled-components';

export const TextField = styled(TextFieldMui)<{ contained?: boolean; theme?: DefaultTheme }>`
  width: 100%;

  input,
  .MuiInputBase-multiline {
    padding: 0.75rem !important;
  }

  .MuiInputBase-root {
    background: ${({ theme, contained }) => contained && theme.colors.foreground};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background: ${({ theme, contained }) => contained && theme.colors.foreground};
  }

  .notranslate {
    font-size: 0.75rem;
    font-family: inherit;
  }
`;
