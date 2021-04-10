import { rerenderEntireTree } from '../render';

let state = {
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Valera' },
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your it-kamasutra' },
		{ id: 3, message: 'Yo' },
	],
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: "It's my first post", likesCount: 11 },
	],
	input: '',
};

export const addPost = (postMessage) => {
	const newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0,
	};
	state.posts.push(newPost);
	rerenderEntireTree(state);
};

export const changeInput = (value) => {
	state.input = value;
	rerenderEntireTree(state);
};

export default state;
