import React from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

interface Character {
  name: string;
  id: number;
  image: string;
  species: string;
  status: string;
}

interface CharacterCardProps {
  character: Character;
}

const styles = {
    card: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 16px;
      margin: 16px;
      background-color: #FDF5E6;
      color: black;
    `,
    image: css`
      width: 100%;
      max-width: 200px;
      height: auto;
      margin-bottom: 16px;
      cursor: pointer;
    `,
  };
  
  const CharacterCard = ({ character }: CharacterCardProps) => {
    const router = useRouter()
    console.log(character)
    return (
     
        <div css={styles.card} onClick={()=>{router.push(`/${character.id}`)}}>
            
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} css={styles.image} />
          <p>Species: {character.species}</p>
          <p css={dotcss}>Status: {character.status} {character.status=== "Alive" ? <Greenstatus/> : character.status === "Dead" ? <Redstatus/> : ""}</p>
        </div>
    );
  };
  
  export default CharacterCard;

  const Greenstatus = styled.div`
  width:15px;
  height:15px;
  border-radius: 50%;
  background-color:green;
  `
  const Redstatus = styled.div`
  width:15px;
  height:15px;
  border-radius: 50%;
  background-color:red;
 `
 const dotcss = css`
 display:flex;
 align-items: center;
 gap:5px;

 `