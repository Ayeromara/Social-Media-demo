import React from "react";
import { Text, View } from "react-native";

const Messages =()=>{
    return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    }}>
        <Text style={{color:'black', fontWeight:'bold'}}>Opps!! You have no Messages yet</Text>
    </View>
    );
};

export default Messages;