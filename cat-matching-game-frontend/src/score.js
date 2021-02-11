

class Score{
  

    static currentScore = 0 

        static  displayScores = () => {
        //   console.log("displayScores")
            const main = document.querySelector(".scoresArea")
            main.innerHTML = ""
            return api.fetchUsers().then((users)=> {
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
                
                    const user = document.createElement("BUTTON")
                    user.innerText = "My Score"
                    user.id = "scoreButtonId"
                    user.addEventListener("click",this.userButton)
                    main.append(user) 
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



