import IconInlineLink from "./IconInlineLink";

function Footer() {
    return(
        <div className="Footer JetBrainMono FullWidth FullMargin TextCenter">
            <IconInlineLink path="https://github.com/ConfuzzedCat" text="Github" icon={"\udb80\udea4"}/>
            <IconInlineLink path="https://twitch.tv/ConfuzzedCat" text="Twitch" icon={"\udb81\udd43"}/>
        </div>
    );
}

export default Footer;