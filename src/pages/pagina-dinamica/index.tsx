import Link from "next/link";

export const DayTwo = () => {
    return(
        <div>
            <h1>Pagina Dinamica</h1>
            <p>
                Listado de productos
            </p>
            <ul>
                <li>
                    <Link href="pagina-dinamica/1">Producto 1</Link>
                </li>
                <li>
                    <Link href="pagina-dinamica/2">Producto 2</Link>
                </li>
                <li>
                    <Link href="pagina-dinamica/3">Producto 3</Link>
                </li>
            </ul>
        </div>
    )
}

export default DayTwo;