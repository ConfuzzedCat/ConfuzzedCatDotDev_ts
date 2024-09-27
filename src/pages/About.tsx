function About() {
    const calculateAge = (birthday : Date) => { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    const bday = new Date("2002/02/06");
    let age = calculateAge(bday);
    const about = 
    `
I am ${age} years old (06/02/02),
from the small country Denmark.
Also sorry for any spelling mistake, I am dyslexic. 
I am currently studying Computer Science.
Pronounces: (He/Him/Any)

Hobbies:
    coding
    reverse "engineering"(I like to poke and see how things under the hood.)
    VR
    Gaming
    Modding
    Manga and anime

Spoken Languages:
    Danish (Native)
    English (Fluently)
    Other nordic languages (Might get the context)
    Japanese (Learning, not able to speak, nor read much)

Computer Languages (Ranked by personal familiarity and usage, from most to least):
    C#
    Java
    JavaScript
    C++
    SQL
    GLSL

Tools:
    Visual Studio 2019/2022
    InteliJ
    Visual Studio Code
    Rider
    `;
    return(
        <div className="">
            <h2 className="TextCenter">Hello, I am ConfuzzedCat.</h2>
            <pre>{about}</pre>
        </div>
    );
}

export default About;