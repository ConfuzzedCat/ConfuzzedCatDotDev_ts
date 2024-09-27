import IconNewLineLink from "../components/IconNewLineLink";
import IconInlineLink from "../components/IconInlineLink";
import InlineLink from "../components/InlineLink";

function Contact() {
    return (
        <div className="TextCenter FullWidth TextContent">
            <p>You can come in contact with me on <InlineLink path="https://getsession.org/" text="Session" newTab={true}/></p>
            <IconInlineLink path="/images/session_id.jpg" 
                text="0592ebf96ae21dbbb2beb1dc3493e3d15031ad16eb8d5024ebbffaffc65562505d" 
                icon={"\udb83\udc21"} 
                newTab={true}/>
            <p>or you can write a dm to me on any of these platforms.</p>
            <IconNewLineLink path="https://twitch.tv/ConfuzzedCat" text="Twitch" icon={"\udb81\udd43"} newTab={true}/>
            <IconNewLineLink path="https://bsky.app/profile/confuzzedcat.dev" text="Bluesky" icon={"\ue28e"} newTab={true}/>
        </div>
    );
}

export default Contact;