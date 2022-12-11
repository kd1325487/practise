const add=document.getElementById('add')
const delet=document.getElementById('delet')
const text=document.getElementById('text')
const msgdata=document.getElementById('msgdata')
const p=document.getElementById('p')

const btni=document.querySelector('.btni')
const btnd=document.querySelector('.btnd')
const sicon=document.querySelector('.sicon')
let data=[]
let cs=0

text.onclick=function(){
    btni.classList.add('pu')
    btnd.classList.add('pu')
    sicon.classList.add('pu')
}
delet.onclick=function(){
    text.value=''
    btni.classList.remove('btniadd')
    btni.classList.remove('pu')
    btnd.classList.remove('pu')
    sicon.classList.remove('pu')
}
text.addEventListener('blur',function(){
    if(text.value==''){
        btni.classList.remove('btniadd')
    }
})
text.addEventListener('input',function(){
    btni.classList.add('btniadd')
})




add.onclick=function(){
    if(text.value!=''){
    let datahtml=''
    btni.classList.remove('btniadd')
    data.push({
        text:text.value
    })
    data.forEach(function(item){
        datahtml=datahtml+`
        <input  type="image" src="" alt="" class="hicon">
            <div class="msgbox">
                <p>${item.text}</p>
                <ion-icon name="close-outline" id="closex"></ion-icon>
                
            </div> 
        `
        console.log(item)
    msgdata.innerHTML=datahtml
    })
    cs=cs+1
    p.innerHTML=cs+'則留言'
    text.value=''
 
}}



