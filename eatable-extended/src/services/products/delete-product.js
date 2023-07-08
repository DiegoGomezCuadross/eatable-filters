import apiFetch from "../api-fetch"


export async function deleteProduct(id = 135){

    const data = await apiFetch(`/products/${id}`,{method: "DELETE"})

    console.log(data)

    return data;
}