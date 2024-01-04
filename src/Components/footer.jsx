import styles from "../Styles/Footer.module.css"
import { FaFacebookSquare } from "react-icons/fa";


function Footer() {
    return (
        <div>
            <div className={styles.container}>
                <ul class="et-social-icons">
                    <a href="https:www.facebook.com/operativacomercial" className={styles.redessociales}> <FaFacebookSquare /> </a>
                </ul>
                <p id="footer-info">Diseñada por  <a> Operativa Comercial SRL </a> | <a > cjmbutron</a></p> </div>
        </div>
    )
}

export default Footer