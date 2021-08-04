import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Image = styled.img`
max-width: 300px;
max-height: 300px;`;

export default function Character({ image, name, id }){
  return (
    <Link to={`/${id}`}>
      <Image src={image} alt={name}/>
    </Link>
  );
}

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
