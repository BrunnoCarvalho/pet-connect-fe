import React, { useState } from 'react';
import './passwordRecoveryPage.css';
import { usePasswordRecovery } from '../model/usePasswordRecovery';

export default function PasswordRecoveryForm() {
  const [email, setEmail] = useState('');
  const { sendRecovery, loading, success, error } = usePasswordRecovery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendRecovery(email);
  };

  return (
    <div className="password-recovery-bg">
      <div className="password-recovery-container">
        <h1>Redefinição de senha!</h1>
        <p>Informe um email e enviaremos um link para recuperação de sua senha</p>

        {success ? (
          <div className="success-message">Se o email estiver cadastrado, você receberá um link para redefinir sua senha.</div>
        ) : (
          <form onSubmit={handleSubmit} className="password-recovery-form">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</button>
          </form>
        )}
      </div>
    </div>
  );
}
