export async function getItems({ page=1, pageSize=100, orderBy="recent"}) {
    const response = await fetch(`https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`)
    
    if (!response.ok) {
        throw new Error(`error 상태 ${response.status}`)
    }
    const body = await response.json();
    return body;
}

