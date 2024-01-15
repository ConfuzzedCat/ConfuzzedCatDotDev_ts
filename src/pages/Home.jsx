import IconNewLineLink from "../components/IconNewLineLink";
function HomePage() {
    return(
        <div className="TextCenter TextContent">
            <h2>
                Welcome
            </h2>
            <IconNewLineLink className="FullWidth" path="/about" text="ABOUT" icon={"\uf4ff"}/>
            {
                //<NewLineLink className="FullWidth" path="/links" text="LINKS"/>
            }
            <IconNewLineLink className="FullWidth" path="/contact" text="CONTACT" icon={"\udb81\udecb"}/>
            <IconNewLineLink className="FullWidth" path="/pgp" text="PGP" icon={"\udb85\udd74"}/>
        </div>
    );    
}

export default HomePage;