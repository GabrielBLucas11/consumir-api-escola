import styled from 'styled-components';
import { primaryColor, textColor, textDarkColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${textColor};
    margin: 0 10px 0;
    font-weight: bold;
  }

  a:hover {
    color: ${textDarkColor};
  }
`;
