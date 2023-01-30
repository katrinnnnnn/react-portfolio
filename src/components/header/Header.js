import "./styleHeader.css";

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hello , I'm <em>Ekaterina</em></strong><br/>
                    a frontend developer
                </h1>
            </div>
        </header>
     );
}
 
export default Header;