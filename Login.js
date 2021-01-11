import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider} from "./firebase"
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
              });
            console.log(result)
        })
        .catch((error) => {
            alert(error.message)
        });
    }
    return (
        <div className="login">
            <div>
                <img 
                src="https://github.com/piyush626/photos/blob/main/fb1.png?raw=true"
                />
                <img
                src="https://github.com/piyush626/photos/blob/main/fb2.png?raw=true"
                />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
