 // need to create one card with an image and that image will have a pair 
    // it has to be a random order 
    

class Cat{
    constructor(imgUrl){
        this.imgUrl = imgUrl;
      let newCat = document.createElement("div")
      newCat.className="cards"
      document.querySelector(".catCards").appendChild(newCat)
      let image1 = document.createElement("img");
      image1.src = imgUrl
     newCat.append(image1)
    }
   
}
