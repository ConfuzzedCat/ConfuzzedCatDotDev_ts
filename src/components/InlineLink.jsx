function InlineLink({path, text}) {
    if(!path){
        path = "/"
    }
    if(!text){
        text = "MissingText";
    }
    return (
        <>
            <a className="RoutesLinks JetBrainsMonoBold" href={path}>{text}</a>
        </>
    );
}

export default InlineLink;