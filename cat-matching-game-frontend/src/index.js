
const images = ["https://i.pinimg.com/564x/f7/12/14/f7121435875f8439e16fe30658b3b986.jpg",
"https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
"https://i.pinimg.com/474x/76/45/d5/7645d5cbd695679733b45a5c957503fe.jpg",
"https://i.pinimg.com/564x/9b/a4/9c/9ba49c318b04657b4ad96a9397122f47.jpg",
"https://i.pinimg.com/564x/1f/ec/2f/1fec2faab5811882b0d97b4a88e39e96.jpg",
"https://i.pinimg.com/474x/e5/c5/fb/e5c5fb3415123fbab7c5941c49cf7fc8.jpg"]

randomCard = images =>{
let shuffledArray = []
while (newImagArray.length){
    const randomCatIndex = Math.floor(Math.random()*newImagArray.length)
    shuffledArray.push(newImagArray[randomCatIndex])
    newImagArray.splice(randomCatIndex,1)
}
    return shuffledArray
}


 newImagArray = [...images, ...images]
 newImagArray = randomCard(newImagArray)
newImagArray.forEach(newPic=> new Cat(newPic))


setInterval(function(){Cat.timer++},100)


// function startWatching(seconds, minutes) {
// 	timer_observer = setInterval(() => {
// 		seconds > 58 ? ((minutes += 1), (seconds = 0)) : (seconds += 1);
// 		seconds_str = seconds > 9 ? `${seconds}` : `0${seconds}`;
// 		minutes_str = minutes > 9 ? `${minutes}` : `0${minutes}`;
// 		time.innerHTML = `${minutes_str}:${seconds_str}`;
// 		if (correct_flips >= 9) {
// 			audio.play();
// 			clearInterval(timer_observer);
// 			gameWonParty(moves);
// 			return;
// 		}
// 		// console.log(minutes, seconds_str);
// 	}, 1000);
// }











