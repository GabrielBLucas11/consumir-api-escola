import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <> </>;
  return (
    <Container>
      <div>
        <ClipLoader color="#489FB5" speedMultiplier={1} size={50} />
        {/* #489FB5 */}
        <span> Carregando...</span>
      </div>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
