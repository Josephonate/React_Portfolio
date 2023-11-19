import PasswordGen from "../assets/Images/PasswordGen.png"
import Horiseon from "../assets/Images/Horiseon.png"
import CodingQuiz from "../assets/Images/CodingQuiz.png"

export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio Page</h1>
    
            <h3>Work</h3> 

                 <a href="https://josephonate.github.io/Module_1_challenge/">
                <img src={Horiseon} alt="Horiseon" />
                </a>
                <p>
                    Horiseon
                </p>                  
           
          
            <a href="https://josephonate.github.io/Module_3_Challenge/">
                <img src={PasswordGen}  alt="Password Generator"/>            
            </a>
            <p class="link">
                Js Pass gen
            </p>
            
         
            <a href="https://josephonate.github.io/Quiz-using-JS/">
                <img src={CodingQuiz} alt="Quiz challange" />
            </a>    
            <p class="link">
                Web apis Quiz
            </p>

      </div>
    );
  }
  