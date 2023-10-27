import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { textDarkColor } from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div.alunos {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    padding: 5px 0;
    gap: 5px;
  }

  div + div {
    border-top: 1px solid #eee;
  }

  span.nome {
    grid-column: span 4;
  }
  span.email {
    grid-column: span 5;
  }

  a svg {
    transition: all 300ms;

    &:hover {
      color: ${textDarkColor};
    }
  }
`;

export const ProfilePicture = styled.div`
  grid-column: span 1;
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
`;
