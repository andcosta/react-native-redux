import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../store/actions/user'
import axios from 'axios';
import Styles from '../util/styles';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false };
        this.setUser = this.setUser.bind(this);
    }
    
    async setUser() {
        this.setState({ loading: true });
        const response = await axios.get('https://randomuser.me/api');
        this.setState({ loading: false });

        console.tron.log(response);

        const { name, picture } = response.data.results[0];

        this.props.changeUser({
            userName: `${ name.first } ${ name.last }`,
            userAvatar: picture.large
        });
    }

    render() {
        if(this.state.loading === true){
            return (
                <View style={Styles.loading}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            );
        }

        return (
            <TouchableWithoutFeedback onPress={this.setUser}>
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>change user</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(User);