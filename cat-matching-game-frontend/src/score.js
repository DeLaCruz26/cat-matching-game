// TO DO:
// FIX SCORE BUTTON EVERYTIME IS CLICKED IT GIVES ME A NEW SCORE WITHOUT PLAYING 
// WHEN IT DISPLAYS THE SCORE IS NOT THE SAME SCORE DISPLAYED IN THE SCORE'S LIST 
// FIX THE TIMER SO IT STOPS WHILE NOT PLAYING?
// FIX ALERT

class Score{
    static  displayScores = () =>{
       const main = document.querySelector(".scoresArea")
        main.innerHTML = ""

        api.fetchUsers().then((users)=> {
            users.forEach(user => {
                console.log(user)
                const ol = document.createElement("ol")
                ol.className = "user-list"
                user.scores.forEach(score =>{
                    const p = document.createElement("p")
                    p.className = "score-list"
                    p.innerText = `USERNAME: ${score.user_initials}- SCORE:${score.user_score}`
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
//    static currentUser = () =>{
//        api.postUser().then((user=>{
//         const h3 = document.createElement("h3")
//         h3.className = "user"
//         h3.innerText = `Username${user.username}`
//         main.append(h3)
//        }))

//     }

}
// create a div class, p,  append it to the body
 // css  