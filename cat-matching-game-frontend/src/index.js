// const BACKEND_URL = 'localhost:3000';
// fetch(`${BACKEND_URL}/test`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse));

// function memoryCards(){
      
//     let caCards = document.getElementsByClassName("cards");
//    let image =  document.createElement("img");
//    image.src = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"
//     document.querySelector(".cards").appendChild(image)
// }
// memoryCards()

const images = ["https://i.pinimg.com/564x/f7/12/14/f7121435875f8439e16fe30658b3b986.jpg",
"https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
"https://i.pinimg.com/474x/76/45/d5/7645d5cbd695679733b45a5c957503fe.jpg",
"https://i.pinimg.com/564x/9b/a4/9c/9ba49c318b04657b4ad96a9397122f47.jpg",
"https://i.pinimg.com/564x/1f/ec/2f/1fec2faab5811882b0d97b4a88e39e96.jpg",
"https://i.pinimg.com/474x/e5/c5/fb/e5c5fb3415123fbab7c5941c49cf7fc8.jpg"]

// images.forEach(image=>new Cat(image))

newImagArray = [...images, ...images]
newImagArray.forEach(newPic=> new Cat(newPic))








