class Score{
   static  displayScores = () =>{
       const main = document.querySelector(".scoresArea")
        main.innerHTML = ""

        api.fetchUsers().then((users)=> {
            users.forEach(user => {
                const ol = document.createElement("ol")
                ol.className = "user-list"
                user.scores.forEach(score =>{
                    const p = document.createElement("p")
                    p.className = "score-list"
                    p.innerText = `USERNAME: ${user.username}- SC:${score.user_score}`
                    ol.append(p)
                })
                main.append(ol)
            
            }) 
            const newGame = document.createElement("BUTTON")
         newGame.innerText = "New Game"
            main.append(newGame)
           
         newGame.addEventListener("click",() =>{
                this.reset()
            })
        })

    }

    static reset = () => {
        const main = document.querySelector(".scoresArea")
            main.innerHTML = ""
            newImagArray.forEach(newPic=> new Cat(newPic)) 
    }
    static renderScores = () =>{
        this.scoresArea = document.createElement("div")
        this.scoresArea.className = "scoresArea"
      
    }

}
// create a div class, p,  append it to the body
 // css  