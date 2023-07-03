import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"


export default function Footer() {

    const router = useRouter()

    return (

        <div css={footercss}>
            <Social>
                <img onClick={() => { router.push("https://www.instagram.com/emreelagoz/") }} src="/static/instagram.svg" alt="instagram"></img>
                <img onClick={() => { router.push("https://github.com/emrelagoz") }} src="/static/gitshop.svg" alt="github"></img>
            </Social>
            <img src="static/falan.svg" alt="beldovmesi" ></img>
            <Link href="https://www.trendyol.com/">
                <div>by EMRE ELAGOZ</div>
            </Link>
        </div>
    )
}

const Social = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:20px;
`

const footercss = css`
display:flex;
flex-direction: column;
align-items:center;
row-gap:10px;
color:white;
background-color:#222222;
`

