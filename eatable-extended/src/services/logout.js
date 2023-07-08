import { tokenKey } from "../config";
import apiFetch from "./api-fetch";



export async function logout(){

    try {
        const data = await apiFetch("/logout",{method: "DELETE"});
        sessionStorage.removeItem(tokenKey)
        console.log(await data);
        
    } catch (error) {
        console.log(error)
    }
        

}