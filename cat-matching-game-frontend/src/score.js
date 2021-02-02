class Score{
    constructor(userInitials){
        this.userInitials = userInitials;
        
        main.innerHTML = ""

        this.userScore = document.createElement('ol')

        
        // this function displays a list of all users scores 
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

      
    




}