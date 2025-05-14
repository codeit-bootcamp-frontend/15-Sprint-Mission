import { css } from '@emotion/react';


const itemWrapper = css`
    
    color: var(--gray-800);
    font-weight: 700;

    > div {
        margin-top: 32px;
    }

    > div > input, textarea {
        border-radius: 12px;
        width: 100%;
        height: 56px;
        background: var(--gray-100);
        margin-top: 16px;
        padding-left: 20px;
        border: none;
        cursor: pointer;

        > span {
        color: var(--gray-400);
        font-weight: 400;  
        }
    }

    > div > textarea {
        height: 282px;
        padding-top: 15px;
    }
    
    // wrapper에 div 안 input, textarea, span 에 적용
    > div > input::placeholder, textarea::placeholder, span {
        color: var(--gray-400);
        font-weight: 400;  
    }
`

const addItem = css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
`
const contentHeader = css`
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    > button {
        border-radius: 8px;
        border: none;
        width: 74px;
        height: 42px;
        background: var(--gray-400);
        color: white;
    }
`

const headerButton = css`
    cursor: pointer;

    &:not(:disabled) {
        background: var(--blue);
    }
    
    &:disabled {
    cursor: not-allowed;
    }
`

const addItemImageWrapper = css`

`

const addItemBox = css`
    margin-top: 16px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 282px;
    aspect-ratio: 1/1;
    background: var(--gray-100);
    border-radius: 12px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 168px;
    }
`

const plusIconStyle = css`
    width: 48px;
    aspect-ratio: 1/1;
`

const imgRowWrapper = css`
    display: flex;
    gap: 24px;

    @media (max-width: 768px) {
        gap: 10px;
    }
`

const previewBox = css`
    position: relative;
    margin-top: 16px;    
    display: flex;
    width: 282px;
    aspect-ratio: 1/1;

    @media (max-width: 768px) {
        width: 168px;
    }

    > button {
        position: absolute;
        background: transparent;
        border: none;
        cursor: pointer;
        top: 8px;
        right: 8px;
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.1);
        }
    }
`

const previewImg = css`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 12px;
`

const deleteImage = css`
    width: 22px;
    height: 24px;
`

const alertMessage = css`
    color: rgba(247, 71, 71, 1);
    font-weight: 400;
    font-size: 16px;
`

const itemHashTagWrapper = css`
    background: var(--gray-100);
    border-radius: 26px;
    display: inline-flex;
    padding: 5px 12px 5px 16px;; 

    > span {
        color: var(--gray-800);
        display: flex;
        align-items: center;
    }

    > button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding-top: 2px;
    }
`

const ItemTag = css`
    color: var(--gray-800);
`

const hashTagContainer = css`
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

export { 
    itemWrapper,
    addItem,
    contentHeader,
    headerButton,
    addItemBox,
    addItemImageWrapper,
    plusIconStyle,
    imgRowWrapper,
    previewBox,
    previewImg,
    deleteImage,
    alertMessage,
    itemHashTagWrapper,
    ItemTag,
    hashTagContainer,
};