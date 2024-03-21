import { FC } from 'react';

interface InlineLinkProps {
    path?: string;
    text?: string;
    newTab?: boolean;
    classes?: string;
}

const InlineLink: FC<InlineLinkProps> = ({path, text, newTab, classes}) => {
    if(!path){
        path = "/"
    }
    if(!text){
        text = "MissingText";
    }
    classes = "RoutesLinks JetBrainsMonoBold " + classes;
    return (
        <>
            <a className={classes} href={path} {...(newTab && {target:"_blank"})}>{text}</a>
        </>
    );
}

export default InlineLink;