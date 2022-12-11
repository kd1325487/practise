const add=document.getElementById('add');
const delet=document.getElementById('delet');
const text=document.getElementById('text');
const msgdata=document.getElementById('msgdata');
const p=document.getElementById('p');
let data=[]
let cs=0
add.onclick=function(){
    let datahtml=''
    
    
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
   
    })
    cs=cs+1
    p.innerHTML=cs+'則留言'
    text.value=''
}
delet.onclick=function(){
    text.value=''
}