import React from "react";

import { Text } from "react-native";

import Proptypes from 'prop-types';
import style from "./style";


const ProfileTabsTitle = props =>{
    return <Text style={[style.Title, !props.isFocused && style.TitleNotFocused]}>{props.title}</Text>
};

ProfileTabsTitle.protoTypes ={
    title: Proptypes.string.isRequired,
    isFocused: Proptypes.bool.isRequired,
}
export default ProfileTabsTitle;