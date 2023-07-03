import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from '@/components/Charactercard';
import { css } from '@emotion/react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/Footer';

interface Character {
  name: string;
  id: number;
  image: string;
  species: string;
  status: string;
}

const HomePage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      console.log("use effect")
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        setCharacters(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
    <Header/>
    <div css={containercss}>
      {characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    
      ))}
    </div>
    <Footer/>
    
    
    
    </>
  );
};

export default HomePage;


const containercss = css`
display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly
`