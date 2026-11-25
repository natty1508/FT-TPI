import bannerImg from "../assets/banner.png"

export default function Banner() {
    return (
        <div className="banner">
            <img src={bannerImg} alt="Hamburguesas que se piden dos veces" />
        </div>
    )
}