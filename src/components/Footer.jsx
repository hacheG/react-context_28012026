export default function Footer({theme, languaje}){
    return(
        <footer className={theme}>
            <h4>{languaje.footerTitle}</h4>
        </footer>
    );
}