import PedidoCard from "../components/PedidoCard"

export default function LocalPedidos() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Pedidos de hoy</h1>

            <PedidoCard
                numero={2}
                cliente="Lucia Gomez"
                hora="20:41"
                telefono="2901 45-1122"
                direccion="Maipu 450"
                estado="Pendiente"
                productos="1 x Doble Smash Cheddar & Bacon"
                total={20000}
            />

            <PedidoCard
                numero={1}
                cliente="Martin Ruiz"
                hora="20:12"
                telefono="2901 56-7788"
                direccion="Kuanip 1120"
                estado="En preparacion"
                productos="1 x Doble Smash Cheddar & Bacon + 1 x Coca cola en lata"
                total={25000}
            />
        </div>
    )
}