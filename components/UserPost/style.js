import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, VerticalScale } from '../../assets/Styles/scaling';

const style = StyleSheet.create({
    UserContainer:{
        flexDirection:'row'
    },
    UserTextContainer:{
        justifyContent:'center', 
        marginLeft: horizontalScale(10),
    },
    User:{
        flexDirection:'row',
        alignItems:"center", 
        justifyContent:"space-between"
    },
    UserName:{
        color:"#000",
        fontFamily:'Inter_18pt-Medium',
        fontSize: scaleFontSize(16),
    },
    Location:{
        color:'#79869f',
        fontFamily: 'Inter_18pt-Regular',
        fontSize:scaleFontSize(12),
        marginTop:VerticalScale(5),
    },
    postimage:{
        alignItems: 'center',
        marginTop:20,
        marginVertical: VerticalScale(20),
    },
    UserPostContainer:{
        marginTop: VerticalScale(35),
        paddingBottom: VerticalScale(20),
        borderBottomWidth:1,
        borderBottomColor:'#EFF2F6'
    },
    userPostStats:{
        marginLeft: horizontalScale(10), 
        flexDirection:'row',
    },
    userPostStatsButton:{
        flexDirection:'row', 
        alignItems:'center',
    },
    userPostStatsButtonRight:{flexDirection:'row', alignItems:'center', marginLeft: horizontalScale(37)},
    userPostStatsText:{marginLeft: horizontalScale(3),color:'#79869f'},

});

export default style;