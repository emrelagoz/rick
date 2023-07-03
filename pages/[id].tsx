import axios from "axios";
import { GetServerSideProps } from "next";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";

interface Character {
     name: string;
    status: string;
    species: string;
    gender: string ;
    type: string;
    origin: Origin;
    location: Location;
    image : string ;
    episode : string[];
    created : string;
}

interface Origin {
    name: string;
}

interface Location {
    name: string;
}

interface Props {
    character: Character
}


export default function CharacterDetail({character}:Props) {

return( <>
    <Header/>
    <div css={containercss}>
<img src={character.image} alt={character.name}></img>
<h1>{character.name}</h1>
<h3 css={statuscss}>{character.status} {character.status === "Alive" ? <Greenstatus></Greenstatus> : character.status === "Dead" ? <Redstatus></Redstatus> : ""}</h3>
<h3>{character.species}</h3>
<h3>{character.gender}</h3>

</div>
<Footer/>
</>
)
}

export const getServerSideProps:GetServerSideProps =async (a) =>{
    const  id  = a.query.id as string;
    console.log("aaaaASDASDSASAD " ,a )
    const data = await fetch('https://rickandmortyapi.com/api/character/'+id)
    const character = await data.json()
    console.log("burda" ,character)
 return{  props : {character:character as Character}
}
  }

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
  const statuscss = css`
  display:flex;
  align-items:center;
  gap:5px;
  `
const containercss = css`
display:flex;
flex-direction: column;
align-items: center;
width:100%;
height:80%;
justify-content:center;
color:white;
margin-bottom:-20px;
`