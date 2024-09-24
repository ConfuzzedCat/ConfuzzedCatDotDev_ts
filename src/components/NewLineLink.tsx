import { FC } from 'react';
import { validURL } from '../utils/url';
import { useNavigate } from 'react-router-dom';

interface NewLineLinkProps {
    path?: string;
    text?: string;
    classes?: string;
    newTab?: boolean;
}

const NewLineLink: FC<NewLineLinkProps> = ({path, text, classes, newTab}) => {
    const navigate = useNavigate();
    if(!path){
        path = "/"
    }
    if(!text){
        text = "MissingText";
    }
    if(!classes){
        classes = "";
    }
    let isUrl = validURL(path);
    const ClickHandler = () => {
      navigate(path);
    };
    classes = "RoutesLinks JetBrainsMonoBold " + classes;

    return (
        <div>
            {isUrl && <a className={classes} href={path} {...(newTab && {target:"_blank"})}>{text}</a>}
            {!isUrl && <a className={classes} onClick={ClickHandler} {...(newTab && {target:"_blank"})}>{text}</a>}
        </div>
    );
}

export default NewLineLink;