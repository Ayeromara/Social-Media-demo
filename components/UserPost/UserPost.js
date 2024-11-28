import React from "react";

import { PropTypes } from "prop-types";
import { View ,Text, Image} from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import { faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons/faBookmark";
import { horizontalScale, scaleFontSize } from "../../assets/Styles/scaling";


const UserPost = props => {
    return (
        <View style={style.UserPostContainer}>

            <View style={style.User}>

                <View style={style.UserContainer}>
                    <UserProfileImage profileImage={props.profileImage} ImageDimensions={horizontalScale(48)}/>
                    
                    <View style={style.UserTextContainer}>
                        <Text style={style.UserName}>{props.firstName} {props.lastName}</Text>
                        {props.location && <Text style={style.Location}>{props.location}</Text>}
                    </View>
                </View>

                <FontAwesomeIcon icon={faEllipsis} size={scaleFontSize(24)} color={"#79866f"}/>
            </View>

            <View style={style.postimage}>
                <Image source={props.image}/>
            </View >

                <View style={style.userPostStats}>

                    <View style={style.userPostStatsButton}>
                        <FontAwesomeIcon icon={faHeart} color='#79869f'/>
                        <Text style={style.userPostStatsText}>{props.likes}</Text>
                    </View>

                    <View style={style.userPostStatsButtonRight}>
                        <FontAwesomeIcon icon={faMessage} color='#79869f'/>
                        <Text style={style.userPostStatsText}>{props.comments}</Text>
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center', marginLeft: 37}}>
                        <FontAwesomeIcon icon={faBookmark} color='#79869f'/>
                        <Text style={style.userPostStatsText}>{props.bookmarks}</Text>
                    </View>
                    
                 </View>

        </View>
    )
};

UserPost.propTypes ={
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profileImage: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
}

export default UserPost;