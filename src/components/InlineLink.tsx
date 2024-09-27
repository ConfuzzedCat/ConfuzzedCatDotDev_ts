import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { validURL } from '../utils/url';

interface InlineLinkProps {
    path?: string;
    text?: string;
    newTab?: boolean;
    classes?: string;
}

const InlineLink: FC<InlineLinkProps> = ({path, text, newTab, classes}) => {
    const navigate = useNavigate();
    if(!path){
        path = "/"
    }
    if(!text){
        text = "MissingText";
    }
    if(!newTab){
        newTab = false;
    }
    if(!classes){
        classes = "";
    }
    let isUrl = validURL(path) || newTab;
    const ClickHandler = () => {
      navigate(path);
    };

    classes = "RoutesLinks JetBrainsMonoBold " + classes;
    return (
        <>
            {isUrl && <a className={classes} href={path} {...(newTab && {target:"_blank"})}>{text}</a>}
            {!isUrl && <a className={classes} onClick={ClickHandler} {...(newTab && {target:"_blank"})}>{text}</a>}
        </>
    );
}

export default InlineLink;