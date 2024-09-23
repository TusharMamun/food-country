console.log("connected food page");
document.getElementById("search-button").addEventListener('click',function(){     
    const inputGet = document.getElementById("search-inpur")
  const inputValu =inputGet.value ;
if (inputValu=='') {
   
    alert("pleass inter your food name in search button")
    return
    
}
//   fetch the api
const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValu}`)
  fetch(url)
  .then(response=>response.json())
  .then(data=>display(data.meals)
  )
  inputGet.value = ''
}
)

const ui= document.getElementById("food");



const display=(foods)=>{
    if (foods == null) {
        alert("somethin is worhg")
        return
        
    }
   
     ui.innerHTML = ''
foods?.map((food =>{
    

    
  
    
    const fooDiv= document.createElement("div")
  
    fooDiv.innerHTML =`
   
  <div class="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
    <div class="relative">
        <img class="w-full" src="${food?.
            strMealThumb}" alt="Product Image">
        <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
        </div>
    </div>
    <div class="p-4">
        <h3 class="text-lg font-medium mb-2">${food?.strMeal}</h3>
        <p class="text-gray-600 text-sm mb-4">${food?.
            strInstructions.slice(0, 120)
            }</p>
        <div class="flex items-center justify-between">
            <span class="font-bold text-lg">$19.99</span>
            <button  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Buy Now
            </button>
        </div>
    </div>
</div>
`
ui.appendChild(fooDiv)
}))


}



// display in font 
// const ladeApi=(name)=> {
//  const url =`(https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValu}`
//  fetch(url)
// .then(response=>response.json())
// .then(data => displayFont(data[0])
// )
// }
// const displayFont =(foods)=>{

//     const diplaydeltels = document.getElementById("food-display")
//     diplaydeltels.innerHTML=`
//     <div class="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
//     <div class="relative">
//         <img class="w-full" src="${foods?.
//             strMealThumb}" alt="Product Image">
//         <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
//         </div>
//     </div>
//     <div class="p-4">
//         <h3 class="text-lg font-medium mb-2">${foods?.strMeal}</h3>
//         <p class="text-gray-600 text-sm mb-4">${foods?.
//             strInstructions.slice(0, 120)
//             }</p>
//         <div class="flex items-center justify-between">
//             <span class="font-bold text-lg">$19.99</span>
//             <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                 Buy Now
//             </button>
//         </div>
//     </div>
// </div>`
// window.scrollTo({
//     top: 0,
//     behavior: "smooth" 
//   });
// }