
import { css } from '@emotion/react';
import kebabIcon from '../../../assets/kebabIcon.png'
import userImage from '../../../assets/LoginProfile.png'
import backIcon from '../../../assets/backIcon.png'
import noCommentImg from '../../../assets/noCommentImg.png'
import defaultImage from '../../../assets/img_default.png'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getItemId, getProductComments } from '../../../api/Api';
import { Link } from 'react-router-dom';

/** @jsxImportSource @emotion/react */

const pageWrapper = css`
    max-width: 1200px;
    margin: 0 auto;
`

const itemDetailWrapper = css`
    margin: 32px 16px 42px;
    gap: 24px;
    display: flex;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--gray-200);

        @media(max-width: 425px) {
            flex-direction: column;
        }
`
const imgSection = css`
    
    > img {
    width: 486px;
    aspect-ratio: 1/1;
    border-radius: 16px;
    object-fit: cover;

        @media(max-width: 768px) {
            width: 340px;
        }

        @media(max-width: 425px) {
            width: 100%;
        }
    }
`

const itemDetail = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 24px;  
`

const itemHeader = css`
    border-bottom: 1px solid var(--gray-200);
    padding-bottom: 16px;
    color: var(--gray-800);

    
    > h2 {
        font-size: 40px;
    }
`

const titleHeader = css`
    font-size: 24px;
    font-weight: 600;
    display: flex;
    margin-bottom: 16px;
    justify-content: space-between;
`

const editIconStyle = css`
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const itemDescription = css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-weight: 600;
    color: var(--gray-600);
    font-size: 16px;

    > h3 {
        font-weight: 600;
        font-size: 16px;
    }
`

const itemTag = css`
    margin-bottom: 62px;
    font-weight: 600;
    color: var(--gray-600);

    > h3 {
        font-weight: 600;
        font-size: 16px;
    }

    > span {
        padding: 6px;
    }
`

const tagWrapper = css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
`

const tagBox = css`
    display: inline-flex;
    padding: 6px 16px;
    background: var(--gray-100);
    border-radius: 26px;
    border: none;

    font-weight: 600;
    color: var(--gray-600);

    > span {
        color: var(--gray-800);
        font-weight: 400;
    }

    > h3 {
        font-weight: 600;
    }
`

const itemUserInfo= css`
    display: flex;
    align-items: center;
    margin-top: 24px;
`

const userImg = css`
    width: 40px;
    height: 40px;
    margin-right: 16px;

    > img {
        width: 40px;
        height: 40px;
    }
`

const userText = css`
    font-weight: 500;
    color: var(--gray-600);
    font-size: 14px;
    flex: 1;

    > p {
        margin-top: 6px;
        font-weight: 400;
        color: var(--gray-400);
    }
`

const likeSection = css `
    // display: inline-flex;
    border-radius: 35px;
    border: 1px solid var(--gray-200);
    padding: 4px 12px;
    font-size: 16px;

    > button {
        background: transparent;
        border: none;
    }
`

const commentSection = css  `
    margin: 16px;

`

const makeComment = css`
    display: flex;
    flex-direction: column;

    > textarea {
    height: 104px;
    border: none;
    background: var(--gray-100);
    border-radius: 12px;
    margin-top: 10px;
    margin-bottom: 16px;
    padding: 16px;
    resize: none;
    }
`

const commentButtonStyle = css`
    width: 74px;
    height: 42px;
    border-radius: 8px;
    border: none;
    background: var(--gray-400);
    align-self: flex-end;
    color: white;
    cursor: pointer;
`

const activeButtonStyle = css`
    background: var(--blue)
`

const commentList = css`
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 24px;
`

const commentListStyle =css`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--gray-200);
`

const commentHeader = css`
    display: flex;
    justify-content: space-between;
`

const backToListButtonStyle = css`
    background: var(--blue);
    height: 48px;
    color: white;
    border: none;
    border-radius: 40px;
    padding: 12px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px auto;
    cursor: pointer;
    gap: 8px;
    

    > img {
        width: 24px;
        height: 24px;
    }
`

