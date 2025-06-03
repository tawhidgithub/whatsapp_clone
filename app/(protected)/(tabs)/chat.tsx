import { View, Text ,Image,TextInput, FlatList } from 'react-native'
import React from 'react'
import { images } from '@/constant/image'
import ChatsHeader from '@/app/component/chats/chatsHeader'
import UserField from '@/app/component/userField'

const userList = [
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Tawhid Islam',
    latestMessage: 'Hey! Are we still meeting today?',
    date: '3:04 pm',
    isOnline: true,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Ayesha Khan',
    latestMessage: 'I just sent you the files.',
    date: '2:45 pm',
    isOnline: false,
    isReadTheMessage: false,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'Fahim Rahman',
    latestMessage: 'Sure, I will get back to you.',
    date: '1:30 pm',
    isOnline: true,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Nusrat Jahan',
    latestMessage: 'Thank you!',
    date: '11:12 am',
    isOnline: false,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    name: 'Rakib Hasan',
    latestMessage: 'Call me when you’re free.',
    date: 'Yesterday',
    isOnline: false,
    isReadTheMessage: false,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Maria Islam',
    latestMessage: 'Let’s catch up soon!',
    date: 'Monday',
    isOnline: true,
    isReadTheMessage: false,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    name: 'Zahidul Alam',
    latestMessage: 'Noted. Thanks!',
    date: '12:18 pm',
    isOnline: true,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Sharmeen Akter',
    latestMessage: 'Where are you now?',
    date: '10:02 am',
    isOnline: false,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
    name: 'Adnan Karim',
    latestMessage: 'See you at the event.',
    date: '9:45 am',
    isOnline: true,
    isReadTheMessage: false,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
    name: 'Fatema Noor',
    latestMessage: 'I’ll be a bit late.',
    date: '8:27 am',
    isOnline: false,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'Moinul Haque',
    latestMessage: 'Good night!',
    date: 'Yesterday',
    isOnline: false,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Nazia Ahmed',
    latestMessage: 'Check your email.',
    date: '2 days ago',
    isOnline: true,
    isReadTheMessage: false,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
    name: 'Sajid Mahmud',
    latestMessage: 'What do you think?',
    date: 'Wednesday',
    isOnline: false,
    isReadTheMessage: false,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
    name: 'Sabrina Yeasmin',
    latestMessage: 'Awesome!',
    date: 'Tuesday',
    isOnline: true,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
    name: 'Ashfaq Karim',
    latestMessage: 'All set now.',
    date: '3 days ago',
    isOnline: false,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
    name: 'Lamisa Haque',
    latestMessage: 'See you soon!',
    date: '4 days ago',
    isOnline: true,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
    name: 'Kazi Arman',
    latestMessage: 'How was your day?',
    date: '4:55 pm',
    isOnline: true,
    isReadTheMessage: false,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/18.jpg',
    name: 'Farzana Mim',
    latestMessage: 'Will do!',
    date: '5:14 pm',
    isOnline: false,
    isReadTheMessage: true,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/19.jpg',
    name: 'Rahim Uddin',
    latestMessage: 'Meeting canceled.',
    date: '5:45 pm',
    isOnline: true,
    isReadTheMessage: false,
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/20.jpg',
    name: 'Tanjila Rahman',
    latestMessage: 'Got it!',
    date: '6:00 pm',
    isOnline: false,
    isReadTheMessage: true,
  },
];




export default function ChatScreen() {
  return (
    <View >
      <ChatsHeader/>
      <FlatList data={userList} renderItem={(user)=>        <UserField imageUrl={user.item.imageUrl} name={user.item.name} latestMessage={user.item.latestMessage} date={user.item.date} isOnline={user.item.isOnline} isReadTheMessage={user.item.isReadTheMessage}/>
} />




    </View>
  )
}