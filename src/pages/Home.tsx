import IconNewLineLink from "../components/IconNewLineLink";
//<NewLineLink className="FullWidth" path="/links" text="LINKS"/>

function HomePage() {
    return(
        <div className="TextCenter TextContent">
            <h2>
                Welcome
            </h2>
            <IconNewLineLink path="/about" text="ABOUT" icon={"\uf4ff"}/>
            <IconNewLineLink path="/contact" text="CONTACT" icon={"\udb81\udecb"}/>
            <IconNewLineLink path="/pgp" text="PGP" icon={"\udb85\udd74"}/>
        </div>
    );    
}

export default HomePage;