
import { 
    headerStyle,
    headerInner,
    headerLeft,
    logoStyles,
    logoTextStyles,
    NavlinkStyle,
    aTag,
    LoginProfileStyle,

 } from './HeaderStyle';

import LoginProfile from '../assets/LoginProfile.png';
import pandaLogo from '../assets/pandaLogo.png';
import pandaLogoTitle from '../assets/pandaLogoTitle.png'
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

/** @jsxImportSource @emotion/react */

const Header = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

    useEffect(()=> {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return(
        <>
            <div css={headerStyle}>
                <div css={headerInner}>
                    <div css={headerLeft}>  
                        <Link to={"/"}>
                            {isMobile? (
                                <img src={pandaLogoTitle} alt='로고 텍스트' css={logoTextStyles} />
                            ) : (
                                <img src={pandaLogo} alt='로고 이미지' css={logoStyles} />
                            )}
                        </Link>         
                        <div css={NavlinkStyle}>
                            <Link to={"/FreeBoard"} css={aTag}>자유게시판</Link>
                            <Link to={"/Items"} 
                                css={[aTag, 
                                (location.pathname ==='/Items' || 
                                    location.pathname.startsWith('/Items/') ||
                                    location.pathname === '/additems' )  && css`
                                color: var(--blue)`]}
                                >
                                중고마켓
                            </Link>
                        </div>
                    </div>    
                    <img src={LoginProfile} alt='로그인프로필' css={LoginProfileStyle}></img>
                </div>
            </div>
        </>
    )
}

export default Header;