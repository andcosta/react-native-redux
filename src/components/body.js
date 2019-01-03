import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../util/styles';
import User from './user';

const Body = ({ user }) => (
    <View style={[Styles.container, {backgroundColor: '#F5DEB3'}]}>
        <Text style={Styles.title}>- body -</Text>
        <Image style={Styles.avatar} source={{uri: user.userAvatar}} />
        <Text style={Styles.user}>{user.userName}</Text>
        <User />
    </View>
);

const mapStatetoProps = states => ({
    user: states.user
});

export default connect(mapStatetoProps)(Body);