// src/Connexion.js

import React, { useState } from 'react';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pour l'instant, nous allons simplement afficher les données dans la console
    console.log('Email:', email);
    console.log('Mot de passe:', mdp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Mot de passe:</label>
        <input
          type="password"
          value={mdp}
          onChange={(e) => setMdp(e.target.value)}
          required
        />
        <a href='https://ih1.redbubble.net/image.5231454714.7974/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg' target='blank'>Mot de passe oublié ?</a>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Connexion;
