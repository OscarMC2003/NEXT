"use client"
import { useState } from 'react';

export default function RegistroUsuario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="d-flex min-vh-100 flex-column justify-content-center px-4 py-5 lg:px-5">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold leading-5 text-gray-900">Registrar cuenta</h2>
        </div>

        <div className="mb-10 mx-auto max-w-md">
          <form className="space-y-4" action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required className="form-control" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="form-control" />
            </div>

            <div>
              <button type="submit" className="btn btn-primary w-full py-2 text-sm font-semibold">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
