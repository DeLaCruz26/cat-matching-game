 // need to create one card with an image and that image will have a pair 
    // it has to be a random order 
    class Cat{

    constructor(imgUrl,flip){
            this.imgUrl = imgUrl;
            this.flip= flip;

            this.backSide = document.createElement("div");
            this.backSide.className="backSide"
            this.newCat = document.createElement("div")
            this.newCat.className="cards"
            document.querySelector(".catCards").appendChild(this.newCat)
            this.image1 = document.createElement("img");
            this.image1.src = imgUrl
            this.newCat.append(this.image1)
            this.newCat.append(this.backSide)

        this.newCat.addEventListener("click",() =>{
            if (Cat.numberOfCatsSelected >= 2){
                return 
            }
            Cat.numberOfCatsSelected++ 
            this.image1.style.transform = "rotateY(0deg)"
            this.backSide.style.transform = "rotateY(180deg)"
            if (Cat.selectedCat === null){
                Cat.selectedCat = this 
                    
            }   
                
                else if (Cat.selectedCat.imgUrl !== imgUrl){
                    window.setTimeout( () => {
                        this.backSide.style.transform = "rotateY(0deg)"
                    this.image1.style.transform = "rotateY(180deg)"
                    Cat.selectedCat.backSide.style.transform = "rotateY(0deg)"
                    Cat.selectedCat.image1.style.transform = "rotateY(180deg)"
                    Cat.selectedCat = null
                    Cat.numberOfCatsSelected = 0 
                    },1000)
                    
                    
            } 
                else if (Cat.selectedCat.imgUrl === imgUrl){
                    window.setTimeout( () =>{
                        this.image1.src = imgUrl
                        Cat.selectedCat.newCat.remove();
                        this.newCat.remove();
                        Cat.selectedCat = null
                        Cat.numberOfCatsSelected = 0 
                    },1000)
                    
            }
            
        });
            

        }
    static selectedCat = null 
    static numberOfCatsSelected = 0
}



    // CARD LOOP:
    // step 1.  If I flip the card shows a cat then you have another chance to click a second card
    // step 2.  If the cards match delete cards if not give another chance to find card 
    // step 3.  Then it goes back to step 1. 
    // step 4.  When they are no game cards left ALL cards show up back again.
    

    // things to do:
    // make the pictures rin random order  everytime the loop restarts 
    // show both image1 when clicked 
    //  create a start and end of the game?
    // create a new placeholder when clicked and removed replace with a invisible card 
    

    // problems I've encountered:
    // 1. when I double click the same picture it dissapears which makes sense because is the same pic but it shouldn't happen
    // 2.when I click other pictures without finding their pair it won't let me see any other pictures


