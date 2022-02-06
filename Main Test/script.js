var blog_data=[
  
]



var Title=document.getElementById("Title")
var dis=document.getElementById("dis")
var form=document.getElementById("formfeed")

console.log(Title)




form.addEventListener('submit',submitform);

function submitform(geek){
    geek.preventDefault();
   update(Title,dis)
   
}


function update(a,b){
    
    blog_data.push({
        title:`${a.value}`,
        disc:`${b.value}`
    })

   reRender()
   a.value=""
   b.value=""
    console.log(blog_data)

}


console.log(blog_data)

function showFeed(){
    for(var i =0;i<blog_data.length;i=i+1){
        var div =document.getElementById('container');
        var div2=document.createElement('div')
        div2.classList.add("container")
        div2.innerHTML=
        `<span>${blog_data[i].title}</span>
        <p>${blog_data[i].disc}</p>
        <button onClick="deleteblog(${i})">Delete</button>
        <button onClick="editFeed(${i})">Edit</button>`
      
        div.appendChild(div2)
    }
}
showFeed();

function reRender(){
    var div =document.getElementById('container');
    div.innerHTML=""
    for(var i =0;i<blog_data.length;i=i+1){
        var div =document.getElementById('container');
        var div2=document.createElement('div')
        div2.classList.add("container")

        div2.innerHTML=
        `<h1>${blog_data[i].title}</h1>
        <span id="content" >${blog_data[i].disc}</span>
        <button onClick="deleteblog(${i})">Delete</button>
        <button id="edit" onClick="editFeed(${i})"><a href="#formfeed">Edit</button>`
      
        div.appendChild(div2)
    }
}

function deleteblog(i){
console.log(i)
blog_data.splice(i, 1);
reRender();
}

function editFeed(i){
    console.log(blog_data[i]);
    var eedit=document.getElementById("add")
    if(eedit.innerText=="Add"){
      
        eedit.innerText="Save"
    }
    else if(eedit.innerText=="Save"){
        eedit.innerText="Add"
    }
    Title.focus();
    dis.focus();
    document.getElementById("Title").value=blog_data[i].title
    document.getElementById("dis").value=blog_data[i].disc
    reRender();
    deleteblog(i)
}