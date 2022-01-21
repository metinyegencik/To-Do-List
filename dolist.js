// İd ile öğe seçimi ("DOM")
let list = document.querySelector("#list")
let ekle = document.querySelector("#liveToastBtn")
let task = document.querySelector("#task")


// Girilen değerlerin eklenmesi ve silinmesi
ekle.addEventListener('click',function(){

  if(task.value=="")
  {
     $(".error").toast("show")
  }
  else
  {
   $(".toast-body").toast("show")

   let li = document.createElement('li')
   li.innerHTML=task.value;
   list.append(li)
   
   task.value=""
   task.focus=""

   li.addEventListener ('click',function()
   {
      li.style.textDecoration="line-through"
   })

   li.addEventListener('dblclick',function(){
      list.removeChild(li)
   })
  }
})

 

