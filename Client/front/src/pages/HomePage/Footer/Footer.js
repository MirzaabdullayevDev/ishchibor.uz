import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_main">
                    <div className="copy_right">
                        <h4>© 2022. Ishchi Bor</h4>
                    </div>
                    <div className="footer_tutorial">
                        <h4>Пользовательское соглашение</h4>
                        <h4>Политика конфиденциальности</h4>
                    </div>
                    <div className="footer_end">
                        <h4>Разработка - Тимошицкий Денис</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
