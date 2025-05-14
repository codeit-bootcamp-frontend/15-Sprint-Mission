import { 
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
} from './AddItemStyle'
import plusIcon from '../../assets/plusIcon.png'
import deleteIcon from '../../assets/deleteIcon.png'
import { useRef, useState } from 'react';

/** @jsxImportSource @emotion/react */

const AddItem = () => {

    const [imgPreviewUrl, setImgPreviewUrl] = useState(null); // 추가했을때 이미지프리뷰
    const [showWarning, setShowWarning] = useState(false);
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDiscription] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemTag, setItemTag] = useState("");
    const [itemHashTag, setItemHashTag] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        if (imgPreviewUrl !== null) {
            setShowWarning(true)
            return
        }
        
        if (file) {
            const preview = URL.createObjectURL(file);
            setImgPreviewUrl(preview) 
        }
    }

    const handleFileDelete = () => {
        setImgPreviewUrl(null);
        setShowWarning(false);
    }

    const handleSubmitButton = () => {

    }

    const handleDeleteTag = (tagToDelete) => {
        setItemHashTag(itemHashTag.filter(tag => tag !==tagToDelete));
    }

    const tagEndRef = useRef(null); // 태그 생성시 스크롤 이동을 위함

    return (
        <>
            <form css={addItem}>
                <div css={contentHeader}>
                    <h3>상품 등록하기</h3>
                    <button 
                        type="submit" 
                        css={headerButton} 
                        onClick={handleSubmitButton}
                        disabled={
                                itemName.trim() === "" || 
                                itemDescription.trim() === "" ||
                                itemPrice.trim() === "" ||
                                itemHashTag.length === 0  ||
                                !imgPreviewUrl
                        }
                    >
                            등록
                        </button>
                </div>
                <div css={itemWrapper}>
                    <div >
                        <p>상품 이미지</p>
                        <div css={imgRowWrapper}>
                        <label htmlFor='fileUpload' css={addItemImageWrapper}>
                            <div css={addItemBox}>
                                <img src={plusIcon} alt='추가' css={plusIconStyle} />
                                <span>이미지 등록</span>
                            </div>
                        </label>
                        {imgPreviewUrl && (
                            <div css={previewBox}>
                                <img src={imgPreviewUrl} alt='선택한 사진' css={previewImg} />
                                <button onClick={handleFileDelete}>
                                    <img src={deleteIcon} alt='삭제버튼' css={deleteImage} />
                                </button>
                            </div>
                        )}
                        </div>
                        <input  
                            id='fileUpload'
                            type='file'
                            accept='image/*'
                            style={{display: 'none'}}
                            onChange={handleFileChange}
                        />    
                    </div>

                    {showWarning && (
                        <p css={alertMessage}>이미지는 한 장만 선택할 수 있습니다.</p>
                    )}

                    <div>
                        <label htmlFor='name'>상품명</label>
                        <input id="name" placeholder="상품명을 입력해주세요" value={itemName} onChange={(e)=> setItemName(e.target.value)}></input>
                    </div>
                    
                    <div>
                        <label>상품 소개</label>
                        <textarea id="description" placeholder="상품 소개를 입력해주세요" value={itemDescription} onChange={(e) => setItemDiscription(e.target.value)}></textarea>
                    </div>

                    <div>
                        <label>판매가격</label>
                        <input id="price" placeholder="판매가격을 입력해주세요" type='number' value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}></input>
                    </div>

                    <div>
                        <label>태그</label>
                        <input 
                            id="tag" 
                            placeholder="태그를 입력해주세요" 
                            value={itemTag} onChange={(e) => setItemTag(e.target.value)}
                            onKeyDown={(e) =>  {
                                if (e.key === "Enter"&& itemTag.trim() !== "") {
                                    e.preventDefault();

                                    const newTag = itemTag.trim();
                                    if (!itemHashTag.includes(newTag)) {
                                        setItemHashTag((prev) => [...prev, newTag])
                                    }
                                    setItemTag("")
                                    //태그 생성시 스크롤 이동
                                    setTimeout(() => {
                                        tagEndRef.current?.scrollIntoView({behavior: "smooth"})
                                    },0)
                                }
                            }}
                        ></input>
                    </div>

                    {itemHashTag.length > 0 && (
                        <div css={hashTagContainer}>
                            {itemHashTag.map((tag) => (
                                <div key={tag} css={itemHashTagWrapper}>
                                    <span css={ItemTag}>
                                        #{tag}
                                    </span>
                                    <button type='button' onClick={() => handleDeleteTag(tag)}>
                                        <img src={deleteIcon} alt='삭제버튼' css={deleteImage} />
                                    </button>
                                </div>
                            ))}
                            <div ref={tagEndRef} />
                        </div>
                    )}
                </div>
            </form>
        </>
    );
};

export default AddItem;