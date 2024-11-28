import { StyleSheet } from "react-native";
import { horizontalScale, VerticalScale } from "../../assets/Styles/scaling";

const style = StyleSheet.create({
    profileTabContentContainer:{
        backgroundColor:'#ffffff'
    },
    profileTabContent:{
        paddingHorizontal: horizontalScale(21),
        flexDirection:'row',
        flexWrap :'wrap',
        justifyContent:'space-between',
    },
    image:{
        width: horizontalScale(150),
        height: VerticalScale(90),
        marginTop: VerticalScale(11)
    }
});

export default style;