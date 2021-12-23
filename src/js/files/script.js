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
document.addEventListener('click', documentActions);
/*
/*
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
	if (targetElement.classList.contains('_icon-search')) {
		document.querySelector('.header__form').classList.toggle('_search-active');
	} else if (!targetElement.closest('.header__form') && document.querySelector('.header__form._search-active')) {
		document.querySelector('.header__form').classList.remove('_search-active');
}

}
*/
//========================================================================================================================================================
/*
let search = document.querySelector('.actions-header__search');
let form = document.querySelector('.header__form');
search.addEventListener('click', () => {
	form.classList.toggle("_search-active");
})
*/

function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}

function documentActions(e) {
	let targetElement = e.target;
	let targetPrevItem = targetElement.parentElement;
	let blockOk = document.querySelectorAll('.menu__item._ok');

	if (targetElement.classList.contains('_icon-arrow-down')) {
		targetPrevItem.classList.toggle('_ok');
	}

	if (blockOk.length > 1) {
		_removeClasses(blockOk, "_ok");
	}

	if (!targetElement.closest('.menu__item') && blockOk.length > 0) {
		_removeClasses(blockOk, "_ok");
	}


	if (targetElement.classList.contains('_icon-search')) {
		document.querySelector('.header__form').classList.toggle('_search-active');
	} else if (!targetElement.closest('.header__form') && document.querySelector('.header__form._search-active')) {
		document.querySelector('.header__form').classList.remove('_search-active');
	}

}