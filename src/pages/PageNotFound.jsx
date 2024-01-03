/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import InlineLink from "../components/InlineLink";

function PageNotFound({possibleRoutes}) {
    const loc = useLocation();
    const levenshteinDistance = (s, t) => {
        // https://www.30secondsofcode.org/js/s/levenshtein-distance/
        if (!s.length) return t.length;
        if (!t.length) return s.length;
        const arr = [];
        for (let i = 0; i <= t.length; i++) {
            arr[i] = [i];
            for (let j = 1; j <= s.length; j++) {
                arr[i][j] =
                i === 0
                    ? j
                    : Math.min(
                        arr[i - 1][j] + 1,
                        arr[i][j - 1] + 1,
                        arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
                    );
            }
        }
        return arr[t.length][s.length];
    };
    let skipCal = false;
    let closestPage;
    if(loc.pathname == "key"){
        closestPage = {"dis":0,"path":"/pgp"}
        skipCal = true;
    }

    if(!skipCal){
        let possiblePages = [];
        possibleRoutes.forEach(r => {
            possiblePages.push({"dis": levenshteinDistance(r, loc.pathname), "path": r});
        });
        console.log(possiblePages);
        possiblePages.forEach(pP =>{
            if(!closestPage || pP.dis < closestPage.dis){
                closestPage = pP;
            }
        });
        console.log("Closet match:",closestPage);
    }
    return(
        <>
            <div className="JetBrainMono PageNotFound">
                <h1 className="PageNotFoundText">404 - Page Not Found.</h1>
                <div className="TextContent">
                    <p>You tried to access {"{" + loc.pathname +"}"}</p>
                    <p>but that page does not exist.</p>
                    <p>Did you mean <InlineLink path={closestPage.path} text={closestPage.path}/> ?</p>
                    <p>Else click the ascii art to return to home.</p>
                </div>
            </div>
        </>
    );
}
export default PageNotFound;