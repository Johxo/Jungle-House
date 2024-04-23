function Cart () {
    const CartContent = ["Monstera ", "Lierre ", "Bouquet de fleurs"]
    const PrixMonstera = 8
    const PrixLierre = 10
    const PrixBouquet = 15
    return ( <div> 
            <h2>Panier</h2>
            <ul> 
                <li> {CartContent[0]}  {PrixMonstera}€</li>
                <li> {CartContent[1]} {PrixLierre} €</li>
                <li> {CartContent[2]} {PrixBouquet} € </li>
            </ul>
                Votre total est de {PrixMonstera + PrixLierre + PrixBouquet} €
            </div>    
        )
}

export default Cart