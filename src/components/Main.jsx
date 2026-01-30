export default function Main({theme, languaje}){
    return(
        <main className={theme}>
            <p>{languaje.mainWelcome }</p>
            <p>{languaje.mainHello}</p>
            <p>{languaje.mainContext}</p>
        </main>
    );
}