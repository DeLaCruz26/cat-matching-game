  // SCORE:
    // create a place where you can see the user initials and the score
    // users can see their scores temporaly 
    



class Score{
    constructor(userScore,userInitials){
        this.userScore = userScore;
        this.userInitials = userInitials;
    }
    

displayScores = users => {
    users.forEach(user => {
        const li = document.createElement("li")
        li.className = "user-list"
        user.scores.forEach(score =>{
            const p = document.createElement("p")
            p.className = "score-list"
            p.innerHTML = `Username: ${user.username}- Score:${Cat.timer}-User Initials:${score.userInitials}`
            li.append(p)
        })

    }) 
 }


}