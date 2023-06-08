import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import ImgLogo from '../img/logo.png';

function Register() {
const navigate = useNavigate()


function navigateToChat() {
  navigate("/chat")
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
            <form className='flex flex-col justify-center pt-4 pb-4 self-center'>

            <div className='flex  justify-center pt-4 pb-4 self-center w-full'>
                <label htmlFor="Nome" ></label>
                <input className='bg-cinza-claro rounded-xl pl-2 pt-2 pb-2 drop-shadow-md font-medium text-base w-full max-w-[70%] grow-0' type="nome" name="nome" placeholder="Nome"/>
              </div>

            <div className='flex  justify-center pt-4 pb-4 self-center w-full'>
                <label htmlFor="e-mail" ></label>
                <input className='bg-cinza-claro rounded-xl pl-2 pt-2 pb-2 drop-shadow-md font-medium text-base w-full max-w-[70%] grow-0' type="email" name="e-mail" placeholder="E-mail"/>
              </div>

          <div className='flex  justify-center pt-4 pb-4 self-center w-full'>
                <label htmlFor="password" ></label>
                <input className='bg-cinza-claro rounded-xl pl-2 pt-2 pb-2 drop-shadow-md font-medium text-base w-full max-w-[70%] grow-0' type="text" name="password" placeholder="Senha"/>
              </div>
              
              <div className='flex justify-center pt-4 pb-4  w-full self-center'>
                <input onClick={navigateToChat} className='bg-rosa-escuro rounded-xl pt-2 pb-2 drop-shadow-md font-medium text-cinza-claro text-lg w-full max-w-[70%] grow-0' type="submit" value="Registrar" /></div>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Register 