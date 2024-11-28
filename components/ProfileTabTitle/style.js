import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize } from "../../assets/Styles/scaling";

const style = StyleSheet.create({
    Title:{
        fontFamily:'Inter_18pt-Medium',
        fontSize: scaleFontSize(16),
        color: 'black',
        padding: horizontalScale(15)

    },
    TitleNotFocused:{
        color:'#79869f',
        fontFamily:'Inter_18pt-Medium'
    }
});

export default  style;