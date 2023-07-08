import apiFetch from "./api-fetch"


export async function createProduct(){
    const body = {
        "name": "other pasta madness",
        "price": 1000,
        "category": "italian",
        "description": "Delicious dish",
        "picture_url": "https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg"
    }

    const data = await apiFetch("/products",{body});
    console.log(await data)
}