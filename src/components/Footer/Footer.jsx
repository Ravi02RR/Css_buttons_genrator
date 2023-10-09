import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            © {currentYear} RaviRanjan. All Rights Reserved.
        </div>
    );
}

export default Footer;
