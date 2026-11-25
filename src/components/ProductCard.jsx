export default function ProductCard({ imagen,nombre, detalles, precio }) {
    return (
        <div className="card">
            <img src={imagen} alt={nombre} />
            <div>
                <h3>{nombre}</h3>
                <p>{detalles}</p>
                <b>${precio.toLocaleString("es-AR")}</b>
            </div>
        </div>
    )
}