import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logo from '../../assets/user.png';

export default function Register() {
    function handleRegister(e) {
        e.preventDefault();
        
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img className="logo" src={logo} alt="logo" />

                    <h1>Cadastro</h1>
                    <p>faça seu cadastro, entre na plataforma e ajude pessoas</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Faça login
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da Ong" />
                    <input type="email" placeholder="E-Mail" />
                    <input placeholder="whatsapp" />

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}