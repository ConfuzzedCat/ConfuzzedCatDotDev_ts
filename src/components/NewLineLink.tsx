import { FC } from 'react';

interface NewLineLinkProps {
    path?: string;
    text?: string;
    classes?: string;
    newTab?: boolean;
}

const NewLineLink: FC<NewLineLinkProps> = ({path, text, classes, newTab}) => {
    if(!path){
        path = "/"
    }
    if(!text){
        text = "MissingText";
    }
    classes = "RoutesLinks JetBrainsMonoBold " + classes;

    return (
        <div>
            <a className={classes} href={path} {...(newTab && {target:"_blank"})}>{text}</a>
        </div>
    );
}

export default NewLineLink;