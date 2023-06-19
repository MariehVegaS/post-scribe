export async function getPosts() {
    const respuesta = await fetch(import.meta.env.VITE_POST_API_URL)
    const resultado = await respuesta.json()
    return resultado
}