import { nanoid } from 'nanoid';
import React, { useState, useEffect, useRef } from 'react'
import { crearVenta } from 'utils/api';
import { obtenerProducto } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';

const Ventas = () => {
    const form = useRef(null);
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchVendedores = async () => {
            await obtenerUsuarios(
                (response) => {
                    setVendedores(response.data);
                },
                (error) => {
                    console.error(error);
                }
            );
        };

        const fetchProductos = async () => {
            await obtenerProducto(
                (response) => {
                    setProductos(response.data)
                },
                (error) => {
                    console.error(error);
                });
        };

        fetchProductos();
        fetchVendedores();
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const formData = {};
        fd.forEach((value, key) => {
            formData[key] = value;
        });
        
        const infoConsolidada = {
            valor: formData.valor,
            vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
            producto: productos.filter((v) => v._id === formData.producto)[0],
        }
        console.log(infoConsolidada);

        await crearVenta(infoConsolidada,
            (response) => {
                console.log(response);
            },
            (error) => {
                console.error(error);
            }
        )
    };

    return (
        <div className='flex h-full w-full overflow-scroll items-center justify-center'>
            <form ref={form} onSubmit={submitForm} className="flex flex-col">
                <h1 className='text-3xl font-extrabold text-green-900 my-3'>Crear una nueva Venta</h1>
                <label className="flex flex-col" htmlFor='vendedor'>
                    <span className='text-2xl text-gray-900'>Vendedor</span>
                    <select name="vendedor" className='p-2' defaultValue='' required>
                        <option disabled value=''>
                            Seleccione un Vendedor
                        </option>
                        {vendedores.map((el) => {
                            return( 
                            <option 
                            key={nanoid()}
                            value={el._id}
                            >{`${el.name} ${el.lastname}`}</option>)
                        })}

                    </select>
                </label>
                <label className="flex flex-col" htmlFor='producto'>
                    <span className='text-2xl text-gray-900'>Producto</span>
                    <select name="producto" className='p-2' defaultValue=''required>
                        <option disabled value=''>
                            Seleccione un Producto
                        </option>
                        {productos.map((el) => {
                            return (
                            <option 
                            key={nanoid()}
                            value={el._id}
                            >{`${el.name} ${el.type} ${el.amount}`}</option>
                        );
                        })};
                    </select>
                </label>
                <label className="flex flex-col" htmlFor="valor">
                    <span className='text-2xl text-gray-900'>Valor Total Venta</span>
                    <input
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type="number"
                        name="valor" />
                </label>
                <button
                    type='submit'
                    className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:border-green-600 text-white'
                >
                    Crear Venta
                </button>
            </form>
        </div>
    )
}

export default Ventas