const linkStyle = css`
    text-decoration: none;
`

const noCommentImgStyles = css`
    margin: 10px auto 48px;
    display: flex;
    justify-content: center;
    width: 196px;
`

const ItemDetail = () => {

    const {productId} = useParams();
    const [item, setItem] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentTextarea, setCommentTextarea] = useState("");
    const isButtonActive = commentTextarea.trim().length > 0;

    const handleChange = (e) => {
        setCommentTextarea(e.target.value);
    }

    useEffect(()=> {
        async function fetchData() {
            try {
                const data = await getItemId(productId);
                setItem(data);
            }   catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, [productId])


    useEffect(()=> {
        async function fetchData() {
            try {
                const data = await getProductComments(Number(productId));
                setComments(data);
            } catch (error) {
                console.error("커멘트 불러오기:", error);
            }
        }

        if (productId) {
            fetchData();
        }
        
    }, [productId]);

    if (!item) return <div>로딩 중...</div>;

    return(
        <div css={pageWrapper}>
            <div css={itemDetailWrapper}>
                <div css={imgSection}>
                    <img src={item.images || defaultImage}
                        onError={(e)=> {
                            e.target.onerror = null;
                            e.target.src = defaultImage;
                        }}    
                    />
                </div>
                <div css={itemDetail}>
                    <div css={itemHeader}>
                        <div css={titleHeader}>
                            <h3>{item.name}</h3>
                            <img src={kebabIcon} css={editIconStyle} />
                        </div>
                        <h2>{item.price}원</h2>
                    </div>
                    <div css={itemDescription}>
                        <h3>상품소개</h3>
                        <h4>{item.description}</h4>
                    </div>
                    <div css={itemTag}>
                        <h3>상품 태그</h3>  
                            <div css={tagWrapper}>
                                {item.tags.map((tag)=> {
                                    return(
                                        <div key={item.id} css={tagBox}>
                                            <span>#{tag}</span>
                                        </div>
                                    )
                                })}
                            </div>
                    </div>
                    <div css={itemUserInfo}>
                        <div css={userImg}>
                            <img src={userImage} />
                        </div>
                        <div css={userText}>
                            <h4>{item.ownerNickname}</h4>
                            <p>{new Date(item.createdAt).toISOString().slice(0, 10)}</p>
                        </div>
                        <div css={likeSection}>
                            <button>💛</button>
                            {item.favoriteCount}
                        </div>
                    </div>
                </div>
            
            </div>

            <div css={commentSection}>
                <div css={makeComment}>
                    <label htmlFor="makecomment">문의하기</label>
                    <textarea 
                        id="makecomment" 
                        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                        value={commentTextarea}
                        onChange={handleChange}
                        />
                    <button type="button" css={[commentButtonStyle, isButtonActive && activeButtonStyle]} >등록</button>
                </div>
                <ul css={commentList}>
                    {comments.length == 0 ? 
                    <div>
                        <img src={noCommentImg} css={noCommentImgStyles} />
                    </div>
                    :
                        comments.map((comment) =>(
                            <li key={comment.id} css={commentListStyle}>
                                <div css={commentHeader}>
                                    <p>{comment.content}</p>
                                    <img src={kebabIcon} css={editIconStyle} />
                                </div>
                                
                                <div css={itemUserInfo}>
                                    <div css={userImg}>
                                        <img src={userImage} />
                                    </div>
                                    <div css={userText}>
                                        <h4>{comment.writer.nickname}</h4>
                                        <p>{new Date(comment.createdAt).toISOString().slice(0, 10)}</p>
                                    </div>
                                    <hr />
                                </div>
                            </li>
                        ))
                    }                
                </ul>
            </div>
            <Link to={"/items"} css={linkStyle}>
                <button type='button' css={backToListButtonStyle} >
                    <p>목록으로 돌아가기</p>
                    <img src={backIcon} />
                </button>
            </Link>

        </div>
    )
}

export default ItemDetail;