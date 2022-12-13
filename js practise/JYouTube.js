const menuin=document.querySelector('.menuicon')
const menuout=document.querySelector('.cicon')
const headerc=document.querySelector('.headerc')
const fullclose=document.querySelector('.fullclose')
const dropdown=document.querySelector('.dropdown')
const ling=document.querySelector('.ling')
const tag=document.querySelector('.tag')

menuin.onclick=function(){
    menuout.classList.add('ciconin')
    headerc.classList.add('menuin')
    fullclose.classList.add('fullcloseadd')
}
menuout.onclick=function(){
    menuout.classList.remove('ciconin')
    headerc.classList.remove('menuin')
    fullclose.classList.remove('fullcloseadd')
}
fullclose.onclick=function(){
    fullclose.classList.remove('fullcloseadd')
    menuout.classList.remove('ciconin')
    headerc.classList.remove('menuin')
}
dropdown.onclick=function(){
    ling.classList.add('dropdownin')
    tag.classList.add('d')

}
