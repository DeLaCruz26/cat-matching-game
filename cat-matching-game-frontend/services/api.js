
class API{
    constructor(port=3000){
         this.port = port
         this.url = `http://localhost:${port}`
    }


    // helpers 
    parseJSON = res => res.json()
    
    headers = {"Accepts":"application/json", "Content-Type": "application/json"}


    // getters 
    get scoresURL(){
        return this.url + '/scores'
    }
    get usersURL(){
        return this.url + '/users'
    }

    // fetch
    fetchScores = () => fetch(this.scoresURL).then(this.parseJSON)
    fetchScore = (scoreID) => fetch(this.scoresURL + `/${scoreID}`).then(this.parseJSON)

    fetchUsers = () => fetch(this.usersURL).then(this.parseJSON)
    fetchUser = (userID) => fetch(this.usersURL + `/${userID}`).then(this.parseJSON)



   // posts 

   postUser = body => fetch(this.usersURL, {
    method: "POST",
    headers: this.headers,
    body: JSON.stringify(body)
  }).then(this.parseJSON)

  postUserScore = body => fetch(this.scoresURL, {
    method: "POST",
    headers: this.headers,
    body: JSON.stringify(body)
  }).then(this.parseJSON)

}