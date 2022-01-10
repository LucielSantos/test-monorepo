import styled from 'styled-components';
import FormHelperText from '@mui/material/FormHelperText';

export const HelperText = styled(FormHelperText)`
  color: ${({ theme }) => theme.colors.red};
`;
