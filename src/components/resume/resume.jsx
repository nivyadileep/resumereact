import React from "react";

import Location from "../../assets/location.svg";
import Mail from "../../assets/mail.svg";
import Phone from "../../assets/phone.svg";
import Linkedin from "../../assets/linkedin.svg";
import styles from "./styles";

const resumeData = {
  name: "Nivya Dileep",
  shortLogoName: "ND",
  location: "Kerala, India",
  phone: "+91-9207101474",
  mail: "nivyadileep2000.eee@gmail.com",
  Linkedin: "linkedin.com/in/nivyadileep",
  objective:
    "An engineering graduate from Mar Athanasius College of Engineering, seeking a position to contribute my technical and innovative problem-solving skills. Hands on experience in HTML, CSS, Javascript & React. Eager to contribute to dynamic engineering projects.",
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Data analytics",
    "SQL",
    "Python",
    "Tableau",
    "Project Management",
    "Team Management",
    "Communication",
  ],
  education: {
    college: "Mar Athanasisus College of Engineering",
    stream: "Bachelor of Technology | Electrical & Electronics",
    cgpa: 8.08,
    internships: [
      "Computer Architecture, Keltron",
      "Machine Learning, Verzeo",
      "Data Analytics Traineeship, MedTourEasy",
    ],
    awards: [
      "Recipient of IEEE PES Global Humanitarian Project , 6th prize",
      "Rashtrapathi award - Bharat Scout and Guides",
    ],
    personalProjects: [
      { name: "Resume", link: "https://github.com/nivyadileep/resumereact" },
    ],
  },
  projects: [
    {
      name: "PROJECT 1",
      title: "Robust Control of Variable Speed BLDC motor using PID controller",
      description:
        "This project aimed to design, implement, and evaluate a control system for a Brushless DC (BLDC) motor drive capable of operating at variable speeds. The main focus was on achieving efficient control using a Proportional-Integral-Derivative (PID) controller.",
    },
    {
      name: "PROJECT 2",
      title: "Smart Assistant for Visually Impaired",
      description:
        "This project aimed to create an intelligent assistant to support individuals with visual impairments in their daily activities, utilizing machine learning techniques.",
      notes: ["Face Recognition", "Object detection", "Text to speech"],
    },
    {
      name: "PROJECT 3",
      title: "Bluetooth-Controlled Robotic Car using Arduino",
    },
  ],
  workHistory: [
    {
      role: "GROWTH ASSOCIATE",
      duration: "10/2022 to CURRENT",
      company: "Entri App | Kochi,Kerala",
      summary:
        "As a growth associate, my responsibility typically revolve around driving and optimizing the growth of a company. Utilized data analytics tools to collect and analyze data related to user behavior, market trends, and performance metrics. Identify and implement strategies to acquire new customers or users.",
      skills: ["Team Management", "Marketing Analytics", "Growth Hacking"],
    },
  ],
};

