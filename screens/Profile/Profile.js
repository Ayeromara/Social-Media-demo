import React from "react";
import { Image, SafeAreaView,ScrollView, Text, View } from "react-native";
import globalStyle from "../../assets/Styles/globalStyle";
import style from "./style";
import { ProfileTabsNavigation } from "../../navigations/MainNavigation";

const Profile =()=>{
    return(
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView contentContainerStyle={globalStyle.flexGrow}>
                <View style={style.profileImageContainer}>
                    <View style={style.profileImageContent}>
                <Image style={style.profileImage}
                source={require('../../assets/Images/default_profile.png')}/>
                     </View>
                </View>

                <Text style={style.UserName}>Ayeromara Isaiah</Text>

                <View style={style.statContainer}>
                    
                    <View>
                        <Text style={style.statAmount}>45</Text>
                        <Text style={style.statType}>Following</Text>
                    </View>

                    <View style={style.statBorder}></View>

                    <View>
                        <Text style={style.statAmount}>30M</Text>
                        <Text style={style.statType}>Followers</Text>
                    </View>
                    
                    <View style={style.statBorder}></View>

                    <View>
                        <Text style={style.statAmount}>100</Text>
                        <Text style={style.statType}>Posts</Text>
                    </View>

                </View>

                <View style={globalStyle.flex}>
                <ProfileTabsNavigation/>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
};

export default Profile;