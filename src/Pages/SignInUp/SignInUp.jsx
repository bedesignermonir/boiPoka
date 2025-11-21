import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Component/Firebase/firebase.init';

const SignInUp = () => {
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);

    const handleSignWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            }).catch(error => {
                console.log(error);
            })
    }


    const handleSignout = () => {
        signOut(auth)
            .then((result) => {
                setUser(null)
            })
            .catch(error => { console.log(error); })
    }
    return (
        <div>


            {
                user ?
                    <button onClick={() => handleSignout()} className='btn btn-error p-5 m-5 border-2'>Sign Out</button>
                    : <button onClick={() => handleSignWithGoogle()} className='btn btn-error p-5 m-5 border-2'>Sign in With Google</button>
            }

            {
                user && <div className='grid grid-cols-3 items-center'>
                    <h3 className='text-2xl font-bold'>{user.displayName}</h3>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>

            }
        </div>
    );
};

export default SignInUp;