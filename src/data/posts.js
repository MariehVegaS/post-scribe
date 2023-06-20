import axios from "axios"

let useLocalStorage = JSON.parse(localStorage.getItem('useLocalStorage')) ?? true;

export async function getPosts() {
    // -----  Temporary line of code for data persistence -----
    const savedPosts = JSON.parse(localStorage.getItem('posts'))
    if (savedPosts && useLocalStorage) {
        return savedPosts
    }
    // -----  Temporary line of code for data persistence -----
    const results = await axios.get(import.meta.env.VITE_POST_API_URL)
        .then((response) => {
            const posts = response.data
            // -----  Temporary line of code for data persistence -----
            if (useLocalStorage) {
                localStorage.setItem('posts', JSON.stringify(posts))
            }
            // -----  Temporary line of code for data persistence -----
            return posts
        }).catch((error) => {
            console.log(error)
            return []
        });
    return results
}

export async function getPost(id) {
    // -----  Temporary line of code for data persistence -----
    const savedPosts = JSON.parse(localStorage.getItem('posts'))
    if (savedPosts && savedPosts.length > 0 && useLocalStorage) {
        const postInArray = savedPosts.filter(post => post.id === Number(id))
        return (Object.keys(postInArray).length > 0) ? postInArray[0] : null
    }
    // -----  Temporary line of code for data persistence -----
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
    // -----  Temporary line of code for data persistence -----
    const savedPosts = JSON.parse(localStorage.getItem('posts'))
    if (savedPosts && Object.keys(post).length > 0 && useLocalStorage) {
        const keys = Object.keys(savedPosts);
        const lastKey = keys[keys.length - 1];
        const newIndex = Number(savedPosts[lastKey].id) + 1
        const newKey = Number(lastKey) + 1
        post.id = (newIndex) // Becase the API always send 101 and we need unique index
        savedPosts[newKey] = post
        localStorage.setItem('posts', JSON.stringify(savedPosts))
    }
    // -----  Temporary line of code for data persistence -----
    const results = await axios.post(import.meta.env.VITE_POST_API_URL, {
        title: title,
        body: body,
        userId: 1
    }).then((response) => {
        return response.data
    }).catch((error) => {
        console.log(error)
        return null
    });
    return results
}

export async function updatePost(id, data) {
    // -----  Temporary line of code for data persistence -----
    const savedPosts = JSON.parse(localStorage.getItem('posts'))
    if (savedPosts && savedPosts.length > 0 && Object.keys(data).length > 0 && useLocalStorage) {
        const postInArray = savedPosts.filter(post => post.id === Number(id))
        if (Object.keys(postInArray).length > 0) {
            const postToUpdate = postInArray[0]
            const indexToUdate = data.id - 1
            postToUpdate.id = Number(data.id)
            postToUpdate.title = data.title
            postToUpdate.body = data.body
            savedPosts[indexToUdate] = postToUpdate
            localStorage.setItem('posts', JSON.stringify(savedPosts))
        }
        return data;
    }
    // -----  Temporary line of code for data persistence -----
    const results = await axios.put(`${import.meta.env.VITE_POST_API_URL}/${id}`, {
        title: data.title,
        body: data.body
    }).then((response) => {
        const post = response.data
        return post
    }).catch((error) => {
        console.log(error)
        return null
    });
    return results
}

export async function deletePost(id) {
    // -----  Temporary line of code for data persistence -----
    const savedPosts = JSON.parse(localStorage.getItem('posts'))
    if (savedPosts && savedPosts.length > 0 && useLocalStorage) {
        const postsUpdated = savedPosts.filter(post => post.id !== Number(id))
        localStorage.setItem('posts', JSON.stringify(postsUpdated))
        return true;
    }
    // -----  Temporary line of code for data persistence -----
    const results = await axios.delete(`${import.meta.env.VITE_POST_API_URL}/${id}`)
        .then(() => {
            return true
        }).catch((error) => {
            console.log(error)
            return false
        });
    return results
}