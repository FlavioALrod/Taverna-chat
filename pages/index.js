import React, { useContext } from 'react';

import { Context } from '../context';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';
 


export default function Auth() {
  const {username, secret, setUsername, setSecret } = useContext(Context);
  
  const router = useRouter()

  function onSubmit(e){
    e.preventDefault()

    if (username.length === 0 || secret.length === 0) return

    axios.put(
      "https://api.chatengine.io/users/",
      {username, secret},
      {headers: {"Private-key": 'f616b0e7-2107-4d01-b483-6deb55af83a6'}}
    )
    .then((r) => router.push('/chats'))
  }
  return (
    <div className='background'>
      <div className='auth-container'>
        <form onSubmit={(e) => onSubmit(e)} className='auth-form'>
          <div className='auth-title'>Taverna Chat</div>

          <div className='input-container'>
            <input
              type='email'
              placeholder='Email'
              className='text-input'
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              className='text-input'
              onChange={e => setSecret(e.target.value)}
            />

            <button type='submit' className='submit-button'>
              Login / Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
