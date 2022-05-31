import { Link } from "react-router-dom";
function Contact() {
    return (
        <>
            <main>
                <h2>Contact</h2>
                <nav className="page-nav">
                    <a href="mailto:zackmorgenthaler@gmail.com" >Email</a>
                    <a href="tel:+15072511772">1(507)251-1772</a>
                    <a href="https://www.linkedin.com/in/zackmorgenthaler/">LinkedIn</a>
                </nav>
            </main>
        </>
    );
}

export default Contact;