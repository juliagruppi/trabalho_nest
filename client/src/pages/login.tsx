import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import ImgLogo from '../img/logo.png';
import {api} from '../api/api';
import { AuthToken } from '../authtoken';
import { useGlobalStore } from '../useGlobalStore';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setUser = useGlobalStore((state) => state.setUser);

  const navigate = useNavigate()

  function navigateToRegister() {
    navigate("/registro")
  }

  async function submitLogin(event: React.FormEvent<HTMLFormElement>, email: string, password: string) {
    event.preventDefault()
    const response = await api.post(`/auth/login`, { email, password }) as any
    if (response.data) {
      const { accessToken, user } = response.data;
      AuthToken.set(accessToken); 
      setUser({ ...user, isAuthenticated: true });
      navigate("/chat")
    } else {
      alert('Credenciais inválidas');
    }

  }
  return (
    <div className='bg-azul-escuro h-screen'>

      <div className='flex justify-center items-center h-screen' >
        <div className='bg-branco-fundo w-2/6 rounded-2xl drop-shadow-lg '>

          <div className='flex justify-center pt-4 pb-2'>
            <img className='w-60' src={ImgLogo} />
          </div>

          <div className='flex justify-center pt-4 pb-2 self-center text-center  text-black text-lg  font-semibold'><h2>Bem-Vindo!</h2></div>

          <div >
            <form
              onSubmit={(event) => submitLogin(event, email, password)}
              className='flex flex-col justify-center pt-4 pb-4 self-center'>

              <div className='flex  justify-center pt-4 pb-4 self-center w-full'>
                <label htmlFor="e-mail" ></label>
                <input className='bg-cinza-claro rounded-xl pl-2 pt-2 pb-2 drop-shadow-md font-medium text-base w-full max-w-[70%] grow-0' type="email" name="e-mail" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>

              <div className='flex  justify-center pt-4 pb-4 self-center w-full'>
                <label htmlFor="password" ></label>
                <input className='bg-cinza-claro rounded-xl pl-2 pt-2 pb-2 drop-shadow-md font-medium text-base w-full max-w-[70%] grow-0' type="text" name="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>

              <div className='flex flex-col justify-center pt-4 pb-4 self-center text-gray-800 text-base font-semibold'><p onClick={navigateToRegister}>Opa! Quero criar uma nova conta</p></div>

              <div className='flex justify-center pt-4 pb-4  w-full self-center'>
                <input className='bg-rosa-escuro rounded-xl pt-2 pb-2 drop-shadow-md font-medium text-cinza-claro text-lg w-full max-w-[70%] grow-0' type="submit" value="Login" /></div>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login 