import { User } from '@auth0/auth0-spa-js';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { obtenerUsuarios, editarUsuario } from 'utils/api';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            await obtenerUsuarios(
                (response) => {
                    console.log("Info usuarios:", response.data)
                    setUsuarios(response.data)
                },
                (err) => {
                    console.log(err);
                }
            );
        };
        fetchUsuarios();
    }, []);

    return (
        <div>Admin Usuarios
            <table className='tabla'>
                <tbody>
                    {usuarios.map(user => {
                        return (
                            <tr key={nanoid}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><RolesUsuario user={user} /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const RolesUsuario = ({ user }) => {
    const [rol, setRol] = useState(user.rol);

    useEffect(() => {
        const editUsuario = async () => {
            await editarUsuario(
                user._id,
                { rol },
                (res) => {
                    console.log(res);
                },
                (err) => {
                   console.error(err);
                }
            )
        }
        if (user.rol !== rol) {
            editUsuario();
        }
    }, [rol, user]);

    return (
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="vendedor">Vendedor</option>
            <option value="Inactivo">Inactivo</option>
        </select>
    )
}
export default Usuarios;
