export async function getItems({ page=1, pageSize=100, orderBy="recent"}) {
    const response = await fetch(`https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`)
    
    if (!response.ok) {
        throw new Error(`error 상태 ${response.status}`)
    }
    const body = await response.json();
    return body;
}

//productId 받아오는 api
export async function getItemId(productsId) {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${productsId}`)
    
    if (!response.ok) {
        throw new Error(`error 상태 ${response.status}`)
    }

    const body = await response.json();
    return body
}

export async function getProductComments(productId, limit=10) {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}/comments?limit=${limit}`)

    if (!response.ok) {
        
        throw new Error(`error 상태 ${response.status}`)
    }
    const body = await response.json();
    return body.list;
}

