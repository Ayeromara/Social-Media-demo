import React  from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View,Image} from 'react-native';
import Title from '../../components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import { useEffect, useState } from 'react';
import UserPost from '../../components/UserPost/UserPost';
import { scaleFontSize } from '../../assets/Styles/scaling';
import globalStyle from '../../assets/Styles/globalStyle';
import { Routes } from '../../navigations/Routes';

const Home=({navigation})=>{
      const userStories = [
        {
          firstName: 'Joseph',
          id: 1,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'Angel',
          id: 2,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'White',
          id: 3,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'Olivier',
          id: 4,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'Nata',
          id: 5,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'Nicolas',
          id: 6,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'Nino',
          id: 7,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'Nana',
          id: 8,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'Adam',
          id: 9,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'Nino',
          id: 10,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'Nana',
          id: 11,
          profileImage: require('../../assets/Images/default_profile.png')
        },
        {
          firstName: 'Adam',
          id: 12,
          profileImage: require('../../assets/Images/default_profile.png')
        },

      ]
      const userPost =[
        {
          firstName:'Ayeromara',
          lastName: 'Isaiah',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 1872,
          comments: 233,
          bookmarks: 22,
          id: 1
        },
        {
          firstName:'Eluobaju',
          lastName: 'Esther',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 18332,
          comments: 443,
          bookmarks: 233,
          id: 2
        },
        {
          firstName:'Adeonigbagbe',
          lastName: 'Oyindamola',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 1442,
          comments: 253,
          bookmarks: 93,
          id: 3
        },
        {
          firstName:'Nicholas',
          lastName: 'Favour',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 3372,
          comments: 983,
          bookmarks: 43,
          id: 4
        },
        {
          firstName:'Oloruntobi',
          lastName: 'David',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 33,
          comments: 3,
          bookmarks: 3,
          id: 5
        },
        {
          firstName:'Adeonigbagbe',
          lastName: 'Oyindamola',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 1442,
          comments: 253,
          bookmarks: 93,
          id: 6
        },
        {
          firstName:'Nicholas',
          lastName: 'Favour',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 3372,
          comments: 983,
          bookmarks: 43,
          id: 7
        },
        {
          firstName:'Oloruntobi',
          lastName: 'David',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 33,
          comments: 3,
          bookmarks: 3,
          id: 8
        },
        {
          firstName:'Adeonigbagbe',
          lastName: 'Oyindamola',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 1442,
          comments: 253,
          bookmarks: 93,
          id: 9
        },
        {
          firstName:'Nicholas',
          lastName: 'Favour',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 3372,
          comments: 983,
          bookmarks: 43,
          id: 10
        },
        {
          firstName:'Oloruntobi',
          lastName: 'David',
          location: 'Nigeria, Lagos',
          image: require('../../assets/Images/default_post.png'),
          profileImage: require('../../assets/Images/default_post.png'),
          likes: 33,
          comments: 3,
          bookmarks: 3,
          id: 11
        },
      ]

      const UserStoryPageSize= 4;
      const [UserStoryCurrentPage, setUserStoryCurrentPage] = useState(1);
      const [UserStoryRenderedData, setUserStoryRenderedData] = useState([]);
      const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

      const UserPostPageSize= 2;
      const [UserPostCurrentPage, setUserPostCurrentPage] = useState(1);
      const [UserPostRenderedData, setUserPostRenderedData] = useState([]);
      const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);

      const pagination =(database, currentPage, pageSize) =>{
        const startIndex=(currentPage-1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= database.length) {
          return[];
        }
          return database.slice(startIndex, endIndex);
      }

      useEffect (()=>{
        setIsLoadingUserStories (true);
        const getInitialData = pagination(userStories, 1,UserStoryPageSize );
        setUserStoryRenderedData(getInitialData);
        setIsLoadingUserStories (false);

        setIsLoadingUserPost (true);
        const getInitialDataPost = pagination(userPost, 1,UserPostPageSize );
        setUserPostRenderedData(getInitialDataPost);
        setIsLoadingUserPost (false);
      }, []);

  return (

    <SafeAreaView style={globalStyle.backgroundWhite}>


      <View>
        <FlatList 
        ListHeaderComponent={
          <>
                <View style={style.header}>
        <Title title={"Izzygram"}/>
        <TouchableOpacity
        onPress={()=>{navigation.navigate(Routes.Messages)}}
        style={style.messageIcon}>
        <FontAwesomeIcon icon={faEnvelope} size={scaleFontSize(20)} color='#898DAE'/>
        <View style={style.messageNumberContainer}>
          <Text style={style.messageNumber}>2 </Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={style.userStoriesContainer}>
        <FlatList 
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          if (isLoadingUserStories) {
            return;
          }
          setIsLoadingUserStories(true);
          const contentToAppend = pagination(userStories, UserStoryCurrentPage + 1, UserStoryPageSize);
          if (contentToAppend.length > 0) { setUserStoryCurrentPage(UserStoryCurrentPage +1 );
            setUserStoryRenderedData(prev => [...prev, ...contentToAppend]);
          }
          setIsLoadingUserStories(false);
        }}
        showsHorizontalScrollIndicator ={false}
        horizontal= {true}
        data={UserStoryRenderedData} 
        renderItem ={({item})=> (
          <UserStory
          key={'userStories' + item.id}
              firstName={item.firstName}
              profileImage={item.profileImage}
          />
            )}
        />
      </View>
          </>
        }
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          if (isLoadingUserPost) {
            return;
          }
          setIsLoadingUserPost(true);
          const contentToAppend = pagination(userPost, UserPostCurrentPage + 1, UserPostPageSize);
          if (contentToAppend.length > 0) { setUserPostCurrentPage(setUserPostCurrentPage +1 );
            setUserPostRenderedData(prev => [...prev, ...contentToAppend]);
          }
          setIsLoadingUserPost(false);
        }}
        showsVerticalScrollIndicator={false}
        data={UserPostRenderedData} 
        renderItem={({item})=>(
          <View style={style.UserPostContainer}>
        <UserPost 
        style={style.UserPostContainer}
        firstName={item.firstName}
        lastName={item.lastName}
        image={item.image}
        profileImage={item.profileImage}
        likes={item.likes}
        comments={item.comments}
        bookmarks={item.bookmarks}
        location ={item.location}
      />
      </View>
      )}
      />
      </View>
    </SafeAreaView>

  );
}



export default Home;
