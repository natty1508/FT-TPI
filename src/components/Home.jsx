import Banner from "./Banner"
import ProductCard from "./ProductCard"
import smash from "../assets/smash.jpg"
import monster from "../assets/monster.jpg"
import Filtros from "./Filtros" 
import MenuLateral from "./MenuLateral"

export default function Home() {
    return (
        <div style={{ marginLeft: "200px" }}>
            <MenuLateral esAdmin={true} />
            <Banner />
            <Filtros />

            <ProductCard imagen={smash} nombre="Doble Smash Cheddar & Bacon" detalles="Incluye papas y coca cola" precio={20000} />
            <ProductCard imagen={monster} nombre="Triple Monster BBQ & Egg" detalles="Incluye papas con cheddar, bacon y una coca cola" precio={30000} />
        </div>
    )
}