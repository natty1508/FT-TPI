export default function MenuLateral({ esAdmin }) {
    return (
        <nav className="menu-lateral">
            <h3>Santo bocado menu</h3>
            <a href="#">Menu</a>
            <a href="#">Bebidas</a>
            <a href="#">Tu pedido</a>

            {esAdmin && <a href="#">Local pedidos</a>}
            {esAdmin && <a href="#">Nuevos ingresos</a>}
        </nav>
    )
}