 // need to create one card with an image and that image will have a pair 
    // it has to be a random order 
    class Cat{
    constructor(imgUrl,flip){
        this.imgUrl = imgUrl;
        this.flip= flip;
       this.newCat = document.createElement("div")
      this.newCat.className="cards"
      document.querySelector(".catCards").appendChild(this.newCat)
      this.image1 = document.createElement("img");
    //   image1.src = imgUrl
     this.newCat.append(this.image1)
     this.newCat.addEventListener("click",() =>{
    
        if (Cat.cardLoop === null){
                this.image1.src = imgUrl
           Cat.cardLoop = this 
        } else if (Cat.cardLoop.imgUrl !== imgUrl ){
               Cat.cardLoop.image1.src = null
               Cat.cardLoop = null
        } else if (Cat.cardLoop.imgUrl === imgUrl){
            this.image1.src = imgUrl
            Cat.cardLoop.newCat.remove();
            this.newCat.remove();
            Cat.cardLoop = null
        }
     });
    }
   static cardLoop = null 
}
    // CARD LOOP:
    // step 1.  If I flip the card shows a cat then you have another chance to click a second card
    // step 2.  If the cards match delete cards if not give another chance to find card 
    // step 3.  Then it goes back to step 1. 
    // step 4.  When they are no game cards left ALL cards show up back again.
    
    // Questions?
    // should I create a start and end of the game?

