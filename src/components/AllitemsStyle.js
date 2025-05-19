
import { css } from "@emotion/react"

const constainer = css`
    width: 100%;
    // height: 426px;
    margin-bottom: 40px;
`

const title = css`
    font-size: 20px;
    font-weight: 700;
    color: var(--gray-900);
`

const header = css`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    margin: 24px auto;

    > h2 {
        order: 1;
    }

    > a {
        order: 3;
        width: 130px;
        height: 42px;
        border: none;
        border-radius: 12px;
        background: var(--blue);
        color: white;
        cursor: pointer;
        text-decoration: none; 
        display: flex;
        align-items: center;
        justify-content: center;  
    }

    > input {
        order: 2;
        flex: 1;
        height: 42px;
        border-radius: 12px;
        border: none;
        background: var(--gray-100);
        padding: 0 20px;
        min-width: 0;
    }

    > select {
        order: 4;
        width: 130px;
        height: 42px;
        border: 1px solid var(--gray-200);
        border-radius: 12px;
        padding: 0 12px;
        cursor: pointer;
        color: var(--gray-800);
    }

    @media (max-width: 425px) {
        display: grid;
        grid-template-columns: 1fr auto; /* 자동 너비 열 */
        grid-template-rows: repeat(2, auto);
        gap: 12px;

        > h2 {
            grid-column: 1;
            grid-row: 1;
        }

        > a {
            grid-column: 2;
            grid-row: 1;
        }

        > input {
            grid-column: 1;
            grid-row: 2;
        }

        > select {
            grid-column: 2;
            grid-row: 2;
        }
}
`

const itemGrid = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }

    @media (max-width: 425px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;    
    }
`

const itemLinkStyle = css`
    text-decoration: none;
`

const pagenation = css`
    display: flex;
    justify-content: center;
    padding: 43px;
    
`

export {
    constainer,
    header,
    title,
    itemGrid,
    itemLinkStyle,
    pagenation,
}
