import { 
    itemListStyle,
    itemImage, 
    itemTitle,
    itemPrice,
    itemLikes,
} from "./ItemListStyle";
import defaultImage from "../assets/img_default.png"

/** @jsxImportSource @emotion/react */

const ItemList = ({ item }) => {

    return(
        <>
            <div css={itemListStyle}>
                <img 
                    css={itemImage} 
                    src={item.images || defaultImage } // 여기는 이미지가 없을때 디폴트 보여주기
                    // 여기는 이미지 로드 실패시 onError 호출 -> default이미지 보여주기 
                    onError={(e)=> { 
                        e.target.onerror = null; // 디폴트이미지가 잘못될 경우 무한루프 방지
                        e.target.src = defaultImage; 
                    }}
                    alt={item.name} >
                </img>
                <p css={itemTitle}>{item.name}</p>
                <p css={itemPrice}>{`${item.price}원`}</p>
                <p css={itemLikes}>🤍 {item.favoriteCount}</p>
            </div>
        </>
    )
}

export default ItemList;