import { 
    constainer,
    header,
    title,
    itemGrid,
    itemLinkStyle,
    pagenation
} from "./AllitemsStyle";
import ItemList from "./ItemList";
import Pagination from "./Pagination";
import { Link } from 'react-router-dom';

/** @jsxImportSource @emotion/react */

const AllItems = ({ items, onChangeOrder }) => {

    return(
        <div>
            <div css={constainer}>
                <div css={header}>
                    <h2 css={title}>전체 상품</h2>
                    <input placeholder="🔎 검색할 상품을 입력해주세요"></input>
                    <Link to={"/additems"}>
                    상품 등록하기
                    </Link>
                    <select onChange={(e)=> onChangeOrder(e.target.value)}>
                        <option value={"recent"}>최신순</option>
                        <option value={"favorite"}>좋아요순</option>
                    </select>
                </div>
            
                <div css={itemGrid} >
                    {items.map((item) => {
                        return(
                            <Link to={`/Items/${item.id}`} css={itemLinkStyle} >
                                <ItemList key={item.id} item={item} />
                            </Link>
                        )
                    })}
                </div>
                <div css={pagenation} >
                    페이지네이션 버튼
                </div>
                {/* <Pagination
                    currentPage={currentPage}
                    totalPages={10}
                    onPageChange={setCurr} */}
            </div>
        </div>
    )
}

export default AllItems;