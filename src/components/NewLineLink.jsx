function NewLineLink({path, text, newTab}) {
    if(!path){
        path = "/"
    }
    if(!text){
        text = "MissingText";
    }
    
    return (
        <div>
            <a className="RoutesLinks JetBrainsMonoBold" href={path} {...(newTab && {target:"_blank"})}>{text}</a>
        </div>
    );
}

export default NewLineLink;