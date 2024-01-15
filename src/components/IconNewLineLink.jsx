import NewLineLink from "./NewLineLink";

function IconNewLineLink({path, text, icon, newTab}) {
    if(!icon){
        icon = "\udb84\udc36";
    }
    return (
        <div>
            <NewLineLink className="OneCharSpacer" path={path} text={` ${icon} ${text}`} newTab={newTab}/>
        </div>
    );
}

export default IconNewLineLink;