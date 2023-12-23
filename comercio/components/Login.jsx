"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.css';

export default function Login() {
  const [selectedRole, setSelectedRole] = useState('');
  const router = useRouter();

  const handleRoleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedRole(selectedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedRole);

    switch (selectedRole) {
      case 'USER':
        router.push('/app/usuarioRegistrado');
        break;
      case 'ADMIN':
        router.push('/app/admin');
        break;
      default:
        alert('Seleccione un tipo de usuario');
        break;
    }
  };

  const handleAnonymousSubmit = () => {
    alert('Anonymous button clicked');
  };

  const handleCommerceSubmit = () => {
    alert('Enter as commerce button clicked');
  };

  return (
    <div>
      <div className="mx-auto mb-4">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Select Role
            </label>
            <select id="role" className="form-select" value={selectedRole} onChange={handleRoleChange}>
              <option value="" disabled>
                Choose option
              </option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>

            <p>Selected Role: {selectedRole}</p>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Sign in
            </button>
          </div>

          <div className="mb-3">
            <button type="button" className="btn btn-primary w-100" onClick={handleAnonymousSubmit}>
              Anonymous
            </button>
          </div>

          <div className="mb-3">
            <label htmlFor="commerceId" className="form-label">
              ID comercio
            </label>
            <input type="text" className="form-control" id="commerceId" placeholder="Enter commerce ID" />
          </div>

          <div>
            {/* Agrega la lógica necesaria para el botón "Enter as commerce" */}
            <button type="button" onClick={handleCommerceSubmit} className="btn btn-primary w-100">
              Enter as commerce
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
