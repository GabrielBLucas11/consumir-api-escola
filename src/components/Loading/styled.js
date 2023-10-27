import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  color: #fff;
  font-size: 30px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    z-index: 3;

    span {
      padding-left: 20px;
    }
  }
`;
