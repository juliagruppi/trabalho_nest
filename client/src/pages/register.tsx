import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import ImgLogo from '../img/logo.png';
import { api } from '../api/api';
import { AuthToken } from '../authtoken';
import { useGlobalStore } from '../useGlobalStore';

function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', name: '', surname: '' })
  const setUser = useGlobalStore((state) => state.setUser);

  async function createUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (form.email.length > 6 && form.name.length > 2 && form.password.length > 6) {
      const response = await api.post('/auth/create-account', form)
      if (response.data.success) {
        const { accessToken, user } = response.data;
        AuthToken.set(accessToken);
        setUser({ ...user, isAuthenticated: true });
        navigate("/chat")
      } else {
        alert('Falha ao criar usuario');
      }

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
            <form className='flex flex-col justify-center pt-4 pb-4 self-center' onSubmit={(e) => createUser(e)}>

              <div className='flex  justify-center pt-4 pb-4 self-center w-full'>
                <label htmlFor="Nome" ></label>
                <input className='bg-cinza-claro rounded-xl pl-2 pt-2 pb-2 drop-shadow-md font-medium text-base w-full max-w-[70%] grow-0' type="text" name="nome" placeholder="Nome" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className='flex  justify-center pt-4 pb-4 self-center w-full'>
                <label htmlFor="Sobrenome" ></label>
                <input className='bg-cinza-claro rounded-xl pl-2 pt-2 pb-2 drop-shadow-md font-medium text-base w-full max-w-[70%] grow-0' type="text" name="surname" placeholder="Sobrenome" value={form.surname} onChange={(e) => setForm({ ...form, surname: e.target.value })} />
              </div>

              <div className='flex  justify-center pt-4 pb-4 self-center w-full'>
                <label htmlFor="e-mail" ></label>
                <input className='bg-cinza-claro rounded-xl pl-2 pt-2 pb-2 drop-shadow-md font-medium text-base w-full max-w-[70%] grow-0' type="email" name="e-mail" placeholder="E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>

              <div className='flex  justify-center pt-4 pb-4 self-center w-full'>
                <label htmlFor="password" ></label>
                <input className='bg-cinza-claro rounded-xl pl-2 pt-2 pb-2 drop-shadow-md font-medium text-base w-full max-w-[70%] grow-0' type="password" name="password" placeholder="Senha" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
              </div>

              <div className='flex justify-center pt-4 pb-4  w-full self-center'>
                <input className='bg-rosa-escuro rounded-xl pt-2 pb-2 drop-shadow-md font-medium text-cinza-claro text-lg w-full max-w-[70%] grow-0' type="submit" value="Registrar" /></div>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Register 