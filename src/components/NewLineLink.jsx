function NewLineLink({path, text}) {
    if(!path){
        path = "/"
    }
    if(!text){
        text = "MissingText";
    }
    
    return (
        <div>
            <a className="RoutesLinks" href={path}>{text}</a>
        </div>
    );
}

export default NewLineLink;