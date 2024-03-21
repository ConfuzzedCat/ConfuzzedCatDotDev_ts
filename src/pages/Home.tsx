import IconNewLineLink from "../components/IconNewLineLink";
//<NewLineLink className="FullWidth" path="/links" text="LINKS"/>

function HomePage() {
    return(
        <div className="TextCenter TextContent">
            <h2>
                Welcome
            </h2>
            <IconNewLineLink classes="FullWidth" path="/about" text="ABOUT" icon={"\uf4ff"}/>
            <IconNewLineLink classes="FullWidth" path="/contact" text="CONTACT" icon={"\udb81\udecb"}/>
            <IconNewLineLink classes="FullWidth" path="/pgp" text="PGP" icon={"\udb85\udd74"}/>
        </div>
    );    
}

export default HomePage;