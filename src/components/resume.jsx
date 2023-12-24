import React from 'react';
// import {Link} from 'react-router-dom';
import Location from "../assets/location.svg";
import Mail from "../assets/mail.svg";
import Phone from "../assets/phone.svg";
import Linkedin from "../assets/linkedin.svg";


function Resume() {

    const primaryColor = "#237dc2";

    const styles = {
        resumeContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '100vh',
            backgroundColor: 'red'
        },
        resumeHeader: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',

            backgroundColor: 'blue'
        },

        headerLogo: {
            display: 'flex',
            width: '20%',

            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center'

        },
        logo: {
            display: 'flex',
            border: `1px solid ${primaryColor}`,
            borderRadius: '40px',
            width: '80px',
            height: '80px',
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '34px',
            fontWeight: 600,
        },
        headerTitleContainer: {
            width: '80%',
            height: '100%',
            backgroundColor: 'yellow',
            fontFamily: 'sansserif', 
        },
        title: {
            fontSize: '34px',
            fontWeight: 600,
            color: primaryColor,
            paddingBottom: '10px',
        },
        paddingBottom: {
            paddingBottom: '10px',

        },
        headerDetails: {
            display: 'flex',
            flexDirection: 'row',
            fontSize: '20px',
            paddingRight: '10px',
            color: '#000',

        },
        rowContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

        },
        headerDetailsContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

        },
        resumeObjective: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            fontFamily: 'Roboto',
            backgroundColor: 'magenta',
        },
        objective: {
            display: 'flex',
            flexDirection: 'row',
            width: '20%',
            backgroundColor: 'orange',
            justifyContent: 'right',
            alignItems: 'right',
            fontWeight: 700,
            color: primaryColor,
        },
        objectiveDescription: {
            display: 'flex',
            flexDirection: 'row',
            width: '80%',
            backgroundColor: 'grey',
            paddingBottom: '10px',
        },
        resumeSkills: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            backgroundColor: 'limegreen',
            fontFamily: 'sansserif',
        },
        skills: {
            display: 'flex',
            flexDirection: 'row',
            width: '20%',
            backgroundColor: 'cyan',
            justifyContent: 'right',
            alignItems: 'right',
            fontWeight: 700,
            color: primaryColor,
        },
        skillsDescription: {
            display: 'flex',
            flexDirection: 'row',
            width: '80%',
            backgroundColor: 'white',
            paddingBottom: '10px',
        },
        skillsDetails: {
            paddingRight: '150px',
        },
        resumeEducation: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            backgroundColor: 'violet',
            fontFamily: 'sansserif',

        },
        education: {
            display: 'flex',
            width: '20%',
            backgroundColor: 'brown',
            justifyContent: 'right',
            alignItems: 'right',
            fontWeight: 700,
            color: primaryColor,
        },
        educationDescription: {
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            backgroundColor: 'lightblue',
            paddingBottom: '10px',
            paddingRight: '20px',
        },
        college: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            fontWeight: 600,
        },
        educationDetails: {
            fontWeight: 600,
        },
        cgpa: {
            fontWeight: 600,
            paddingBottom: '10px',
        },
        boldPadding: {
            fontWeight: 600,
            paddingBottom: '10px',
        },
        bold: {
            fontWeight: 600,
        },

        educationBody: {
            display: 'flex',
            flexDirection: 'column',
        },
        resumeProject1: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            backgroundColor: 'violet',
            fontFamily: 'sansserif',

        },
        Project1: {
            display: 'flex',
            width: '20%',
            backgroundColor: 'purple',
            justifyContent: 'right',
            alignItems: 'right',
            fontWeight: 700,
            color: primaryColor,

        },
        project1Description: {
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            backgroundColor: 'white',
            paddingBottom: '10px',
            paddingRight: '20px',

        },

        resumeWork: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            backgroundColor: 'cream',
            fontFamily: 'sansserif',
        },
        work: {
            display: 'flex',
            width: '20%',
            backgroundColor: 'lightGreen',
            justifyContent: 'right',
            alignItems: 'right',
            fontWeight: 700,
            color: primaryColor,

        },
        workDescription: {
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            backgroundColor: 'white',
            paddingBottom: '10px',
            paddingRight: '20px',

        },
        workBody: {
            display: 'flex',
            flexDirection: 'column',

        },
        workDate: {
            display: 'flex',
            flexDirection: 'row',
        },
        titleGrowthAssociate: {
            color: primaryColor,
            paddingRight: '800px',
            fontWeight: 700,
        },
        workSummary: {
            paddingBottom: '10px',
        },
        timelineElement: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '10px',
            marginLeft: '10px',
            height: '100%',
        },

        timelineCircle: {
            display: 'flex',
            width: '14px',
            height: '16px',
            borderRadius: '8px',
            border: '1px solid #000',
        },
        timelineLine: {
            display: 'flex',
            width: '1px',
            height: '100px',
            backgroundColor: '#000',
        },
        underline: {
            textDecorationLine: 'underline',
        },
        imageSize: {
            width: '20px',
            height: '20px',
            color: primaryColor,
        },
        icon:{
            display: 'flex',
            flexDirection: 'row',
            paddingRight: '50px',
        },
    }

    const timelineComponent = () => {
        return (<div style={styles.timelineElement}>
            <div style={styles.timelineCircle}></div>
            <div style={styles.timelineLine}></div>
        </div>)
    }
    return (
        <div style={styles.resumeContainer}>
            <div style={styles.resumeHeader}>
                <div style={styles.headerLogo}>
                    <div style={styles.logo}>ND</div>
                </div>
                <div style={styles.headerTitleContainer}>
                    <div style={styles.title}>Nivya Dileep</div>
                    <div style={styles.rowContainer}>
                        <div style={styles.paddingBottom}>
                            <div style={styles.icon}>
                            <div><img style={styles.imageSize} src={Location} alt='location.svg'/></div>
                            <div style={styles.headerDetails}>Kerala, India</div>
                            </div>
                            <div style={styles.icon}>
                            <div><img style={styles.imageSize} src={Phone} alt='phone.svg'/></div>
                            <div style={styles.headerDetails}>+91-9207101474</div>
                            </div>
                        </div>
                        <div style={styles.headerDetailsContainer}>
                            <div style={styles.icon}>
                            <div><img style={styles.imageSize} src={Mail} alt='mail.svg'/></div>
                            <div style={styles.headerDetails}>nivyadileep2000.eee@gmail.com</div>
                            </div>
                            <div style={styles.icon}>
                            <div><img style={styles.imageSize} src={Linkedin} alt='linkedin.svg'/></div>
                            <div style={styles.headerDetails}>linkedin.com/in/nivyadileep</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles.resumeObjective}>
                <div style={styles.objective}>Objective</div>
                {timelineComponent()}
                <div style={styles.objectiveDescription}>An engineering graduate from Mar Athanasius College of Engineering, seeking a position to contribute my technical and innovative problem-solving skills. Hands on experience in HTML, CSS, Javascript & React. Eager to contribute to dynamic engineering projects.   </div>
            </div>
            <div style={styles.resumeSkills}>
                <div style={styles.skills}>Skills</div>
                {timelineComponent()}
                <div style={styles.skillsDescription}>
                    <div style={styles.skillsDetails}>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div style={styles.skillsDetails}>
                        <ul>
                            <li>Data analytics</li>
                            <li>SQL</li>
                            <li>Python</li>
                            <li>Tableau</li>
                        </ul>
                    </div>
                    <div style={styles.skillsDetails}>
                        <ul>
                            <li>Project Management</li>
                            <li>Team Management</li>
                            <li>Communication</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={styles.resumeEducation}>
                <div style={styles.education}>Education</div>
                {timelineComponent()}
                <div style={styles.educationDescription}>
                    <div style={styles.college}>
                        <div>
                            Bachelor of Technology
                        </div>
                        <div>
                            | Electrical & Electronics
                        </div>
                    </div>
                    <div style={styles.educationBody}>
                        <div style={styles.educationDetails}>Mar Athanasisus College of Engineering</div>
                        <div style={styles.cgpa}>CGPA : 8.08</div>
                        <div style={styles.underline}>Internship: </div>
                        <div>
                            <ul>
                                <li>Computer Architecture, Keltron</li>
                                <li>Machine Learning, Verzeo</li>
                                <li>Data Analytics Traineeship, MedTourEasy</li>
                            </ul>
                        </div>
                        <div style={styles.underline}>Awards:</div>
                        <div><ul>
                            <li>Recipient of IEEE PES Global Humanitarian Project , 6th prize</li>
                            <li>Rashtrapathi award - Bharat Scout and Guides</li></ul>
                        </div>
                        <div style={styles.underline}>Personal Projects:</div>
                        {/* <div><ul>
                            <li><Link to="https://github.com/nivyadileep/Btech-Projects">Resume </Link> </li></ul></div> */}
                    </div>
                </div>
            </div>
            <div style={styles.resumeProject1}>
                <div style={styles.Project1}>Project 1</div>
                {timelineComponent()}
                <div style={styles.project1Description}>
                    <div style={styles.projectBody}>

                        <div style={styles.boldPadding}>
                            Robust Control of Variable Speed BLDC motor using PID controller
                        </div>
                        <div style={styles.underline}>Description:</div>
                        <div>This project aimed to design, implement, and evaluate a control system for a
                            Brushless DC (BLDC) motor drive capable of operating at variable speeds.
                            The main focus was on achieving efficient control using a Proportional-Integral-Derivative (PID) controller</div>
                    </div>
                </div>
            </div>
            <div style={styles.resumeProject1}>
                <div style={styles.Project1}>Project 2</div>
                {timelineComponent()}
                <div style={styles.project1Description}>
                    <div style={styles.projectBody}>

                        <div style={styles.boldPadding}>
                            Smart Assistant for Visually Impaired
                        </div>
                        <div style={styles.underline}>Description:</div>
                        <div>
                            This project aimed to create an intelligent assistant to
                            support individuals with visual impairments in their daily activities, utilizing
                            machine learning techniques.</div>
                        <div><ul>
                            <li>Face Recognition</li>
                            <li>Object detection</li>
                            <li>Text to speech</li></ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles.resumeProject1}>
                <div style={styles.Project1}>Project 3</div>
                {timelineComponent()}
                <div style={styles.project1Description}>
                    <div style={styles.projectBody}>

                        <div style={styles.boldPadding}>
                            Bluetooth-Controlled Robotic Car using Arduino
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles.resumeWork}>
                <div style={styles.work}>Work History</div>
                {timelineComponent()}
                <div style={styles.workDescription}>
                    <div style={styles.workBody}>
                        <div style={styles.workDate}>
                            <div style={styles.titleGrowthAssociate}>
                                Growth Associate
                            </div>
                            <div>10/2022 to CURRENT</div>
                        </div>
                        <div style={styles.boldPadding}>Entri App| Kochi,Kerala </div>
                        <div style={styles.bold}>Summary:</div>
                        <div style={styles.workSummary}>As a growth associate, my responsibility typically revolve around driving and
                            optimizing the growth of a company. Utilized data analytics tools to collect and
                            analyze data related to user behavior, market trends, and performance
                            metrics. Identify and implement strategies to acquire new customers or users.</div>
                        <div style={styles.bold}>Skills:</div>
                        <div>
                            <ul>
                                <li>Team Management</li>
                                <li>Marketing Analytics</li>
                                <li>Growth Hacking</li></ul>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Resume;