import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p className="copyright">&copy; Copyright {currentYear}</p>
            </div>
        </footer>
    );
}

export default Footer;
