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
                    p.innerHTML = `Username: ${user.username}- Score:${Cat.timer}-User Initials:${score.userInitials}`
                    li.append(p)
                })
                main.append(li)
            }) 
        })  
    }

    
        
      

     
   


      
    




}