function Resume() {
  
  const getLogoName = (fullName) => {
    var words = fullName.split(" ");
    var logoName = "";
    for (var i = 0; i < words.length; i++) {
      logoName += words[i].charAt(0);
    }
    return logoName;
  };

  const timelineComponent = () => {
    return (
      <div style={styles.timelineElement}>
        <div style={styles.timelineCircle}></div>
        <div style={styles.timelineLine}></div>
      </div>
    );
  };

  return (
    <div style={styles.resumeContainer}>
      <div style={styles.resumeHeader}>
        <div style={styles.headerLogo}>
          <div style={styles.logo}>{getLogoName(resumeData.name)}</div>
        </div>
        <div style={styles.headerTitleContainer}>
          <div style={styles.title}>{resumeData.name}</div>
          <div style={styles.headerRowContainer}>
            {resumeData.location && (
              <div style={styles.icon}>
                <img
                  style={styles.imageSize}
                  src={Location}
                  alt="location.svg"
                />
                <div style={styles.headerDetails}>{resumeData.location}</div>
              </div>
            )}
            {resumeData.Linkedin && (
              <div style={styles.icon}>
                <img
                  style={styles.linkedInIcon}
                  src={Linkedin}
                  alt="linkedin.svg"
                />
                <div style={styles.headerDetails}>
                  <a style={styles.link} href={resumeData.Linkedin}>
                    {resumeData.Linkedin}
                  </a>
                </div>
              </div>
            )}
          </div>
          <div style={styles.headerRowContainer}>
            {resumeData.phone && (
              <div style={styles.icon}>
                <div>
                  <img style={styles.callIcon} src={Phone} alt="phone.svg" />
                </div>
                <div style={styles.headerDetails}>{resumeData.phone}</div>
              </div>
            )}
            {resumeData.mail && (
              <div style={styles.icon}>
                <div>
                  <img style={styles.mailIcon} src={Mail} alt="mail.svg" />
                </div>
                <div style={styles.headerDetails}>{resumeData.mail}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {resumeData.objective && (
        <div style={styles.subHeadingContainer}>
          <div style={styles.subHeading}>OBJECTIVE</div>
          {timelineComponent()}
          <div style={styles.descriptionContainer}>{resumeData.objective}</div>
        </div>
      )}
      {resumeData.skills && (
        <div style={styles.subHeadingContainer}>
          <div style={styles.subHeading}>SKILLS</div>
          {timelineComponent()}
          <div style={styles.descriptionContainer}>
            <div style={styles.skillsWrapper}>
              <div style={styles.skillsDetails}>
                <ul>
                  {resumeData.skills
                    .slice(0, Math.floor(resumeData.skills.length / 3) + 1)
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
              <div>
                <ul>
                  {resumeData.skills
                    .slice(
                      Math.floor(resumeData.skills.length / 3) + 1,
                      (Math.floor(resumeData.skills.length / 3) + 1) * 2
                    )
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
              <div style={styles.skillsDetails}>
                <ul>
                  {resumeData.skills
                    .slice(
                      (Math.floor(resumeData.skills.length / 3) + 1) * 2 -
                        resumeData.skills.length
                    )
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {resumeData.education && (
        <div style={styles.subHeadingContainer}>
          <div style={styles.subHeading}>EDUCATION</div>
          {timelineComponent()}
          <div style={styles.descriptionContainer}>
            {resumeData.education.stream && (
              <div style={styles.college}>
                <div>{resumeData.education.stream}</div>
              </div>
            )}
            <div style={styles.educationBody}>
              {resumeData.education.college && (
                <div style={styles.educationDetails}>
                  {resumeData.education.college}
                </div>
              )}
              {resumeData.education.cgpa && (
                <div style={styles.cgpa}>
                  CGPA : {resumeData.education.cgpa}
                </div>
              )}
              {resumeData.education.internships && (
                <>
                  <div style={styles.underline}>Internship: </div>
                  <div>
                    <ul>
                      {resumeData.education.internships.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
              {resumeData.education.awards && (
                <>
                  <div style={styles.underline}>Awards:</div>
                  <div>
                    <ul>
                      {resumeData.education.awards.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
              {resumeData.education.personalProjects && (
                <>
                  <div style={styles.underline}>Personal Projects:</div>
                  <div>
                    <ul>
                      {resumeData.education.personalProjects.map((item) => (
                        <a style={styles.link} href={item.link} key={item.name}>
                          <li>{item.name}</li>
                        </a>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {resumeData.projects?.map((project) => {
        return (
          <div key={project.name} style={styles.subHeadingContainer}>
            <div style={styles.subHeading}>{project.name}</div>
            {timelineComponent()}
            <div style={styles.descriptionContainer}>
              <div style={styles.projectBody}>
                {project.title && (
                  <div style={styles.boldPadding}>{project.title}</div>
                )}
                {project.description && (
                  <>
                    <div style={styles.underline}>Description:</div>
                    <div>{project.description}</div>
                  </>
                )}
                {project.notes && (
                  <div>
                    <ul>
                      {project.notes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
      {resumeData.workHistory?.map((item) => {
        return (
          <div key={item.company} style={styles.subHeadingContainer}>
            <div style={styles.subHeading}>WORK HISTORY</div>
            {timelineComponent()}
            <div style={styles.descriptionContainer}>
              <div style={styles.workBody}>
                <div style={styles.workDate}>
                  {item.role && <div style={styles.titleGrowthAssociate}>
                    {item.role}
                  </div>}
                  {item.duration && <div>{item.duration}</div>}
                </div>
                {item.company && <div style={styles.boldPadding}>{item.company}</div>}
                {item.summary && <>
                <div style={styles.bold}>Summary:</div>
                <div style={styles.workSummary}>{item.summary}</div>
                </>}
                {item.skills && <>
                <div style={styles.bold}>Skills:</div>
                <div>
                  <ul>
                    {item.skills?.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                </>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Resume;
