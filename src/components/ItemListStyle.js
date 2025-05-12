import { css } from "@emotion/react"

const itemListStyle = css`
    width: 100%;

`

const itemImage = css`
    border-radius: 16px;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`

const itemTitle = css`
    font-size: 14px;
    font-weight: 500;
    color: var(--gray-800);
    margin-top: 16px;
    margin-bottom: 6px;
`

const itemPrice = css`
    font-size: 16px;
    font-weight: 700;
    color: var(--gray-800);
    margin-bottom: 6px;
`

const itemLikes = css`
    font-size: 12px;
    font-weight: 500;
    color: var(--gray-600);
    margin-bottom: 6px;
`

export {
    itemListStyle,
    itemTitle,
    itemPrice,
    itemLikes,
    itemImage,
}