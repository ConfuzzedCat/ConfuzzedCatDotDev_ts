import { useEffect, useState } from "react";
import InlineLink from "./InlineLink";

const URL = "https://decapi.me/twitch/uptime";

async function api(path: string): Promise<String> {
  const response = await fetch(`${URL}/${path}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.text();
}

function IsLive() {
  let [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      let content = await api("confuzzedcat");
      console.log(content);
      setIsLive(content !== "confuzzedcat is offline");
    };
    fetchStatus();
  }, [isLive]);

  return (
    <>
      {isLive && (
        <div className="FullWidth Center CenterChildren">
          <div className="IsLiveContainer">
            <InlineLink text={"Live on Twitch"} path="https://twitch.tv/ConfuzzedCat" newTab={true}/>
          </div>
        </div>
      )}
    </>
  );
}

export default IsLive;
