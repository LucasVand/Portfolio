import GithubLogo from '../assets/GitHubLogo.png'
import InstagramLogo from '../assets/InstagramLogo.png'
import EmailLogo from '../assets/EmailLogo.png'

import './Footnotes.css'
function Footnotes() {
    return (
        <>
            <div className="footnoteCont">
                <div className="copyright">
                    ©2024 · Lucas Vanderwielen
                </div>

                <img className="footnoteImage" src={GithubLogo} style={{ scale: '1.05' }}></img>


                <img className="footnoteImage" src={InstagramLogo} ></img>

                <img className="footnoteImage" src={EmailLogo} style={{ scale: '1.35' }}></img>

            </div >
        </>
    )
}

export default Footnotes