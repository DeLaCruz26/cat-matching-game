
const images = ["https://i.pinimg.com/564x/f7/12/14/f7121435875f8439e16fe30658b3b986.jpg",
"https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
"https://i.pinimg.com/474x/76/45/d5/7645d5cbd695679733b45a5c957503fe.jpg",
"https://i.pinimg.com/564x/9b/a4/9c/9ba49c318b04657b4ad96a9397122f47.jpg",
"https://i.pinimg.com/564x/1f/ec/2f/1fec2faab5811882b0d97b4a88e39e96.jpg",
"https://i.pinimg.com/474x/e5/c5/fb/e5c5fb3415123fbab7c5941c49cf7fc8.jpg"]

randomCard = newImagArray =>{
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

let scoreInterval 
function beginInterval() {
   scoreInterval =  setInterval(function(){Cat.timer++},100)
   newImagArray = randomCard(newImagArray)
}

beginInterval()



const api = new API

const form = document.querySelector("#user-initials")



form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const userInitials = document.getElementById("user-initials").children[0].value
    api.postUserScore({
        user:{username:userInitials},
        score:{user_initials:userInitials,user_score:Score.currentScore}
    }).then((user_score)=> {  
        // console.log(user_score)
        Score.displayScores().then(()=>{
            let userId = user_score.user.id
            let user = document.getElementById("scoreButtonId")
            user.addEventListener("click", () =>{
                api.fetchUser(userId).then( data => {
                  const body =   document.querySelector(".scoresArea")
                    body.innerHTML = ""
                  const ol = document.createElement("ol")
                    ol.className = "user-list"
                    data.scores.forEach(score =>{
                        const p = document.createElement("p")
                        p.className = "score-list"
                        p.innerText = `SCORE:${score.user_score}`
                     ol.append(p)
                 body.appendChild(ol)
                    // const newGame = document.createElement("BUTTON")
                    // newGame.innerText = "New Game"
                    // newGame.addEventListener("click",Score.newGameButton)
                    // body.append(newGame)
                    })
                })
                
            })
        })

    }) 
})


