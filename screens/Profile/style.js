import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, VerticalScale } from "../../assets/Styles/scaling";

const style = StyleSheet.create({
    profileImage:{
        width:horizontalScale(110),
        height: horizontalScale(110)
    },
    profileImageContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop: VerticalScale(32),
    },
    profileImageContent:{
        borderWidth:1,
        borderColor: '#0150EC',
        padding: horizontalScale(4),
        borderRadius: horizontalScale(110,)
    },
    UserName: {
        marginTop: VerticalScale(20),
        textAlign:'center',
        fontFamily: 'Inter_18pt-SemiBold',
        fontSize: scaleFontSize(20),
        color:'black'
    },
    statAmount:{
        fontFamily: 'Inter_18pt-SemiBold',
        fontSize:scaleFontSize(20),
        color:'#022150',
        textAlign:'center'
    },
    statType:{
        fontFamily: 'Inter_18pt-Regular',
        fontSize: scaleFontSize(16),
        color:'#79869f',
        textAlign:'center'
    },
    statContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: horizontalScale(40),
        paddingVertical: VerticalScale(30),
        borderBottomWidth: 1,
        borderColor:'#e9eff1',

    },
    statBorder:{
        borderRightWidth:1,
        borderColor:'#e9eff1'
    }
});

export default style;