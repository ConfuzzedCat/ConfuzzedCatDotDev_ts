import InlineLink from "./InlineLink";
import '../App.css'
import { FC } from "react";

interface IconInlineLinkProps {
    path?: string;
    text?: string;
    icon?: string;
    classes?: string;
    newTab?: boolean;
}
const IconInlineLink: FC<IconInlineLinkProps> = ({path, text, icon, classes, newTab}) => {
    if(!icon){
        icon = "\udb84\udc36";
    }
    classes = "OneCharSpacer" + classes;
    return (
        <>
            <InlineLink classes={classes} path={path} text={`${icon} ${text}`} newTab={newTab}/>
        </>
    );
}

export default IconInlineLink;