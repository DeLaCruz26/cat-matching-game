// TO DO:
// FIX SCORE BUTTON EVERYTIME IS CLICKED IT GIVES ME A NEW SCORE WITHOUT PLAYING 
// WHEN IT DISPLAYS THE SCORE IS NOT THE SAME SCORE DISPLAYED IN THE SCORE'S LIST 
// FIX THE TIMER SO IT STOPS WHILE NOT PLAYING?
// FIX CSS FOR SCORES
// WHEN CLICK NEW GAME IT SHOWS WEIRD LAYOUT ON CSS 
// FIX ALERT

class Score{
    // static renderUserScore = () =>{
    //     api.postUserScore()
    //     .then(this.displayScores)
    // }
    

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
   

}
// create a div class, p,  append it to the body
 // css  