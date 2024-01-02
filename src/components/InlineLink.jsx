function InlineLink({path, text}) {
    if(!path){
        path = "/"
    }
    if(!text){
        text = "MissingText";
    }
    return (
        <>
            <a className="RoutesLinks" href={path}>{text}</a>
        </>
    );
}

export default InlineLink;