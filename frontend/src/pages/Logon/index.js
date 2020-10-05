import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import './styles.css'

import heroesImg from '../../assets/pleasespace.png'
import logo from '../../assets/user.png'

export default function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
        <img src={logo} alt="logo"/>

<form>
    <h1>Faça seu logon</h1>

    <input type="text" placeholder="Sua ID"/>
    <button className="button" type="submit">Entrar</button>
    <a href="/register">
        <FiLogIn size={16} color="#e02041" />
        Não tenho cadastro
    </a>
</form>

            </section>
            <img className="fundoImg" src={heroesImg} alt="Heroes"/>
        </div>
    );
}