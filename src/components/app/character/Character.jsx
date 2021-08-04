import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
max-width: 300px;
max-height: 300px;`;

export default function Character({ image, name }){
  return <Image src={image} alt={name}/>;
}

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
