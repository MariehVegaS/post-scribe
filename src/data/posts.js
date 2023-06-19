import axios from "axios"

export async function getPosts() {
    const results = await axios.get(import.meta.env.VITE_POST_API_URL)
        .then((response) => {
            return response.data
        }).catch((error) => {
            console.log(error)
            return []
        });
    return results
}

export async function getPost(id) {
    const results = await axios.get(`${import.meta.env.VITE_POST_API_URL}/${id}`)
        .then((response) => {
            return response.data
        }).catch((error) => {
            console.log(error)
            return null
        });
    return results
}

export async function createPost() {
    const results = await axios.post(import.meta.env.VITE_POST_API_URL, {
        title: "Hello World!",
        body: "This is a new post."
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error)
        return null
    });
    return results
}

export async function updatePost(id) {
    const results = await axios.put(`${import.meta.env.VITE_POST_API_URL}/${id}`, {
        title: "Hello World!",
        body: "This is an updated post."
    }).then((response) => {
        setPost(response.data);
    }).catch((error) => {
        console.log(error)
        return null
    });
    return results
}