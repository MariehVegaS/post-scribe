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

export async function createPost(post) {
    const { title, body } = post
    const results = await axios.post(import.meta.env.VITE_POST_API_URL, {
        title: title,
        body: body,
        userId: 1
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error)
        return null
    });
    return results
}

export async function updatePost(id, data) {
    const results = await axios.put(`${import.meta.env.VITE_POST_API_URL}/${id}`, {
        title: data.title,
        body: data.body
    }).then((response) => {
        return response.data
    }).catch((error) => {
        console.log(error)
        return null
    });
    return results
}

export async function deletePost(id) {
    const results = await axios.delete(`${import.meta.env.VITE_POST_API_URL}/${id}`)
        .then(() => {
            return true
        }).catch((error) => {
            console.log(error)
            return false
        });
    return results
}