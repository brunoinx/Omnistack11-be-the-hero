import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 

import './styles.css';
import api from '../../services/api';

import LogoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  //função para cadastrar um novo caso
  async function handleIncidents(e) {
    e.preventDefault();

    const data = {
      title, description, value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
       <img src={LogoImg} alt="Be The Hero"/>

       <h1>Cadastrar novo caso</h1>
       <p>Descreva o caso detalhadamente para encontrar um herói que resolva o seu caso.</p>

       <Link className="back-link" to="/profile">
           <FiArrowLeft size={18} color="#E02041" />
           Voltar para o Perfil
         </Link>
      </section>

      <form onSubmit={handleIncidents}>
        <input 
          placeholder="Título do caso"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea 
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input 
          placeholder="Valor em Reais"
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <div className="btn-group">
          <button className="btn-can" type="submit">Cancelar</button>
          <button className="btn-cad" type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
  );
}
