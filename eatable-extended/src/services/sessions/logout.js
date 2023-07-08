import { tokenKey } from "../../config";
import apiFetch from "../api-fetch";



export async function logout(){

        const data = await apiFetch("/logout",{method: "DELETE"});
        sessionStorage.removeItem(tokenKey)

        console.log(data);

        return data;
}