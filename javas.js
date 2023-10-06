var il=document.getElementById('main-header');
il.style.borderBottom='solid 3px black';

var addItems=document.querySelector('.title')
addItems.innerHTML='ADD ITEMS';
addItems.style.fontWeight='bold';
addItems.style.color='green';
var items=document.getElementsByClassName('list-group-item');
//items[2].style.backgroundColor='green';
//items[2].style.fontWeight='bold';
items[1].style.backgroundColor='green';
items[2].style.color='transparent';

