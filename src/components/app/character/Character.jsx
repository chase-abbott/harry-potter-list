import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Image = styled.img`
max-width: 300px;
max-height: 300px;
border-radius: 10px;
box-shadow: 0 1px 2px rgba(0,0,0,0.15);
transition: box-shadow 0.3s ease-in-out;

&:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}`;

export default function Character({ image, name, id }){
  return (
    <Link to={`/detail/${id}`}>
      <Image src={image} alt={name}/>
    </Link>
  );
}

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
