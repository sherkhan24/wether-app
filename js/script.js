
//1
let userInput = document.querySelector('.formControl input');

//3
let apikey = `da3f9a369963ed578577e29af0ccb3c0`;
let api ;

//6
let errorMsg = document.querySelector('.errorMsg');

//9 
let errorMsgerror = document.querySelector('.errorMsg span');

//10
let mainData = document.querySelector('.mainData');
//12
let backBtn = document.querySelector('.back');

let cityName =document.querySelector('.cityName');

let winds = document.querySelector('.winds');

let good  = document.querySelector('.good');

let type = document.querySelector('.type');
let image = document.querySelector('.img');


let temp =document.querySelector('.temp');


//2
userInput.addEventListener('keyup', function(userkeyboard){
  
  if(userkeyboard.key === "Enter" && userInput.value != '' && userInput.value.trimEnd()) {


    console.log(userInput.value.trimStart());
     

    getAPi(userInput.value) 
  }
})

//5
const getAPi = (city) => {
  api = ` http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${apikey}`;

  feachtData();
}

//7
const feachtData = () => {
  
  cityName.innerHTML = `${userInput.value}`
      errorMsg.style.dispaly = "flex";
      userInput.value = ''
      fetch(api).then(res => res.json()).then((result) => datafromApi(result))
}


//8
const datafromApi = (data) => {
  // console.log(data);
  if(data.cod === '404'){
    errorMsg.style.display = "flex";
    errorMsgerror.innerHTML = `'${userInput.value}' city not found`

  }else{
    errorMsg.style.display = "none";
    //11
    mainData.style.display = "flex";
    temp.innerHTML = Math.floor(data.main.temp)+"°C";
    type.innerHTML = data.weather[0].main;
    winds.innerHTML = `${data.wind.speed}`
  }

}

//13
setInterval (() => {
  let clock = new Date().toLocaleTimeString();
  document.getElementById('time').innerHTML = clock
}, 1000)

backBtn.addEventListener('click', function() {mainData.style.display = "none"})




