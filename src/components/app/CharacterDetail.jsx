import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useCharacterDetail } from '../../hooks.js';

const DetailContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Image = styled.img`
border-radius: 10px;
`;

const H1 = styled.h1`
margin: 5px;
`;

const H3 = styled.h3`
margin: 5px;
`;

export default function CharacterDetail(){
  const { id } = useParams();
  const { character, loading } = useCharacterDetail(id);

  if(loading) return <h1> Loading... </h1>;

  return (
    <>
      <Link to="/"> Back to Home</Link>
      <DetailContainer> 
        <Image src={character.image} alt={character.name}/>
        <H1> {character.name}</H1>
        <H3> Status: {character.status}</H3>
        <H3> Species: {character.species}</H3>
        <H3> Origin: {character.origin.name} </H3>
      </DetailContainer>
    </>
  );
}
