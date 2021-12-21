// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";


/* let block = document.querySelector('.products');
block.addEventListener('click', () => {
	block.classList.toggle('_ok')
})
let submenu = document.querySelectorAll('.submenu');
*/
/* let block = document.querySelectorAll('.menu__link');
console.log(block);
for (let index = 0; index < block.length; index++) {
	const element = block[index];
	const preBlock = element.parentElement;
	console.log(preBlock);
	element.addEventListener('click', () => {
		preBlock.classList.toggle('_ok')
	})
}
*/
let wrap = document.querySelector('.wrapper');
let block = document.querySelectorAll('.menu__link');
console.log(block);
for (let index = 0; index < block.length; index++) {
	const element = block[index];
	const preBlock = element.parentElement;
	//console.log(preBlock);
	element.addEventListener('click', () => {
		preBlock.classList.toggle('_ok')
	})
}
