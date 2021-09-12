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

        // signOut(auth).then(()=>{
        //     this.authenticated = false
        //     cb()     
        // })
    }

    isAuthenticated(){

        // let user = firebase.auth().currentUser;

        // console.log(user)

        // return (user !== null) ? this.authenticated = true : this.authenticated = false ; 

        const authPromise = new Promise((resolve, reject) => {
             auth.onAuthStateChanged((user) => {

                if (user) {
                
                  var uid = user.uid;
                
                  resolve(user)
                    
                } else {
                
                  reject()
                
                }
                
            })
            
        })
        
        // console.log(auth.currentUser)
        
        return authPromise.then((user) => {
            // if(this._saveUserDataToLocalStorage(user) === 'success')
            console.log(user)

            this.authenticated = true
            
            
        }).catch((res) => {
            this.authenticated = false
            
            // console.log("some errror", e)
        });
        
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