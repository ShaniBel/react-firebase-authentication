import firebase , { auth } from "../config/firebase"


class Auth{
    constructor(){
        this.authenticated = false
    }

    login(email, pass){
        auth.signInWithEmailAndPassword(email, pass)
        .then((user) => {
            console.log(user)
            this.authenticated = true
        })
        .catch(e => console.log('login error: ',e))
    }
    
    signup(email, pass){
        auth.createUserWithEmailAndPassword(email, pass).catch(e=> console.log('user creatation error:' ,e))
    }

    logout(cb){
        auth.signOut().then(() =>{
            this.authenticated = false
            cb()
        })

    }

    isAuthenticated(){

        return this.authenticated

    }

}

export default new Auth()