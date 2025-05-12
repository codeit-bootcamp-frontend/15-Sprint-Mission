import { css } from '@emotion/react';

const headerStyle = css`
    position: sticky;
    top: 0;
    width: 100%;
    height: 70px;
    margin: 0 auto ;
    padding: 9px 200px;
    background: white;
    border-bottom: 1px solid #DFDFDF;

    @media(max-width:1519px) {
    padding: 9px 16px;
    }

`

const headerInner = css`
    display: flex;
    justify-content: space-between;
    margin: 0 auto ;
    align-items: center;
    width: 100%;
`

const LoginProfileStyle = css`
    width: 40px;
    height: 40px;
`

const headerLeft = css`
    display: flex;
    align-items: center;
`
const logoStyles = css`
    width: 153px;
    height: 51px;
`
const logoTextStyles = css`
    width: 81px;
    height: 27px;
`

const NavlinkStyle = css`
    display: flex;
    gap: 20px;
    padding-left: 32px;
`

const aTag = css`
    color: var(--gray-600);
    text-decoration : none;
`

export {
    headerStyle,
    headerInner,
    headerLeft,
    logoStyles,
    logoTextStyles,
    NavlinkStyle,
    aTag,
    LoginProfileStyle,

} 