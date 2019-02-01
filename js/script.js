let buttonMenu = document.body.querySelector('.menu');
let menuList = document.body.querySelector('.nav-list');
buttonMenu.onclick = function (event) {
	menuList.style.maxHeight === '300px' ? menuList.style.maxHeight = '0px' : menuList.style.maxHeight = '300px';
}

