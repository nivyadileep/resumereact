const primaryColor = "#237dc2";
const styles = {
    resumeContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh',
        padding: '20px',
        paddingTop: '50px',
        backgroundColor: '#FFF',
        fontSize: '18px',
        lineHeight: '24px',
    },
    resumeHeader: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: '30px'
    },
    headerLogo: {
        display: 'flex',
        width: '25%',
        justifyContent: 'flex-end',
        alignItems: 'top',
        paddingRight: '60px',
        paddingTop: '10px'
    },
    logo: {
        display: 'flex',
        border: `1px solid ${primaryColor}`,
        borderRadius: '45px',
        width: '90px',
        height: '90px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px',
        fontWeight: 500,
    },
    headerTitleContainer: {
        width: '75%',
        height: '100%',
    },
    title: {
        fontSize: '50px',
        lineHeight: '55px',
        fontWeight: 500,
        color: primaryColor,
        paddingBottom: '10px',
    },
    headerDetails: {
        display: 'flex',
        flexDirection: 'row',
        color: '#000',
        paddingRight: '20px',
    },
    headerRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '0px'
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
        backgroundColor: 'red'
    },
    subHeading: {
        display: 'flex',
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'right',
        alignItems: 'right',
        fontWeight: 700,
        color: primaryColor,
    },
    college: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 500,
    },
    educationDetails: {
        fontWeight: 500,
    },
    cgpa: {
        fontWeight: 500,
        paddingBottom: '10px',
    },
    boldPadding: {
        fontWeight: 500,
        paddingBottom: '10px',
    },
    bold: {
        fontWeight: 500,
    },

    educationBody: {
        display: 'flex',
        flexDirection: 'column',
    },
    subHeadingContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        minHeight: 100
    },
    descriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        paddingBottom: '10px',
        paddingRight: '60px',
        paddingLeft: '10px'
    },
    skillsWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    workBody: {
        display: 'flex',
        flexDirection: 'column',
    },
    workDate: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '10px',
    },
    titleGrowthAssociate: {
        color: primaryColor,
        paddingRight: '30px',
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
        height: '100%',
        backgroundColor: '#000',
    },
    underline: {
        textDecorationLine: 'underline',
        paddingBottom: '4px'
    },
    imageSize: {
        width: '20px',
        height: '20px',
        color: primaryColor,
        marginRight: '5px',
    },
    linkedInIcon: {
        width: '16px',
        height: '16px',
        color: primaryColor,
        marginRight: '5px',
        paddingBottom: '4px',
    },
    callIcon: {
        width: '30px',
        height: '30px',
        color: primaryColor,
        marginRight: '-3px',
        marginTop: '2px',
    },
    mailIcon: {
        width: '20px',
        height: '20px',
        color: primaryColor,
        marginTop: '5px',
        marginRight: '5px',
    },
    icon:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: primaryColor,
        textDecorationLine: 'none',
    }
}
export default styles