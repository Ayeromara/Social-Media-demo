import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileTabsTitle from "../components/ProfileTabTitle/ProfileTabTitle";
import ProfileTabContent from "../components/ProfileTabContent/ProfileTabContent";
import Messages from "../screens/Messages/Messages";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();


export const ProfileTabsNavigation =()=>{
    return <ProfileTabs.Navigator
    screenOptions={{
        tabBarIndicatorStyle:{
            backgroundColor:'transparent',
        },
        tabBarStyle:{
            zIndex:0
        }
    }}
    >
        <ProfileTabs.Screen name={'Tab1'}
        options={{tabBarLabel:({focused})=><ProfileTabsTitle
        isFocused={focused}
        title={'Photos'}/>}}
        component={ProfileTabContent}/>
        <ProfileTabs.Screen name={'Tab2'}
                options={{tabBarLabel:({focused})=><ProfileTabsTitle
                isFocused={focused}
                title={'Videos'}/>}}
                 component={ProfileTabContent}/>
        <ProfileTabs.Screen name={'Tab3'}
                options={{tabBarLabel:({focused})=><ProfileTabsTitle
                isFocused={focused}
                title={'Saved'}/>}}
                 component={ProfileTabContent}/>
    </ProfileTabs.Navigator>
}

const MainMenuNavigator =()=>{
    return(
        <Drawer.Navigator screenOptions={{header:()=>null, headerShown: false}}>
            <Stack.Screen name={Routes.Home} component={Home}/>
            <Stack.Screen name={Routes.Profile} component={Profile}/>
            <Stack.Screen name={Routes.Messages} component={Messages}/>

        </Drawer.Navigator>
    )
}


const MainNavigation = ()=>{
    return (
    <Stack.Navigator screenOptions={{header:()=>null, headerShown: false}} initialRouteName={Routes.Home}>
        <Stack.Screen name={'Drawer'} component={MainMenuNavigator}/>
        <Stack.Screen name={Routes.Messages} component={Messages}/>
    </Stack.Navigator>
    );
};

export default MainNavigation;