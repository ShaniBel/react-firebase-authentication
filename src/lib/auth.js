import firebase , { auth } from "../config/firebase"


class Auth{
    constructor(){
        this.authenticated = JSON.parse(localStorage.getItem("isAuthenticated")) || false
    }

    login(email, pass, cb){
        auth.signInWithEmailAndPassword(email, pass)
        .then((user) => {
            console.log(user)
            this.authenticated = true
            cb()
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

        // signOut(auth).then(()=>{
        //     this.authenticated = false
        //     cb()     
        // })
    }

    isAuthenticated(){

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                const uid = user.uid

                localStorage.setItem("isAuthenticated" , true)

            }else{
                localStorage.setItem("isAuthenticated" , false)
            }
        })
        
        return this.authenticated

    }

    // _saveUserDataToLocalStorage(user){
    //     const {email, displayName } = user

    //     const newUser = {
    //         email, displayName 
    //     }
    //     localStorage.setItem("user", JSON.stringify(newUser))
    //     return 'success'
    // }
}

export default new Auth()