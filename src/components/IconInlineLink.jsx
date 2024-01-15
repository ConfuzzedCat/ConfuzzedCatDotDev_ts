import InlineLink from "./InlineLink";
import '../App.css'


function IconInlineLink({path, text, icon, newTab}) {
    if(!icon){
        icon = "\udb84\udc36";
    }
    
    return (
        <>
            <InlineLink path={path} text={`${icon} ${text}`} newTab={newTab} styleClass={"OneCharSpacer"}/>
        </>
    );
}

export default IconInlineLink;