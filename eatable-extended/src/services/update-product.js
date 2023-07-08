import apiFetch from "./api-fetch"


export async function updateProduct(){
    const id = 17
    const body = {
        "name": "La nueva pasta",
        "price": 2500,
        "category": "italian",
        "description": "Delicious dish",
        "picture_url": "https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg"
    }

    const data = await apiFetch(`/products/${id}`,{body, method: "PATCH"})

    console.log(await data)
}