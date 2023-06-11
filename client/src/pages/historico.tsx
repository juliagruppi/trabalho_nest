import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from "axios";
import { api, logout, uploadUserPictureApi } from '../api/api';
import ImgLogoDois from '../img/logo-rosa.png';
import ImgProduto from '../img/engrenagem-mulher.png';
import ImgLivia from '../img/livia.png';
import ImgAvatar from '../img/AvatarJulia.png';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useGlobalStore } from '../useGlobalStore';

type Mensagem = {
  mensagem: string,
  ehUsuario: boolean
}

const componentesPaginacaoInicial = {
  direction: "asc",
  orderBy: "created_at",
  limit: 6,
  offset: 0,
  search: ''
}
const Historico = () => {
  const [protocolos, setProtocolos] = useState([])
  const user = useGlobalStore((state) => state.user);
  const setUser = useGlobalStore((state) => state.setUser);
  const [historico, setHistorico] = useState([])
  const [numeroDeProtocolos, setNumeroDeProtocolos] = useState(0)
  const [search, setSearch] = useState(undefined)
  const [componentesPaginacao, setComponentesPaginacao] = useState(componentesPaginacaoInicial)
  const navigate = useNavigate()

  function navigateToHistorico() {
    navigate("/chat")
  }

  async function carregarProtocolos() {
    const responseProtocolos = await api.get('/protocolo', {
      params: componentesPaginacao
    })
    setProtocolos(responseProtocolos.data.protocolos)
    setNumeroDeProtocolos(responseProtocolos.data.count)
  }

  async function carregarHistoricoDeConversa(numeroProtocolo: number) {
    const responsehistorico = await api.get(`/historicoAtendimento/${numeroProtocolo}`)
    setHistorico(responsehistorico.data)
  }

  const ordenarPorCreatedAt = (direcao: string) => {
    setComponentesPaginacao({
      ...componentesPaginacao,
      direction: direcao
    })
  }

  const nextPage = () => {
    setComponentesPaginacao({
      ...componentesPaginacao,
      offset: componentesPaginacao.offset + componentesPaginacao.limit
    })
  }

  const previousPage = () => {
    setComponentesPaginacao({
      ...componentesPaginacao,
      offset: componentesPaginacao.offset - componentesPaginacao.limit
    })
  }

  const buscaProtocolo = (valorBuscado: string) => {
    setComponentesPaginacao({
      ...componentesPaginacao,
      search: valorBuscado
    })
  }

  useEffect(() => {
    carregarProtocolos()
  }, [componentesPaginacao])

  async function onPictureSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const picture = event.target.files?.[0];
    if (picture !== undefined) {
      console.log(picture)
      const { userPicture } = await uploadUserPictureApi(picture)
      setUser({ ...user, userPicture })
    }
  }

  return (
    <div className="App">
      <div className='flex'>

        <div className='bg-azul-escuro w-1/4 flex flex-col relative'>
          <div className='flex justify-center pt-4 pb-4 absolute self-center'>
            <img className='w-60' src={ImgLogoDois} />
          </div>
          <div className='justify-center items-center flex flex-col content-center mt-auto mb-auto'>
            <div className='mx-auto justify-center items-center flex flex-col content-center pb-3'>
              <img className='w-9/12' src={ImgProduto} />
            </div>
            <div>
              <button type="button" onClick={navigateToHistorico} className='bg-rosa-escuro rounded-xl mb-6 pl-4 pr-4 pt-2 pb-2 drop-shadow-md font-medium text-cinza-claro text-base'>Meu chat</button>
            </div>
          </div>
        </div>

        <div className='bg-branco-fundo w-3/4 pt-4 pb-2 pl-14 pr-14'>
          <div className='flex place-content-end'>

            <div className='flex flex-col gap-2 items-start'>
              <h3 className='text-black text-base font-semibold grid  content-center'>Login: {user.name}</h3>
              <button onClick={logout}>Logout</button>
            </div>

            <input
              type="file"
              accept="image/jpeg"
              id="select-picture"
              className="hidden"
              onChange={onPictureSelect}
            />
            <label htmlFor="select-picture" className={`cursor-pointer ${!user.isAuthenticated ? 'hidden' : ''}`} >
              <img src={user.userPicture
                ? `http://localhost:8080/${user.userPicture}`
                : ImgAvatar} alt="Usuario" className='w-24 pt-2 pb-4 pl-4 pr-4 cursor-pointer' />
            </label>

          </div>

          <div className='bg-cinzinha drop-shadow-1xl  rounded-2xl'>
            <div className='bg-cinza-claro rounded-2xl drop-shadow-lg flex mb-2 justify-between items-center pr-4 '>
              <div className='flex items-center'>
                <img className='w-24 pt-2 pb-2 pl-4 pr-4 ' src={ImgLivia} />
                <h3 className='text-black text-xl uppercase font-extralight'>Histórico de atendimentos</h3>
              </div>
              <div>
                <form className='flex items-center gap-3'>
                  <label className='text-rosa-escuro' htmlFor="barraPesquisa"><FaSearch /></label>
                  <input onChange={(event) => buscaProtocolo(event.target.value)} className='bg-cinza-claro rounded-2xl outline-azul-escuro outline focus-visible:outline-azul-escuro outline-1 items-center pl-4 h-8 ' type="text" id="barraPesquisa" placeholder="Pesquise um protocolo: "></input>

                </form>
              </div>
            </div>

            <div className='h-96 flex pt-4 pb-4'>
              <div className='w-2/5 text-start pl-6 pr-6 border-r-4'>
                <h3 className='text-black text-lg font-semibold'>Protocolos:</h3>
                <p className=' text-black text-base pb-2'>Ordenar por:</p>
                <select className='bg-cinza-claro' onChange={(event) => ordenarPorCreatedAt(event.target.value)} >
                  <option value="asc" selected>Mais recente</option>
                  <option value="desc">Mais antigo</option>
                </select>
                {protocolos &&
                  protocolos.map((data: any) => {
                    return (
                      <div className='flex flex-col'>
                        <div className='pt-2 text-black text-base hover:text-azul-escuro' onClick={() => carregarHistoricoDeConversa(data.id)}>
                          <div>
                            <div>{data.nomeProtocolo}</div>
                          </div>
                        </div>
                      </div>

                    )
                  })
                }
                <div className='flex pt-4 justify-between'>
                  <button className='flex items-center text-black text-base hover:text-azul-escuro disabled:hover:text-gray-300' onClick={previousPage} disabled={componentesPaginacao.offset === 0 ? true : false}>
                    <AiOutlineArrowLeft />
                    Anterior
                  </button>
                  <button className='flex items-center text-black text-base hover:text-azul-escuro disabled:hover:text-gray-300' onClick={nextPage} disabled={componentesPaginacao.offset + componentesPaginacao.limit <= numeroDeProtocolos ? false : true}>
                    Próximo
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>

              <div className='w-3/5 overflow-y-auto'>
                {
                  historico.length !== 0 &&
                  historico.map((mensagenHistorico: any, idx) => {
                    return <>
                      <div>
                        <p className={'text-end bg-azul-claro rounded-xl w-3/4 ml-auto mr-6 pr-2 pb-1 pt-1 mb-1 mt-1'} key={idx}>
                          {mensagenHistorico.mensagemCliente}
                        </p>
                        <p className={'text-start bg-rosa-claro rounded-xl w-3/4 mr-auto ml-6 pl-2 pb-1 pt-1 mb-1 mt-1'} key={`mensagem_bot_${idx}`}>
                          {mensagenHistorico.mensagemAutomatica}
                        </p>
                      </div>
                    </>
                  })
                }
              </div>

            </div>


          </div>

          <div className='h-40'></div>

        </div>

      </div >
    </div >
  );
}

export default Historico;
