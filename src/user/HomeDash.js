import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import UserHome from './UserHome';
import Location1 from './Location1';
import WishList from './WishList';
import Chat from './Chat';
import Profile from './Profile';

const HomeDash = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab === 0 ? (
        <UserHome />
      ) : selectedTab === 1 ? (
        <Location1 />
      ) : selectedTab === 2 ? (
        <WishList />
      ) : selectedTab === 3 ? (
        <Chat />
      ) : (
        <Profile />
      )}
      <View style={styles.bottomTabView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={
              selectedTab === 0
                ? require('../../images/home_fill.png')
                : require('../../images/home.png')
            }
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={
              selectedTab === 1
                ? require('../../images/search_fill.png')
                : require('../../images/search.png')
            }
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={
              selectedTab === 2
                ? require('../../images/wish_fill.png')
                : require('../../images/wish.png')
            }
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={
              selectedTab === 3
                ? require('../../images/orders_fill.png')
                : require('../../images/order.png')
            }
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={
              selectedTab === 4
                ? require('../../images/profile_fill.png')
                : require('../../images/profile.png')
            }
            style={styles.bottomIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeDash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTabView: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 5,
    position: 'absolute',
    bottom: 0,
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIcon: {
    width: 24,
    height: 24,
  },
});
