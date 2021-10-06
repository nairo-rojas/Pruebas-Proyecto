import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [Productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear Nuevo producto');
  const [colorBoton, setColorBoton] = useState('indigo');

  useEffect(() => {
    const obtenerProductos = async () => {
      const options = { method: 'GET', url: 'https://vast-waters-45728.herokuapp.com/producto/' };
      await axios
        .request(options)
        .then(function (response) {
          setProductos(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    //obtener lista de productos desde el backend
    if (mostrarTabla) {
      obtenerProductos();
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear Nuevo producto');
      setColorBoton('indigo');
    } else {
      setTextoBoton('Mostrar Todos los productos');
      setColorBoton('green');
    }
  }, [mostrarTabla]);
  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-extrabold text-gray-900'>
          Página de administración de productos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaProductos listaProductos={Productos} />
      ) : (
        <FormularioCreacionProductos
          setMostrarTabla={setMostrarTabla}
          listaProductos={Productos}
          setProductos={setProductos}
        />
      )}
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  );
};

const TablaProductos = ({ listaProductos }) => {
  
  useEffect(() => {
    console.log('Este es el listado de Productos en el componente de tabla', listaProductos);
  }, [listaProductos]);
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del producto</th>
            <th>Marca del producto</th>
            <th>Cantidad del producto</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((Producto) => {
            return (
              <tr>
                <td>{Producto.name}</td>
                <td>{Producto.brand}</td>
                <td>{Producto.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionProductos = ({ setMostrarTabla, listaProductos, setProductos }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    const options = {
      method: 'POST',
      url: 'https://vast-waters-45728.herokuapp.com/producto/create',
      headers: { 'Content-Type': 'application/json' },
      data: { name: nuevoProducto.name, brand: nuevoProducto.brand, quantity: nuevoProducto.quantity },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Producto agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un producto');
      });

    setMostrarTabla(true);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo producto</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor='name'>
          Nombre del producto
          <input
            name='name'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='text'
            placeholder='Mozarela'
            required
          />
        </label>
        <label className='flex flex-col' htmlFor='marca'>
          Marca del producto
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='brand'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Tajado</option>
            <option>Entero</option>
            <option>Al Vacío</option>
            <option>Normal</option>
           </select>
        </label>
        <label className='flex flex-col' htmlFor='quantity'>
          Cantidad del producto
          <input
            name='quantity'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={1}
            max={1000}
            placeholder='5'
            required
          />
        </label>

        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default Productos;
