import IconInlineLink from "./IconInlineLink";
import InlineLink from "./InlineLink";
import '../App.css'

function Footer() {
    let year = new Date().getFullYear();
    return(
        <div className="Footer FullWidth TextCenter">
            <IconInlineLink classes="OneCharSpacer" path="https://github.com/ConfuzzedCat" text="Github" icon={"\udb80\udea4"} newTab={true}/>
            <IconInlineLink classes="OneCharSpacer" path="https://twitch.tv/ConfuzzedCat" text="Twitch" icon={"\udb81\udd43"} newTab={true}/>
            <IconInlineLink path="https://twitter.com/ConfuzzedCat" text={"\uD835\uDD4F/Twitter"} icon={"\udb81\udd44"} newTab={true}/>
            <IconInlineLink path="https://bsky.app/profile/confuzzedcat.dk" text="Bluesky" icon={"\ue28e"} newTab={true}/>
            <IconInlineLink path="https://mastodon.social/@ConfuzzedCat" text="Mastodon" icon={"\udb82\uded1"} newTab={true}/>
            <IconInlineLink path="https://myanimelist.net/profile/ConfuzzedCat" text="MAL" icon={"\uf02d"} newTab={true}/>            
            <p>
                <InlineLink path="/LICENSE.txt" text={"ConfuzzedCat \udb81\udde6 " + year} newTab={true}/>                
            </p>
        </div>
    );
}

export default Footer;