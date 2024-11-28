import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import style from "./style";

const UserProfileImage = props =>{
    return (
    <View style={[style.userImageContainer,{borderRadius: props.ImageDimensions}]}>
    <Image source={props.profileImage} style={{height: props.ImageDimensions, width: props.ImageDimensions, borderRadius:props.ImageDimensions}}/>
     </View>
);
};

UserProfileImage.prototype = {
    profileImage: PropTypes.any.isRequired,
    ImageDimensions: PropTypes.number.isRequired,
};
export default UserProfileImage;