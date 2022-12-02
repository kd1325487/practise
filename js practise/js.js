let searchBtn=document.querySelector('.searchBtn');
let cloaseBtn=document.querySelector('.closeBtn');
let searchBox=document.querySelector('.searchBox');

searchBtn.onclick = function(){
    searchBox.classList.add('active');
    cloaseBtn.classList.add('active');
    searchBtn.classList.add('active');
}


cloaseBtn.onclick = function(){
    searchBox.classList.remove('active');
    cloaseBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}
