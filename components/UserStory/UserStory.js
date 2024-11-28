import React from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from "react-native";
import style from "./style";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { horizontalScale } from "../../assets/Styles/scaling";


const UserStory = props =>{
    return (
        <View style={style.storyContainer}>
            <UserProfileImage profileImage={props.profileImage} ImageDimensions={horizontalScale(65)}/>
            <Text style={style.firstName}>{props.firstName}</Text>
        </View>
)};

UserStory.propTypes={
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired,
}

export default UserStory;