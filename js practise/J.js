let searchicon=document.querySelector('.searchicon');
let closeicon=document.querySelector('.closeicon');
let menuicon=document.querySelector('.menuicon');
let searchbox=document.querySelector('.searchbox');
let tags=document.querySelector('.tags');
let menuclose=document.querySelector('.menuclose');


searchicon.onmouseover=function(){
    searchbox.classList.add('add');
    searchicon.classList.add('add');
    closeicon.classList.add('add');
    menuicon.classList.add('add');
    menuclose.classList.remove('add');   
}

closeicon.onmouseover=function(){
    searchbox.classList.remove('add');
    searchicon.classList.remove('add');
    closeicon.classList.remove('add');
    menuicon.classList.remove('add');
    menuclose.classList.add('add');
}

menuicon.onmouseover=function(){
    tags.classList.add('open');
    menuclose.classList.add('add');
}

menuclose.onmouseover=function(){
    tags.classList.remove('open');
    menuclose.classList.remove('add');
}
