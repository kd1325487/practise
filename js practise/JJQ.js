const content=document.getElementById('content');
const date=document.getElementById('date');
const time=document.getElementById('time');
const add=document.getElementById('add');
const delet=document.getElementById('delet');
const sdata=document.getElementById('sdata');
let list= []
let e=0

function datas(){
    let htmldata=''
    list.forEach(function(item){
        htmldata=htmldata+`
        <div class="data">
        <p>內容:${item.content}次數:${e}</p>
        <p>時間:${item.date}${item.time}</p>
        </div>
        `
    })
    sdata.innerHTML=htmldata
}
function adddata(){
    list.push({
        content:content.value,
        date:date.value,
        time:time.value
    })
    e=e++;
    datas()
}

function deletdata(){
    list.pop()
    datas()
}

add.addEventListener('click',adddata)
delet.addEventListener('click',deletdata)