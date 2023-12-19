'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Login() {

    const [selectedRole, setSelectedRole] = useState('ERROR');
    const router = useRouter();

    const handleRoleChange = (event) => {
        console.log("cambios");
        setSelectedRole(event.target.value); // Actualizar el estado cuando cambia la opción seleccionada
      };

    const handleSubmit = () => {
      console.log(selectedRole);
      //event.preventDefault();
      alert("Entro en la llamada");
      switch (selectedRole) {
        case 'USER':
          alert("Entro en el ususario");
          router.push('/usuarioRegistrado');
          break;
        case 'ADMIN':
          router.push('/admin');
          break;
        case 'COMERCIO':
          router.push('/comercios');
          break;
        default:
          alert("Seleccione un tipo de usuario")
          break;
      }
    };


    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>
            <select id="countries" value={selectedRole} onChange={handleRoleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose option</option>
            <option value="USER">Usuario</option>
            <option value="ADMIN">Admin</option>
            <option value="COMERCIO">Comercio</option>
            </select>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>Sign in</button>
          </div>
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Annonimus</button>
          </div>
        </form>
      </div>
    </div>
    )
}