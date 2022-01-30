var form = document.querySelector(".form");
var counrty_Name=document.getElementById("Country_name")


form.addEventListener("submit", submitForm);

function submitForm(geek) {
    geek.preventDefault();
    console.log("Hy");
    search_Uni(counrty_Name)
}

function search_Uni(element){
  var counrty_name=element.value;
  //new_counrty_name=counrty_name.replaceAll(" ", "") + ""
console.log(new_counrty_name)
  const url=`http://universities.hipolabs.com/search?country=${counrty_name}`
  fetch(url).then((some)=>some.json())
  .then((data)=>{
      console.log(data)
      for(var i=0;i<data.length;i=i+1){
          var div=document.getElementById("contanier");
          var div2=document.createElement("div")
          div2.innerText=`${i+1}  ${data[i].name}`;
          div.appendChild(div2);
      }
  })
  counrty_name.value=""
}