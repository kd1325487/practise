let searchicon = document.querySelector('.searchicon');
let closeicon = document.querySelector('.closeicon');
let searchbox = document.querySelector('.searchbox');

searchicon.onclick=function(){
    searchbox.classList.add('active');
    closeicon.classList.add('active');
    searchicon.classList.add('active');
};
closeicon.onclick=function(){
    searchbox.classList.remove('active');
    closeicon.classList.remove('active');
    searchicon.classList.remove('active');
};