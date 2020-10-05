import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

import logo from '../../assets/user.png'

export default function NewIncident() {
    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img className="logo" src={logo} alt="logo" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para o home
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}