
class API{
    constructor(port=3000){
         this.port = port
         this.url = `http://localhost:${port}`
    }

    get catMatchingGameURL(){
        return this.url + '/score'
    }
    parseJSON = response => response.json()
    
    headers = {"Accepts": "application/json", "Content-Type": "application/json"}
    
fetchCatGame = () => {
        return fetch(this.catMatchingGameURL).then(parseJSON)
    }

    fetchCatGame = (id) => {
        return fetch(this.catMatchingGameURL +`/${id}`).then(parseJSON)
    }

    postScore = () => {
        return fetch(this.catMatchingGameURL, {
            method: "POST",
            header: this.headers,
            body: JSON.stringify()
        }).then(parseJSON)
    }
}