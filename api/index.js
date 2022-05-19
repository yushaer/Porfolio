import axios from 'axios';
const devSever_url = 'http://localhost:1337/';
const backendUrl = 'https://yr-blog.herokuapp.com/'
const api = axios.create({ baseUrl: backendUrl });




export const getPosts = (page) => {

	console.log(process.env.API_KEY)
	return fetch(
		`${backendUrl}ghost/api/v4/content/posts/?key=${process.env.API_KEY}&order=published_at%20desc&include=authors,tags&page=${page}&fields=title,slug,feature_image,published_at,excerpt&formats=plaintext`
	).then((res) => res.json())



}
export const getSlugs = (page) => {

	console.log(process.env.API_KEY)
	return fetch(
		`${backendUrl}ghost/api/v4/content/posts/?key=${process.env.API_KEY}&order=published_at%20desc&fields=slug`
	).then((res) => res.json())


}
export const getTags = () => {
	return fetch(
		`${backendUrl}ghost/api/v4/content/tags/?key=${process.env.API_KEY}&fields=name,slug`
	).then((res) => res.json())

}
export const getTagsSlugs = () => {
	return fetch(
		`${backendUrl}ghost/api/v4/content/tags/?key=${process.env.API_KEY}&fields=slug`
	).then((res) => res.json())

}
export const getTagName = (slug) => {
	return fetch(`${backendUrl}ghost/api/v4/content/tags/?key=${process.env.API_KEY}&filter=slug:${slug}&fields=name`).then((res) => res.json());
}
export const getPost = (slug) => {
	return fetch(`${backendUrl}ghost/api/v4/content/posts/?key=${process.env.API_KEY}&filter=slug:${slug}&order=published_at%20desc&include=authors,tags&fields=html,title,slug,feature_image,published_at`).then((res) => res.json())
}
export const getPostsByTag = (tag, page) => {
	return fetch(`${backendUrl}ghost/api/v4/content/posts/?key=${process.env.API_KEY}&filter=tags:${tag}&order=published_at%20desc&include=authors,tags&page=${page}&fields=title,slug,feature_image,published_at,excerpt&formats=plaintext`).then((res) => res.json())
}


//const getPost = (slug) => api.get(`http://localhost:1337/api/Articles?filters[slug][$eq]=${slug}&fields=title,content,description,slug,publishedAt&populate[category][fields]=id,name&populate[image][fields]=url&populate[author][fields]=name&sort=publishedAt`);
export const getCategories = () => api.get(`http://localhost:1337/api/Categories?fields=name,slug`);