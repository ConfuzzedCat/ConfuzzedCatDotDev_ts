function InlineLink({path, text, newTab, styleClass}) {
    if(!path){
        path = "/"
    }
    if(!text){
        text = "MissingText";
    }
    if(!styleClass){
        styleClass = "";
    }
    let cssClasses = "RoutesLinks JetBrainsMonoBold " + styleClass;
    return (
        <>
            <a className={cssClasses} href={path} {...(newTab && {target:"_blank"})}>{text}</a>
        </>
    );
}

export default InlineLink;