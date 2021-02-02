
class API{
    constructor(port=3000){
         this.port = port
         this.url = `http://localhost:${port}`
    }


    // helpers 
    parseJSON = response => response.json()
    
    headers = {"Accepts":"application/json", "Content-Type": "application/json"}


    // getters 
    get scoresURL(){
        return this.url + '/scores'
    }
    get userURL(){
        return this.url + '/users'
    }

    // fetch
    fecthScores = () => fetch(this.scoresURL).then(this.parseJSON)
    fetchScore = (scoreID) => fetch(this.scoresURL + `/${scoreID}`).then(this.parseJSON)

    fetchUsers = () => fetch(this.usersURL).then(this.parseJSON)
    fetchUser = (userID) => fetch(this.usersURL + `/${userID}`).then(this.parseJSON)



   // posts 

    postScore = () => {
        return fetch(this.scoresURL, {
            method: "POST",
            header: this.headers,
            body: JSON.stringify()
        }).then(parseJSON)
    }

    postUser = () => {
        return fetch(this.usersURL, {
            method: "POST",
            header: this.headers,
            body: JSON.stringify()
        }).then(parseJSON)
    }
}