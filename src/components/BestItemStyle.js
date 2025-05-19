
import { css } from "@emotion/react"

const constainer = css`
    width: 100%;
    margin-bottom: 40px
`

const title = css`
    margin: 0px 0px 16px 0px;
    font-size: 20px;
    font-weight: 700;
    color: var(--gray-900);
`

const itemGrid = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    @media (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 8px;
    }

`

const linkStyle = css`
    text-decoration: none;
`


export {
    constainer,
    title,
    itemGrid,
    linkStyle,
}