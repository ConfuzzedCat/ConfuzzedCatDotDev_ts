import { useNavigate } from "react-router-dom";

function TitleAsciiArt() {
  const navigate = useNavigate();
  const ClickHandler = () => {
    navigate("/");
  };

  let titles = [
    `
      # ###                               /##                                                      ##          # ###                         
      /  /###  /                          #/ ###                                                      ##       /  /###  /                      
      /  /  ###/                          ##   ###                                                     ##      /  /  ###/                 #     
     /  ##   ##                           ##                                                           ##     /  ##   ##                 ##     
    /  ###                                ##                                                           ##    /  ###                      ##     
   ##   ##           /###    ###  /###    ######   ##   ####       ######     ######      /##      ### ##   ##   ##           /###     ######## 
   ##   ##          / ###  /  ###/ #### / #####     ##    ###  /  /#######   /#######    / ###    ######### ##   ##          / ###  / ########  
   ##   ##         /   ###/    ##   ###/  ##        ##     ###/  /      ##  /      ##   /   ###  ##   ####  ##   ##         /   ###/     ##     
   ##   ##        ##    ##     ##    ##   ##        ##      ##          /          /   ##    ### ##    ##   ##   ##        ##    ##      ##     
   ##   ##        ##    ##     ##    ##   ##        ##      ##         /          /    ########  ##    ##   ##   ##        ##    ##      ##     
    ##  ##        ##    ##     ##    ##   ##        ##      ##        ###        ###   #######   ##    ##    ##  ##        ##    ##      ##     
     ## #      /  ##    ##     ##    ##   ##        ##      ##         ###        ###  ##        ##    ##     ## #      /  ##    ##      ##     
      ###     /   ##    ##     ##    ##   ##        ##      /#          ###        ### ####    / ##    /#      ###     /   ##    /#      ##     
       ######/     ######      ###   ###  ##         ######/ ##          ##         ##  ######/   ####/         ######/     ####/ ##     ##     
         ###        ####        ###   ###  ##         #####   ##         ##         ##   #####     ###            ###        ###   ##     ##    
                                                                         /          /                                                           
                                                                        /          /                                                            
                                                                       /          /                                                             
                                                                      /          /                                                              
    `,
    `
 ██████╗ ██████╗ ███╗   ██╗███████╗██╗   ██╗███████╗███████╗███████╗██████╗  ██████╗ █████╗ ████████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝██║   ██║╚══███╔╝╚══███╔╝██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║█████╗  ██║   ██║  ███╔╝   ███╔╝ █████╗  ██║  ██║██║     ███████║   ██║   
██║     ██║   ██║██║╚██╗██║██╔══╝  ██║   ██║ ███╔╝   ███╔╝  ██╔══╝  ██║  ██║██║     ██╔══██║   ██║   
╚██████╗╚██████╔╝██║ ╚████║██║     ╚██████╔╝███████╗███████╗███████╗██████╔╝╚██████╗██║  ██║   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝╚═════╝  ╚═════╝╚═╝  ╚═╝   ╚═╝   
    `,
    `
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌ ▀▀▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ 
▐░▌          ▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌          ▐░▌       ▐░▌          ▐░▌          ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌     ▐░▌     
▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌ ▄▄▄▄▄▄▄▄▄█░▌ ▄▄▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌          ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     
▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░░░░░░░░░░░▌     ▐░▌     
▐░▌          ▐░▌       ▐░▌▐░▌   ▐░▌ ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░▌          ▐░█▀▀▀▀▀▀▀█░▌     ▐░▌     
▐░▌          ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌     ▐░▌     
▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌     ▐░▐░▌▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌     ▐░▌     
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌       ▐░▌     ▐░▌     
 ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀       ▀      
    `,
    `
 ▄████▄   ▒█████   ███▄    █   █████▒ █    ██ ▒███████▒▒███████▒▓█████ ▓█████▄  ▄████▄   ▄▄▄      ▄▄▄█████▓
▒██▀ ▀█  ▒██▒  ██▒ ██ ▀█   █ ▓██   ▒  ██  ▓██▒▒ ▒ ▒ ▄▀░▒ ▒ ▒ ▄▀░▓█   ▀ ▒██▀ ██▌▒██▀ ▀█  ▒████▄    ▓  ██▒ ▓▒
▒▓█    ▄ ▒██░  ██▒▓██  ▀█ ██▒▒████ ░ ▓██  ▒██░░ ▒ ▄▀▒░ ░ ▒ ▄▀▒░ ▒███   ░██   █▌▒▓█    ▄ ▒██  ▀█▄  ▒ ▓██░ ▒░
▒▓▓▄ ▄██▒▒██   ██░▓██▒  ▐▌██▒░▓█▒  ░ ▓▓█  ░██░  ▄▀▒   ░  ▄▀▒   ░▒▓█  ▄ ░▓█▄   ▌▒▓▓▄ ▄██▒░██▄▄▄▄██ ░ ▓██▓ ░ 
▒ ▓███▀ ░░ ████▓▒░▒██░   ▓██░░▒█░    ▒▒█████▓ ▒███████▒▒███████▒░▒████▒░▒████▓ ▒ ▓███▀ ░ ▓█   ▓██▒  ▒██▒ ░ 
░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ▒ ▒  ▒ ░    ░▒▓▒ ▒ ▒ ░▒▒ ▓░▒░▒░▒▒ ▓░▒░▒░░ ▒░ ░ ▒▒▓  ▒ ░ ░▒ ▒  ░ ▒▒   ▓▒█░  ▒ ░░   
  ░  ▒     ░ ▒ ▒░ ░ ░░   ░ ▒░ ░      ░░▒░ ░ ░ ░░▒ ▒ ░ ▒░░▒ ▒ ░ ▒ ░ ░  ░ ░ ▒  ▒   ░  ▒     ▒   ▒▒ ░    ░    
░        ░ ░ ░ ▒     ░   ░ ░  ░ ░     ░░░ ░ ░ ░ ░ ░ ░ ░░ ░ ░ ░ ░   ░    ░ ░  ░ ░          ░   ▒     ░      
░ ░          ░ ░           ░            ░       ░ ░      ░ ░       ░  ░   ░    ░ ░            ░  ░         
░                                             ░        ░                ░      ░                           
    `,
    `
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░      ░░░░      ░░░   ░░░  ░░        ░░  ░░░░  ░░        ░░        ░░        ░░       ░░░░      ░░░░      ░░░        ░░
▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒    ▒▒  ▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒
▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓  ▓▓  ▓  ▓  ▓▓      ▓▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓▓      ▓▓▓▓  ▓▓▓▓  ▓▓  ▓▓▓▓▓▓▓▓  ▓▓▓▓  ▓▓▓▓▓  ▓▓▓▓▓
█  ████  ██  ████  ██  ██    ██  ████████  ████  ███  ████████  ███████  ████████  ████  ██  ████  ██        █████  █████
██      ████      ███  ███   ██  █████████      ███        ██        ██        ██       ████      ███  ████  █████  █████
█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
    `,
    `
 ░▒▓██████▓▒░   ░▒▓██████▓▒░  ░▒▓███████▓▒░  ░▒▓████████▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓████████▓▒░ ░▒▓████████▓▒░ ░▒▓████████▓▒░ ░▒▓███████▓▒░   ░▒▓██████▓▒░   ░▒▓██████▓▒░  ░▒▓████████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░        ░▒▓█▓▒░        ░▒▓█▓▒░ ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░    ░▒▓█▓▒░     
░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░      ░▒▓██▓▒░       ░▒▓██▓▒░  ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░    ░▒▓█▓▒░     
░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓██████▓▒░   ░▒▓█▓▒░░▒▓█▓▒░    ░▒▓██▓▒░       ░▒▓██▓▒░    ░▒▓██████▓▒░   ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░        ░▒▓████████▓▒░    ░▒▓█▓▒░     
░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░  ░▒▓██▓▒░       ░▒▓██▓▒░      ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░    ░▒▓█▓▒░     
░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░        ░▒▓█▓▒░        ░▒▓█▓▒░        ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░░▒▓█▓▒░    ░▒▓█▓▒░     
 ░▒▓██████▓▒░   ░▒▓██████▓▒░  ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓█▓▒░         ░▒▓██████▓▒░  ░▒▓████████▓▒░ ░▒▓████████▓▒░ ░▒▓████████▓▒░ ░▒▓███████▓▒░   ░▒▓██████▓▒░  ░▒▓█▓▒░░▒▓█▓▒░    ░▒▓█▓▒░     
    `,
    `
┏┓    ┏       ┓┏┓   
┃ ┏┓┏┓╋┓┏┓┓┏┓┏┫┃ ┏┓╋
┗┛┗┛┛┗┛┗┻┗┗┗ ┗┻┗┛┗┻┗
    `
  ]

  var rand = titles[Math.random() * titles.length | 0]


  let titleText = rand;
  let titleSplit = titleText.split('\n');
  let titleArray = [];
  for (let i = 0; i < titleSplit.length; i++) {
    let element = titleSplit[i];
    if(element == '\n' || element == ' ' || element == ''){
      continue;
    }
    titleArray.push(element);
  }
  let titleFinal = titleSplit.join('\n');

  return(
    <div className="Title RoutesLinks" onClick={ClickHandler}>
      <pre>
      {titleFinal}
      </pre>        
        {/*
          // Font: Isometric1 - https://patorjk.com/software/taag/#p=display&h=0&v=0&c=c%2B%2B&f=Isometric1&t=ConfuzzedCat%0A 
          // Zero width joiner used to fix spacing.
        */}
    </div>
  );
}

export default TitleAsciiArt;