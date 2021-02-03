 
class Cat{

    static selectedCat = null 
    static numberOfCatsSelected = 0
    static timer = 0

    constructor(imgUrl){
            this.imgUrl = imgUrl;
            this.createElements()

            

        document.querySelector(".catCards").appendChild(this.newCat)
            this.image1 = document.createElement("img");
            this.image1.src = imgUrl
            this.newCat.append(this.image1)
            this.newCat.append(this.backSide)
            this.newCat.appendChild(this.cardHolder)

         this.newCat.addEventListener("click",() =>{
        
            this.image1.style.transform = "rotateY(0deg)"
            this.backSide.style.transform = "rotateY(180deg)"
            
            if (Cat.selectedCat === null){
                Cat.selectedCat = this 
                Cat.numberOfCatsSelected++ 
            }   
                
            else if (Cat.selectedCat.imgUrl !== imgUrl){
                this.firstSetTimeOut()
            } 
                
            else if (Cat.selectedCat.imgUrl === imgUrl){
                this.secondSetTimeOut()
            } 
           
           
        });
         
       
        }

    createElements = () =>{
        this.backSide = document.createElement("div");
        this.backSide.className="backSide"
        this.newCat = document.createElement("div")
        this.newCat.className="cards"
        this.cardHolder = document.createElement("div")
        this.cardHolder.className="cardHolder"
    }
    
    firstSetTimeOut = () =>{
        window.setTimeout( () => {
            this.backSide.style.transform = "rotateY(0deg)"
            this.image1.style.transform = "rotateY(180deg)"
            Cat.selectedCat.backSide.style.transform = "rotateY(0deg)"
            Cat.selectedCat.image1.style.transform = "rotateY(180deg)"
            Cat.selectedCat = null
            Cat.numberOfCatsSelected--
    },1000)
    }
    secondSetTimeOut = () => {
        window.setTimeout( () =>{
            this.image1.src = this.imgUrl
            Cat.selectedCat.newCat.style.visibility = "hidden"
            this.newCat.style.visibility = "hidden"
            Cat.selectedCat = null
            Cat.numberOfCatsSelected++
            if (Cat.numberOfCatsSelected === 12){
                document.getElementById("user-initials").style.visibility = "visible"
                alert(` YOUR SCORE is ${Cat.timer}!`)
                document.addEventListener("submit",(event)=>{
                    event.preventDefault()
                 const userInitials = document.getElementById("user-initials").children[0].value
                    api.postUserScore({
                        user:{username:userInitials},
                        score:{user_initials:userInitials,user_score:Cat.timer}
                    })
                    Score.displayScores()

                })

             }
        },1000)
    }
}



//    TO DO:
// display all the user's scores from a highest score to low 



    

  
