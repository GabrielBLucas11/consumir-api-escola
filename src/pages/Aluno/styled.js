import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 18px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
      font-style: italic;
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    z-index: 2;

    &:hover {
      z-index: 1;
    }
  }

  svg.userCircle {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    z-index: 2;

    &:hover {
      z-index: 1;
    }
  }

  svg.edit {
    color: #fff;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    z-index: 1;
    height: 180px;
    width: 180px;
    border-radius: 50%;

    &:hover {
      background: rgba(0, 0, 0, 0.4);
      z-index: 2;
      svg.edit {
        color: ${colors.primaryColor};
      }
    }
  }

  /* display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50px;
  } */
`;

export const Title = styled.h1`
  text-align: center;
`;

// export const UserCircle = styled(FaUserCircle)`
//   z-index: 2;
// `;
