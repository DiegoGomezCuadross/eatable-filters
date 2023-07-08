import apiFetch from "../api-fetch"


export async function showProduct(id = 17){
    
    const data = await apiFetch(`/products/${id}`)

    console.log(data)
    return data;
}