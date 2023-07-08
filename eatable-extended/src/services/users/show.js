import apiFetch from "../api-fetch";


export async function show(){
    const {token, ...user} = await apiFetch("/profile")

    console.log(user);
    return user;
}