import { dataKey } from "../../config";
import apiFetch from "../api-fetch";


export async function products(){

    const data = await apiFetch("/products")
    localStorage.setItem(dataKey,JSON.stringify(data))


    console.log(data)
    return data;
}