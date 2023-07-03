import { css } from "@emotion/react"
import Link from "next/link"


export default function Header() {
    return (
        <div css={headercss}>
            <Link href="/">
                <img src="/static/logoo.svg" alt="logo"></img>
            </Link>
            <Link href="https://rickandmortyapi.com/api/character
">
            <div>RICK AND MORTY API</div>
            </Link>
        </div>
    )
}

const headercss = css`
display:flex;
justify-content :space-between;
align-items:center;
padding:0 25px;
background-color:#222222;
color:white;
`

