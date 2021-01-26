// parseJSON = response => response.json()
//   .then(parsedResponse => console.log(parsedResponse));

// class API{
//     constructor(port=3000){
//          this.url = `http://localhost:${port}`
//     }

//     get catMatchingGameURL(){
//         return this.url + '/catgame'
//     }
//     parseJSON = response => response.json()
//      headers = {"Accepts": "application/json", "Content-Type": "application/json"}
//     fetchCatGame =()=> {
//         return fetch(this.catMatchingGameURL).then(parseJSON)
//     }

//     fetchCatGame =(id)=> {
//         return fetch(this.catMatchingGameURL +`/${id}`).then(parseJSON)
//     }

//     postCat = () => {
//         return fetch(this.catMatchingGameURL, {
//             method: "POST",
//             this.headers,
//             body:JSON.stringify()
//         }).then(parseJSON)
//     }
// }