const primaryColor = "#237dc2";
const styles = {
    resumeContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh',
        padding: '10px',
        backgroundColor: '#FFF',
        fontSize: '12px',
        lineHeight: '18px',
    },
    resumeHeader: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: '20px',
    },
    headerLogo: {
        display: 'flex',
        width: '20%',
        justifyContent: 'flex-end',
        alignItems: 'top',
        paddingRight: '30px',
        paddingTop: '10px',
    },
    logo: {
        display: 'flex',
        border: `1px solid ${primaryColor}`,
        borderRadius: '30px',
        width: '60px',
        height: '60px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '25px',
        lineHeight: '28px',
        fontWeight: 500,
    },
    headerTitleContainer: {
        width: '80%',
        height: '100%',
    },
    title: {
        fontSize: '30px',
        lineHeight: '35px',
        fontWeight: 500,
        color: primaryColor,
        paddingBottom: '6px',
    },
    headerDetails: {
        display: 'flex',
        flexDirection: 'row',
        color: '#000',
        paddingRight: '10px',
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
    },
    subHeading: {
        display: 'flex',
        flexDirection: 'row',
        width: '20%',
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
        minHeight: 80
    },
    descriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        paddingBottom: '10px',
        paddingRight: '60px',
        paddingLeft: '10px'
    },
    skillsWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    skillsDetails: {
        marginLeft: '-20px',
        paddingRight: '10px'
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
        width: '14px',
        height: '16px',
        borderRadius: '8px',
        border: '1px solid #000',
    },
    timelineLine: {
        width: '1px',
        height: '100%',
        backgroundColor: '#000',
    },
    underline: {
        textDecorationLine: 'underline',
        paddingBottom: '4px'
    },
    imageSize: {
        width: '16px',
        height: '16px',
        color: primaryColor,
        marginRight: '3px',
    },
    linkedInIcon: {
        width: '12px',
        height: '12px',
        color: primaryColor,
        marginRight: '3px',
        paddingBottom: '2px',
    },
    callIcon: {
        width: '24px',
        height: '24px',
        color: primaryColor,
        marginRight: '-5px',
        marginTop: '4px',
    },
    mailIcon: {
        width: '16px',
        height: '16px',
        color: primaryColor,
        marginTop: '5px',
        marginRight: '3px',
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
