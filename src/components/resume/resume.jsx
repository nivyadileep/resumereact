import React from "react";

import Location from "../../assets/location.svg";
import Mail from "../../assets/mail.svg";
import Phone from "../../assets/phone.svg";
import Linkedin from "../../assets/linkedin.svg";
import styles from "./styles";
import resumeData from "./data";

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

  const renderHeader = () => {
    return (
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
                <div style={styles.headerDetails}>{resumeData.Linkedin}</div>
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
    );
  };

  const renderObjective = () => {
    return (
      <div style={styles.subHeadingContainer}>
        <div style={styles.subHeading}>OBJECTIVE</div>
        {timelineComponent()}
        <div style={styles.descriptionContainer}>{resumeData.objective}</div>
      </div>
    );
  };

  const renderSkills = () => {
    return (
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
            <div style={styles.skillsDetails}>
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
    );
  };

  const renderEducation = () => {
    return (
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
              <div style={styles.cgpa}>CGPA : {resumeData.education.cgpa}</div>
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
    );
  };

  const renderProject = (project) => {
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
  };

  const renderWorkHistory = (item) => {
    return (
      <div key={item.company} style={styles.subHeadingContainer}>
        <div style={styles.subHeading}>WORK HISTORY</div>
        {timelineComponent()}
        <div style={styles.descriptionContainer}>
          <div style={styles.workBody}>
            <div style={styles.workDate}>
              {item.role && (
                <div style={styles.titleGrowthAssociate}>{item.role}</div>
              )}
              {item.duration && <div>{item.duration}</div>}
            </div>
            {item.company && (
              <div style={styles.boldPadding}>{item.company}</div>
            )}
            {item.summary && (
              <>
                <div style={styles.bold}>Summary:</div>
                <div style={styles.workSummary}>{item.summary}</div>
              </>
            )}
            {item.skills && (
              <>
                <div style={styles.bold}>Skills:</div>
                <div>
                  <ul>
                    {item.skills?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.resumeContainer}>
      {renderHeader()}
      {resumeData.objective && renderObjective()}
      {resumeData.skills && renderSkills()}
      {resumeData.education && renderEducation()}
      {resumeData.projects?.map((project) => renderProject(project))}
      {resumeData.workHistory?.map((item) => renderWorkHistory(item))}
    </div>
  );
}

export default Resume;
