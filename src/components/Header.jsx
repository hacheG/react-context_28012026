export default function Header({theme, handleTheme, languaje, handleLanguaje}){
    return(
        <header className={theme}>
            {/* {console.log("en header: ",languaje.headerTitle )} */}
            <h2>{languaje.headerTitle}</h2>
            <h3>mi cabecera</h3>
            <select name="languaje" onChange={handleLanguaje}>
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
            <input type="radio" name="theme" id="light" onClick={handleTheme} value="light" />
            <label htmlFor="light">{languaje.headerLight}</label>

            <input type="radio" name="theme" id="dark" onClick={handleTheme} value="dark" />
            <label htmlFor="dark">{languaje.headerDark}</label>

            <button>{languaje.buttonLogin}{languaje.buttonLogout}</button>
            
        </header>
    );
}