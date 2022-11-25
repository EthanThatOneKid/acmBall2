import { writable } from 'svelte/store';

import { DefaultClient } from 'generic-storage/esm/mod';

const client = new DefaultClient('http://localhost:8080');

export const editor_text = persistable('');

const STORAGE_KEY = { $key: 'id', id: 'editor_text' };

function persistable(defaultValue) {
	const { subscribe, set: writableSet, update } = writable(defaultValue);

	function set(value) {
		client.set({ ...value, ...STORAGE_KEY }).catch(console.error);
		writableSet(value);
	}

	async function init() {
		writableSet(await client.get(STORAGE_KEY));
		subscribe(set);
	}

	return { subscribe, set, update, init };
}

export const starting_editor_text =
	// "var boxB = Game.Bodies.rectangle(200, 200, 300, 300)\nfunction setup() { // runs once at start\n  console.log('hi')\n  Game.addObject(boxB)\n}\n\nfunction draw() { // runs every frame\n  console.log('drawing')\n}"
	// 	`var ground = Game.Bodies.rectangle(Game.width / 2, Game.height, Game.width, 60, {isStatic: true, render: {
	//     fillStyle: 'red', strokeStyle: 'blue', lineWidth: 3
	//   }
	// })
	`var ground = Game.Bodies.rectangle(Game.width / 2, Game.height, Game.width, 60)
Game.Body.setStatic(ground, true)
ground.restitution = 0.9
ground.render.fillStyle = 'green'
var ball = Game.Bodies.circle(200, 200, 50)
ball.render.strokeStyle = 'white'
ball.render.lineWidth = 3
var bar = Game.Bodies.rectangle(Game.width / 2, Game.height / 2, 300, 50)
Game.Body.setStatic(bar, true)
function setup() {
  Game.addObject(ground)
  Game.addObject(ball)
  Game.addObject(bar)
}
let frame = 0
function draw() {
  ++frame
  Game.Body.rotate(bar, 0.03)
  if (frame % 20 == 0) {
    var new_ball = Game.Bodies.circle(Game.width / 2, 0, 10)
    Game.addObject(new_ball)
  }
}
`;
