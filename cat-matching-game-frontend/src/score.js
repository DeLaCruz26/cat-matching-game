

class Score{
    static currentScore = 0 
 static  displayScores = () =>{
     console.log("displayScores")
       const main = document.querySelector(".scoresArea")
        main.innerHTML = ""
        
        api.fetchUsers().then((users)=> {
            users.forEach(user => {
                // console.log(user)
                const ol = document.createElement("ol")
                ol.className = "user-list"
                user.scores.forEach(score =>{
                    console.log(score)
                    const p = document.createElement("p")
                    p.className = "score-list"
                    p.innerText = `USERNAME: ${score.user_initials}- SCORE:${score.user_score}`
                    ol.append(p)
                })
                main.append(ol)
            
            }) 
                const newGame = document.createElement("BUTTON")
                 newGame.innerText = "New Game"
                newGame.addEventListener("click",this.newGameButton)
                main.append(newGame)
            
        })

    }

    static newGameButton = () => {
           const main = document.querySelector(".scoresArea")
            main.innerHTML = ""
            newImagArray.forEach(newPic=> new Cat(newPic)) 
            Cat.timer = 0
           beginInterval()
        }

}
  
// 1. clear the score interval for the new game 
// 2.shuffle the game

