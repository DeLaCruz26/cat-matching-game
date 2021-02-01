 class Cat{

    constructor(imgUrl){
            this.imgUrl = imgUrl;

            this.backSide = document.createElement("div");
            this.backSide.className="backSide"
            this.newCat = document.createElement("div")
            this.newCat.className="cards"
            this.cardHolder = document.createElement("div")
            this.cardHolder.className="cardHolder"
            

        document.querySelector(".catCards").appendChild(this.newCat)
            this.image = document.createElement("img");
            this.image.src = imgUrl
            this.newCat.append(this.image)
            this.newCat.append(this.backSide)
            this.newCat.appendChild(this.cardHolder)


         this.newCat.addEventListener("click",() =>{
            this.image.style.transform = "rotateY(0deg)"
            this.backSide.style.transform = "rotateY(180deg)"
            if (Cat.selectedCat === null){
                Cat.selectedCat = this 
                Cat.numberOfCatsSelected++ 
                
            }   
                
            else if (Cat.selectedCat.imgUrl !== imgUrl){
                window.setTimeout( () => {
                        this.backSide.style.transform = "rotateY(0deg)"
                        this.image.style.transform = "rotateY(180deg)"
                        Cat.selectedCat.backSide.style.transform = "rotateY(0deg)"
                        Cat.selectedCat.image.style.transform = "rotateY(180deg)"
                        Cat.selectedCat = null
                        Cat.numberOfCatsSelected--
                },1000)
                    
                    
            } 
            else if (Cat.selectedCat.imgUrl === imgUrl){
                    window.setTimeout( () =>{
                        this.image.src = imgUrl
                        Cat.selectedCat.newCat.style.visibility = "hidden"
                        this.newCat.style.visibility = "hidden"
                        Cat.selectedCat = null
                        Cat.numberOfCatsSelected++
                        if (Cat.numberOfCatsSelected === 12){
                            let finalScore = new Score(Cat.timer)
                            document.getElementById("user-initials").style.visibility = "visible"
                            alert(` YOUR SCORE is ${Cat.timer}!`)

                        }
                    },1000)
                
                    
            } 
           
           
        });
         

        }
    static selectedCat = null 
    static numberOfCatsSelected = 0
    static timer = 0

 
}



    // CARD LOOP:
    // step 1.  If I flip the card shows a cat then you have another chance to click a second card
    // step 2.  If the cards match delete cards if not give another chance to find card 
    // step 3.  Then it goes back to step 1. 
    // step 4.  When they are no game cards left ALL cards show up back again.
    

    // TO DO:
    // shuffle images array when the game restarts
    //  create a start and end of the game?
    

  
