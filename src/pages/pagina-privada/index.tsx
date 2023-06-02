import ProtectedRoute from "@/app/components/protected-route/protected-route"


export const PaginaPrivada = () => {
    return (
        <ProtectedRoute>
            <div>
                <h1>Pagina Privada</h1>
            </div>
        </ProtectedRoute>

    )
}

export default PaginaPrivada;
