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

                <img className="footnoteImage" src={GithubLogo} onClick={() => { window.location.href = 'https://github.com/LucasVand' }}></img>


                <img className="footnoteImage" src={InstagramLogo} onClick={() => { window.location.href = 'https://www.instagram.com/lucasvand5/' }}></img>

                <img className="footnoteImage" src={EmailLogo} onClick={() => { window.location.href = 'mailto:lucasvanderwielen@icloud.com' }}></img>

            </div >
        </>
    )
}

export default Footnotes