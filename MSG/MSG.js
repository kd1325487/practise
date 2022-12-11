const add=document.getElementById('btn2');
const delet=document.getElementById('btn1');
const text=document.getElementById('msgbtn');
const p=document.getElementById('p');
const newbox=document.getElementById('box6');

let array=[]
let pp=0
let aa='則留言'
add.onclick=function(){
    let aaa=''
    array.unshift({
        text:text.value
    })
    array.forEach(function(item){
        aaa=aaa+`
        <div class="box">
            <div class="box2">
            <input type="image" alt="" class="img">
            <p class="box3">${item.text}</p>
            </div>
        </div>
        `
    })
    text.value=''
    newbox.innerHTML=aaa
    pp=pp+1
    p.innerHTML=pp+aa
}