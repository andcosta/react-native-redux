import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Styles from '../util/styles';

import * as UserActions from '../store/actions/user'

const User = ({ changeUser }) => {
    // if(this.state.loading === true){
    //     return (
    //         <View style={Styles.loading}>
    //             <ActivityIndicator size="large" color="black" />
    //         </View>
    //     );
    // }

    console.log("xxx");

    return (
        <TouchableWithoutFeedback onPress={ () => setUser(changeUser) }>
            <View style={Styles.button}>
                <Text style={Styles.buttonText}>change user</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}


const setUser = async (changeUser) => {
    // this.setState({ loading: true });
    const response = await axios.get('https://randomuser.me/api');
    // this.setState({ loading: false });

    const { name, picture } = response.data.results[0];

    changeUser({
        userName: `${ name.first } ${ name.last }`,
        userAvatar: picture.large
    });
}


const mapStatetoProps = () => ({});

const mapDispatchToProps = dispatch => 
    bindActionCreators(UserActions, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(User);

