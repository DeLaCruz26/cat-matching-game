class Score{
   static  displayScores = () =>{
       const main = document.querySelector(".catCards")
        main.innerHTML = ""

        
        api.fetchUsers().then((users)=> {
            users.forEach(user => {
                const li = document.createElement("li")
                li.className = "user-list"
                user.scores.forEach(score =>{
                    const p = document.createElement("p")
                    p.className = "score-list"
                    p.innerHTML = `Username: ${user.username}- Score:${score.user_score}-User Initials:${score.user_initials}`
                    li.append(p)
                })
                main.append(li)
            
            }) 
            const resetButton = document.createElement("BUTTON")
            resetButton.innerText = "reset"
            main.append(resetButton)
           
            resetButton.addEventListener("click",() =>{
                this.reset()
            })
        })

    }

 static reset = () => {
    const main = document.querySelector(".catCards")
        main.innerHTML = ""
        newImagArray.forEach(newPic=> new Cat(newPic)) 
 }
}

// PROBLEMS 
//