import NewLineLink from "./NewLineLink";
import { FC } from 'react';

interface IconNewLineLinkProps {
    path?: string;
    text?: string;
    icon?: string;
    classes?: string;
    newTab?: boolean;
}

const IconNewLineLink: FC<IconNewLineLinkProps> = ({path, text, icon, classes, newTab}) => {
    if(!icon){
        icon = "\udb84\udc36";
    }
    classes = "OneCharSpacer " + classes;
    return (
        <div>
            <NewLineLink classes={classes} path={path} text={` ${icon} ${text}`} newTab={newTab}/>
        </div>
    );
}

export default IconNewLineLink;