let mevaNomi =document.querySelector(".meva")
let Dollor =document.querySelector(".dollor")
let Kilo =document.querySelector(".kilo")
let FBTN =document.querySelector(".fruitbtn")
let Fruits =document.querySelector(".fruits")
let elSearch =document.querySelector(".search")
let balanc =document.querySelector(".balanc")

const dataa = fruit.splice(0)
mapper(dataa)
function mapper(data) {
  console.log(data);
  data.forEach((e)=>{
mevaNomi.textContent= e.meva
Dollor.textContent= e.qiymati
Kilo.textContent= e.kilo

})}

elSearch.addEventListener("keydown", (e)=>{
  const SearchData = []
  let searchValue = e.target.value
  dataa.map((item)=>{
    if (item.meva.toString().toLowerCase().indexOf(searchValue.toString())!= -1){
     SearchData.push(item)
    }
  })
  mapper(SearchData)
  FBTN.addEventListener("click", ()=>{
    console.log(SearchData);
  })
})


// ____________________________vegetables_______________________________
let ElVege =document.querySelector(".vege")
let VegeDol =document.querySelector(".vege_dol")
let VegeKg =document.querySelector(".vege_kg")
let Vegebtn =document.querySelector(".vegebtn")
let listvege =document.querySelector(".list_v")
let elSearchVege =document.querySelector(".vegesearch")

const vegetable = vegetables.splice(0)
veges(vegetable)
function veges(vegetable) {
  vegetable.forEach((e)=>{
    ElVege.textContent= e.vege
    VegeDol.textContent= e.qiymati
    VegeKg.textContent= e.kilo

})}

elSearchVege.addEventListener("keyup", (e)=>{
  let searchValueVege = e.target.value
  const Searchvege = []
  vegetable.map((item)=>{
    if (item.vege.toString().toLowerCase().indexOf(searchValueVege.toString())!= -1){
     Searchvege.push(item)
    }
  })
veges(Searchvege)
Vegebtn.addEventListener("click", ()=>{
  console.log(Searchvege);
})
})

// ____________________________Meat_______________________________
let ElMeat =document.querySelector(".meat_n")
let MeatD =document.querySelector(".meat_d")
let Meatkg =document.querySelector(".meat_kg")
let meat_btn =document.querySelector(".meat_btn")
let list_meat =document.querySelector(".list_meat")
let Meatsearch =document.querySelector(".meatsearch")

const meats = meat.splice(0)
meateat(meats)
function meateat(gost) {
  gost.forEach((e)=>{
    ElMeat.textContent= e.meat
    MeatD.textContent= e.qiymati
    Meatkg.textContent= e.kilo

})}

Meatsearch.addEventListener("keyup", (e)=>{
  
  let searchValue = e.target.value
  const SearchData = []
  meats.map((item)=>{
    if (item.meat.toString().toLowerCase().indexOf(searchValue.toString())!= -1){
     SearchData.push(item)
    }
  })
  meateat(SearchData)
  meat_btn.addEventListener("click", ()=>{
  console.log(SearchData);
})
})
