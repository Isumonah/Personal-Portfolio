import linkedIn from "../Images/linkedin.png"
import gmail from "../Images/gmail.png"
import twitter from "../Images/twitter.png"
import gitHub from "../Images/github.png"
import { get } from "react-scroll/modules/mixins/scroller"



export default function Footer(){
  
    // const getYear = () =>{
    // const year = new Date().getFullYear
    // console.log(year)
    // }
    // getYear()


    return(
        <div className="footer">
      <ul className="social-media">
        <li className="linked-in">
          <a href="https://www.linkedin.com/in/anna-isumonah"
          target="_blank">
            <img src={linkedIn} 
            className=""></img>
          </a>
        </li>
        <li className="email">
          <a href="mailto:annaisumonah@gmail.com"
          target="_blank">
            <img src={gmail}></img>
          </a>
        </li>
        <li className="twitter">
          <a 
          href="https://twitter.com/minekia_?lang=en"
          target="_blank">
            <img src={twitter}></img>
          </a>
        </li>
        <li className="github">
          <a 
          href="https://github.com/Isumonah"
          target="_blank">
            <img src={gitHub}></img>
          </a>
        </li>
      </ul>
      <p className="copyright">Copyright &copy; 2023</p>
    </div>
    )
}