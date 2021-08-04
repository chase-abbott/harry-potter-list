import React from 'react';
import { useCharacters } from '../../../hooks.js';
import styled from 'styled-components';
import Character from '../character/Character.jsx';

const Ul = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(4, 1fr)`;

const Li = styled.li`
margin: 10px;
`;

export default function CharacterList(){
  const { characters, loading } = useCharacters();

  const characterItems = characters.map((char, i) => (
    <Li key={i}>
      <Character image={char.image} name={char.name} id={char.id}/>
    </Li>
  ));

  if(loading) return <h1>Loading... </h1>; 

  return <Ul>{characterItems} </Ul>;
}
