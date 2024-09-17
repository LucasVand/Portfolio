import StaticBox from '../StaticBox/StaticBox'
import './AboutMe.css'


function AboutMe() {
    return (
        <>
            <div className='aboutMeCont'>
                <div className='aboutMeTitle'>About Me</div>
                <p className='aboutMeDes'>My name is Lucas Vanderwielen and I am currently a student at the University of Western Ontario. I'm currently a first year studying computer science. My passion is front end design, I have worked hard over the past few years to learn as much as I can about front end develpoment. I taught myself Swift and Swift UI to develope IOS applications. Then I moved on to learning web, which then I taught myself React, CSS and HTML. I have also dabbled in many other languages such as C#, Python, C++. </p>
            </div>
            <div className='credsCont'>
                <StaticBox>
                    <div className='credsBox'>
                        <div className='credsTitle'>Education</div>
                        <div className='divider'></div>
                        <div className='credsSubTitle'>Highschool</div>
                        <ul className='credsDescList'>
                            <li>Honours student through all 4 years</li>
                            <li>94% grade 12 average</li>
                        </ul>
                        <div className='credsSubTitle'>University</div>
                        <ul className='credsDescList'>
                            <li>Currently attending the Universty of Western Ontario</li>
                            <li>Honours Specialization in Computer Science</li>

                        </ul>
                    </div>
                </StaticBox>
                <StaticBox>
                    <div className='credsBox'>
                        <div className='credsTitle'>Work Experience</div>
                        <div className='divider'></div>
                        <div className='credsSubTitle'>Lifeguard <span className='credsTime'>2022 - Present</span> </div>
                        <ul className='credsDescList'>
                            <li>Ensused the safety and security and orderliness of an aquatic facility</li>
                            <li>Taught children how to swim and the importance of water safety</li>
                            <li>Coordinated large teams of other lifeguards</li>
                            <li>Ensured pateron and lifeguard safety at all times</li>
                        </ul>


                        <div className='credsSubTitle'>IT Intern <span className='credsTime'>2023 - 2024</span></div>
                        <ul className='credsDescList'>
                            <li>Identified and provied support on technical issues</li>
                            <li>Created new computer systems and networks</li>
                            <li>Maintained current computer systems in the company</li>
                            <li>Coordinated with other teams to provied the best support</li>
                        </ul>
                    </div>
                </StaticBox>
            </div>
        </>
    )
}

export default AboutMe