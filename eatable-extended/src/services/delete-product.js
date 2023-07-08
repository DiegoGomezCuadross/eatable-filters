import apiFetch from "./api-fetch"


export async function deleteProduct(){
    const id = 17
    const data = await apiFetch(`/products/${id}`,{method: "DELETE"})

    console.log(await data)
}