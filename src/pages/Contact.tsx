import IconNewLineLink from "../components/IconNewLineLink";
import IconInlineLink from "../components/IconInlineLink";

function Contact() {
    return (
        <div className="TextCenter FullWidth TextContent">
            <p>You can come in contact with me on discord, through my server.</p>
            <IconInlineLink path="https://discord.gg/w8ZV3w3qqJ" text="Join the server here!" icon={"\udb81\ude6f"} newTab={true}/>
            <p>Or send me a DM through these servers</p>
            <p><IconInlineLink path="https://discord.gg/a9ttKtkUZ7" text="Streamer.bot Extensions server" icon={"\udb81\ude6f"} newTab={true}/> or <IconInlineLink path="https://discord.gg/dgypY6PftB" text="Streamer.bot server" icon={"\udb81\ude6f"} newTab={true}/></p>
            <p>Otherwise, you can write a dm to me on any of these platforms.</p>
            <IconNewLineLink path="https://twitch.tv/ConfuzzedCat" text="Twitch" icon={"\udb81\udd43"} newTab={true}/>
            <IconInlineLink path="https://twitter.com/ConfuzzedCat" text={"\uD835\uDD4F/Twitter"} icon={"\udb81\udd44"} newTab={true}/>
            <IconNewLineLink path="https://bsky.app/profile/confuzzedcat.dk" text="Bluesky" icon={"\ue28e"} newTab={true}/>
            <IconNewLineLink path="https://mastodon.social/@ConfuzzedCat" text="Mastodon" icon={"\udb82\uded1"} newTab={true}/>
            <p>Or lastly, you can write me a mail on this email.</p>
            <IconNewLineLink path="mailto:confuzzedcat@gmail.com" text="confuzzedcat@gmail.com" icon={"\uf42f"}/>
            <br />
        </div>
    );
}

export default Contact;