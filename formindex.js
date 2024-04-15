




































// fetch('https://www.boredapi.com/api/activity')
// .then((response) =>{

//     console.log(response.json());

// })
// .then((stanley)=>{
//     var text = document.querySelector('.text')
//     text.innerHTML = stanley.activity
// console.log(stanley);
// })
const BTN = document.getElementById('btn')
const dogImage = document.querySelector('.dog-image')
BTN.addEventListener('click',function(){

// fetch('https://dog.ceo/api/breeds/image/random')
// .then((res) =>{
//     returnres.json()
// })
// .then((data)=>{
//   console.log(data);
//   dogimage.src = data.message
// })
// .catch((error) =>{
//     console.log('fetching Error:', error.message);
// })

fetch('https://dog.ceo/api/breeds/image/random')
.then((res)=>{

if(res.status !== 'success'){
    console.log('error');
}
return res.json()
})
.then((data)=>{
    console.log(data);
    dogImage.src = data.message
})

.catch((error)=>{
    console.log('fetching error:', error.message);
})

//sessionstorage
// localstorage
// cookies

// var myDetails = {
//      name:'dev';
//      school: 'Appclick'
// }

localStorage.setItem('username','Demilade')
var username = localStorage.getItem('username')
console.log(username);

var myArray = ('we','odds','fends')
myArray


fetch('https://official-joke-api.appspot.com/random_joke')
.then((res)=>{

if(res.status !== 'success'){
    console.log('error');
}
return res.json()
})
.then((Docu)=>{
    console.log(Docu);
    random_joke.src = Docu.message

})

.catch((error)=>{
    console.log('fetching error:', error.message);
})
})

fetch('http://universities.hipolabs.com/search?country=United+States')
.then((res)=>{

if(res.status !== 'success'){
    console.log('error');
}
return res.json()
})
.then((most)=>{
    console.log(most);
    random_joke.src = most.message

})

.catch((error)=>{
    console.log('fetching error:', error.message);
})
