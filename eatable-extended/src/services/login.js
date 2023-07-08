
import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function login(){
    const body = {
        "email": "testino@mail.com",
        "password": "letmein"
    }


    try {
        const data = await apiFetch("/login",{body});
       const {token, ...user} = await data
    
        sessionStorage.setItem(tokenKey,token)
    
        console.log(await user);
        return user;
        
    } catch (error) {
        console.log(error)
    }

    
}