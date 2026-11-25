export default function PedidoCard({ numero, cliente, hora, telefono, direccion, estado, productos, total }) {
    return (
        <div className="tarjeta-caja">
            <div className="tarjeta-cajaPequeña">
                <h3>#{numero}. {cliente}</h3>
                <span className="estado">{estado}</span>
            </div>

            <p>{hora} · {telefono}</p>
            <p>{direccion}</p>
            <p>• {productos}</p>

            <b className="pedido-total">${total.toLocaleString("es-AR")}</b>
        </div>
    )
}