import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, VerticalScale } from "../../assets/Styles/scaling";


const style= StyleSheet.create({
    header: {
        marginLeft: horizontalScale(27),
        marginRight: horizontalScale(17),
        marginTop: VerticalScale(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      messageIcon: {
         padding:horizontalScale(14),
         borderRadius:horizontalScale(100),
         backgroundColor: '#F9FAFB',
        },
        messageNumberContainer:{
            backgroundColor: '#f35bac',
            borderRadius: 10,
            justifyContent: 'center',
            flexDirection:'row',
            width: horizontalScale(10),
            height: horizontalScale(10),
            alignItems: 'center',
            position: 'absolute',
            right: horizontalScale(10),
            top: VerticalScale(10),
        },
        messageNumber:{
            color:'white',
            fontSize: scaleFontSize(6),
            fontFamily: 'Inter_18pt-SemiBold',
        },
        userStoriesContainer:{
            marginTop: VerticalScale(20),
            marginHorizontal:horizontalScale(28)
        },
        UserPostContainer:{
            marginHorizontal:horizontalScale(24)
        }
});

export default style;