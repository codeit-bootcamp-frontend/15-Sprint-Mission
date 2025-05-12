import BestItem from "../BestItem"
import AllItems from "../AllItems"
import { itemsStyle } from "./ItemsStyle"
import { useState, useEffect } from "react"
import { getItems } from "../../api/Api"

/** @jsxImportSource @emotion/react */

const Items = () => {
    const [allItems, setAllItems] = useState([])
    const [bestItems, setBestItems] = useState([])
    const [orderBy, setOrderBy] = useState("recent")
    const [itemsToShow, setItemsToShow] = useState({best: 4, all: 10})

    const handleLoad = async (order = orderBy) => {
        const [best, all]= await Promise.all([
            getItems({page:1, pageSize:4, orderBy: "favorite"}),
            getItems({page:1, pageSize:10, orderBy: order}),
        ]);
        setBestItems(best.list);
        setAllItems(all.list); 
    }

    useEffect(() => {
        handleLoad(orderBy)
    }, [orderBy])

    useEffect(()=> {
        const updateItemCount =() => {
            const width = window.innerWidth;

            if (width <= 425) {
                setItemsToShow({best: 1, all: 4});
            } else if (width <=768) {
                setItemsToShow({best: 2, all: 6});
            } else {
                setItemsToShow({best: 4, all: 10});
            }
        }
        updateItemCount();
        window.addEventListener("resize", updateItemCount)

        return() => window.removeEventListener("resize", updateItemCount)
    }, [])

    return(
        <div css={itemsStyle}>
            <BestItem items={bestItems.slice(0, itemsToShow.best)} handleLoad={handleLoad}/>
            <AllItems items={allItems.slice(0, itemsToShow.all)} onChangeOrder={(order)=> setOrderBy(order)}/>
        </div>
    )
}

export default Items;