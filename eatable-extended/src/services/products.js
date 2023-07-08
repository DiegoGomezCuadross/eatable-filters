import apiFetch from "./api-fetch";


export async function products(){

    const data = await apiFetch("/products")

    console.log(await data)
}