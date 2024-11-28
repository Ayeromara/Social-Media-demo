import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, VerticalScale } from "../../assets/Styles/scaling";

const style = StyleSheet.create({
    storyContainer:{
        marginRight: horizontalScale(20),

    },
    firstName:{
        fontFamily: 'Inter_18pt-Medium',
        fontSize:scaleFontSize(14),
        color: '#022150',
        marginTop: VerticalScale(8),
        textAlign: 'center'
    },

})

export default style;