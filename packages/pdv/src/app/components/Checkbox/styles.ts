import styled from 'styled-components';
import { Checkbox as MuiCheckbox } from '@mui/material';

import FormHelperText from '@mui/material/FormHelperText';

export const Checkbox = styled(MuiCheckbox)`
  color: ${({ theme }) => theme.colors.text300};

  &.Mui-disabled {
    color: ${({ theme }) => theme.colors.text200};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0;

  label {
    font-size: 0.87rem;
    font-weight: 500;
  }
`;

export const HelperText = styled(FormHelperText)`
  color: ${({ theme }) => theme.colors.red};
`;
