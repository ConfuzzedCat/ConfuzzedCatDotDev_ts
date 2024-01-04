import IconInlineLink from "./IconInlineLink";

function Footer() {
    let year = new Date().getFullYear();
    return(
        <div className="Footer FullWidth TextCenter">
            <IconInlineLink path="https://github.com/ConfuzzedCat" text="Github" icon={"\udb80\udea4"}/>
            <IconInlineLink path="https://twitch.tv/ConfuzzedCat" text="Twitch" icon={"\udb81\udd43"}/>
            <IconInlineLink path="https://twitter.com/ConfuzzedCat" text={"\uD835\uDD4F/Twitter"} icon={"\udb81\udd44"}/>
            <IconInlineLink path="https://bsky.app/profile/confuzzedcat.dk" text="Bluesky" icon={"\ue28e"}/>
            <IconInlineLink path="https://myanimelist.net/profile/ConfuzzedCat" text="MAL" icon={"\uf02d"}/>
            {
                //<IconInlineLink path="/pgp" text="PGP" icon={"\uf43d"}/>
            }
            
            <p>
                ConfuzzedCat {"\udb81\udde6"} {year}
            </p>
        </div>
    );
}

export default Footer;