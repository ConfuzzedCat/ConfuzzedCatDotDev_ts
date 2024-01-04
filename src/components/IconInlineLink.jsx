function IconInlineLink({path, text, icon}) {
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
        <>
            <a className="RoutesLinks OneCharSpacer JetBrainsMonoBold" href={path}> {icon} {text}</a>
        </>
    );
}

export default IconInlineLink;