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
                    console.log(score)
                    li.append(p)
                })
                main.append(li)
            }) 
        })  
    }
// issues 
// 1. when display scores, it display the same score to all of the other users 
// 2. the user initials is undefined on the screen
// 3. change the user initials functionality 
    
        
      

     
   


      
    




}