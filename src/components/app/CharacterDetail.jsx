import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';

const DetailContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default function CharacterDetail(){
  const { id } = useParams();
  return <DetailContainer> {id} </DetailContainer>;
}
