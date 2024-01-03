function IconNewLineLink({path, text, icon}) {
    if(!path){
        path = "/"
    }
    if(!text){
        text = "MissingText";
    }
    if(!icon){
        icon = "\udb84\udc36";
    }
    return (
        <div>
            <a className="RoutesLinks OneCharSpacer" href={path}> {icon} {text}</a>
        </div>
    );
}

export default IconNewLineLink;