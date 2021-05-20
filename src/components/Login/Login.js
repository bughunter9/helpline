import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth , provider } from '../firebase';
import image from '../../assets/image.png';
import './Login.css';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                }))
            }).catch((error) => alert(error));
    };

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                }))
            }).catch((error) => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert("Please Enter a Full Name !!");
        }
        auth.createUserWithEmailAndPassword(email,password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                    }));
                });
            }).catch((error) => alert(error));
    };
    

    return (
        <div className='login'>
            <img src={image} alt="CovidLogo" />
            
            <form>
                <input value={name} onChange={e => setName(e.target.value)} 
                placeholder="Full Name (required if registering)" type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} 
                placeholder="Email" type="email" />
                <input value={password} onChange={e => setPassword(e.target.value)} 
                placeholder="Password" type="password" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member ?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
                {" "} Or 
            </p>
                <button type='submit' className="g__button" onClick={signIn}>
                    Sign In With Google</button>
        </div>
    );
}

export default Login;

