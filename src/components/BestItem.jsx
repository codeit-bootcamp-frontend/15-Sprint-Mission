import { 
    constainer,
    title,
    itemGrid,
} from "./BestItemStyle";
import ItemList from "./ItemList";

/** @jsxImportSource @emotion/react */

const BestItem = ({ items }) => {
    const bestItems = items.slice(0, 4);

    return(
        <div css={constainer}>
            <h2 css={title}>
                베스트 상품
            </h2>
            
            <div css={itemGrid} >
                {bestItems.map((item) => {
                    return <ItemList key={item.id} item={item}/>
                })}                
            </div>
        </div>
    )
    
}

export default BestItem;