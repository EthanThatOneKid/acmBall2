import { readable, writable } from 'svelte/store';

export const game_view = writable('left');

// export const starting_text = readable(
// 	`
// console.log('Game: ', Game)
// const setup = () => {
//   console.log('setting up!')
// }

// const draw = () => {

// }

// `
// );
