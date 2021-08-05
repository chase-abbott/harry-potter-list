import React, { useState } from 'react';
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

const ButtonContainer = styled.div`
display: flex;
width: 100px;
justify-content: space-between;
align-items: center;
`;

const Button = styled.button`
height: 25px;
`;

export default function CharacterList(){
  const [page, setPage] = useState(1);
  const { characters, loading } = useCharacters(page);

  const characterItems = characters.map((char, i) => (
    <Li key={i}>
      <Character image={char.image} name={char.name} id={char.id}/>
    </Li>
  ));

  if(loading) return <h1>Loading... </h1>; 

  return (
    <>
      <ButtonContainer>
        <Button 
          disabled={page <= 1}
          onClick={() => setPage(prev => prev - 1)}> 	&larr; </Button>
        <h5> {page} </h5>
        <Button 
          disabled={page >= 34}
          onClick={() => setPage(prev => prev + 1)}> &rarr; </Button>
      </ButtonContainer>
      <Ul>{characterItems} </Ul>
    </>
  );
}
