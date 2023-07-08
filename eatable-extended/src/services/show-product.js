import apiFetch from "./api-fetch"


export async function showProduct(){
    const id = 17
    const data = await apiFetch(`/products/${id}`)

    console.log(await data)
}