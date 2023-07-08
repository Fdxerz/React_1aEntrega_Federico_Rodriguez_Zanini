import CartWidget from "./CarTWidgets"

const NavBar = () => {
    return(
        <>
            <nav>
                <div>          
                    <h3>Ecommerce</h3>
                    <button>Semillas</button>
                    <button>Verduras</button>
                    <button>Frutas</button>
                    </div>
                    <CartWidget/>
            </nav>
        </>
    )
}

export default NavBar