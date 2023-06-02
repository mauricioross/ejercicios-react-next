// components/ProtectedRoute.js
import React, { useEffect, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';

export interface ProtectedRouteProps {
    children: ReactNode;
}
const ProtectedRoute = (props:ProtectedRouteProps) => {
    const router = useRouter();
    const [IsValidate, setIsValidate] = useState(false); // Estado para confirmar si el usuario está validado
    useEffect(() => {
        // Validamos si el usuario está autenticado
        const isAuthenticated = false;

        if (!isAuthenticated) {
            router.push('/login'); // Redireccionamos al login
        }else{
            setIsValidate(true); // seteamos el estado de validación
        }
    }, []);
    //Si el estado de validacion es true, mostramos el contenido, ya que sabremos que el usuario esta authenticado
    return <>{IsValidate && props.children}</>;
};

export default ProtectedRoute;
