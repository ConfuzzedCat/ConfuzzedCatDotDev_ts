import NewLineLink from "../components/NewLineLink";
function HomePage() {
    return(
        <div className="TextCenter TextContent">
            <h2>
                Welcome
            </h2>
            <NewLineLink className="FullWidth" path="/about" text="ABOUT"/>
            {
                //<NewLineLink className="FullWidth" path="/links" text="LINKS"/>
            }
            <NewLineLink className="FullWidth" path="/contact" text="CONTACT"/>
        </div>
    );    
}

export default HomePage;