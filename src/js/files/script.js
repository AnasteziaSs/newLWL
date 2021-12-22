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
/*let wrap = document.querySelector('.wrapper');
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
*/
//========================================================================================================================================================
let block = document.querySelector('.menu__item');
document.addEventListener('click', documentActions, closeMenu);

function documentActions(e) {
	let targetElement = e.target;
	let targetPrevItem = targetElement.parentElement;
	let blockOk = document.querySelector('._ok');
	if (targetElement !== blockOk && blockOk !== null && !targetElement.closest('.menu')) {
		document.querySelector('._ok').classList.remove('_ok');
	}
	if (targetElement.closest('.menu__item')) {
		targetPrevItem.classList.toggle('_ok');
	}
}
function closeMenu(e) {

}

//========================================================================================================================================================

let search = document.querySelector('.actions-header__search');
let form = document.querySelector('.header__form');
search.addEventListener('click', () => {
	form.classList.toggle("_ok");
})
