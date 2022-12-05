const add=document.getElementById('add');
const delet=document.getElementById('delet');
const text=document.getElementById('text');
const msgdata=document.getElementById('msgdata');
const c=document.getElementById('c');
let data=[]

add.onclick=function(){
    let datahtml=''
    let cs=0
    let asdf='則留言'
    // let color=Math.floor(Math.random()*999)
    data.push({
        text:text.value
    })
    // console.log(data);
    data.forEach(function(item){
        datahtml=datahtml+`
        <div class="msgbox">
            <input type="image" src="" alt="" class="hicon">
            <div class="msgbox">
             <p>${item.text}</p>
            </div> 
        </div>  
        `
    msgdata.innerHTML=datahtml
        cs=cs+1
        
    c.innerHTML=cs+asdf  
    text.value=''
    })
}
delet.onclick=function(){
    text.value=''
}