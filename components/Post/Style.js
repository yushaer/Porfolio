import styled  from 'styled-components';
import {Container,Grid,Badge} from '@mui/material'
export const StyledBadge = styled(Badge)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.neutral.main};
  padding:0.3rem;
  border-radius: 0.25rem;
size: 1.5rem;
  
  `}
`