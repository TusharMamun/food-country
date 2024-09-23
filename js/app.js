// Arrow function in const

// const loadApicontry =()=>{

// }
// const hellow = ()=>{

// }
// const api = ()=>{

// }
console.log("connected");

const  loaeApi = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data =>displyCountry(data)
    )
}
loaeApi()

const ui = document.getElementById("country-info")
const displyCountry = (conuntries)=>{
  
    conuntries.forEach(conuntry => {
        // console.log(conuntry);
    

        const div=document.createElement('div')
        div.classList.add('country')
div.innerHTML=`
<img class = "w-full h-60" src="${conuntry.flags.png}" alt="">
<h2 class="my-5 text-xxl text-center">country:${conuntry.name.common}</h2>
<p>capital:${conuntry.capital}</p>
<button onclick="ladeApi('${conuntry.name.common}')" class = " w-full text-white bg-gradient-to-r from-cyan-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-8">See detailes</button>`
ui.appendChild(div)
      
    }
    );

    
}
// buttono input>>>
const ladeApi=(name)=> {
 const url =`https://restcountries.com/v3.1/name/${name}`
 fetch(url)
.then(response=>response.json())
.then(data => displayFont(data[0])
)
}
const displayFont =(country)=>{

    const diplaydeltels = document.getElementById("contry-det")
    diplaydeltels.innerHTML=`
    <h1 class="my-5 text-xxl text-center">WEllcomet to ${country.name.common}</12>

<img class = "w-446 h-360 mx-auto text-center" src="${country.flags.png}" alt="">
<h2 class="my-5 text-xxl text-center">country:${country.name.common}</h2>
<p>capital:${country.capital}</p>
<button onclick="ladeApi('${country.name.common}')" class = " w-full text-white bg-gradient-to-r from-cyan-500 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-8">Welcome</button>`
window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
}
