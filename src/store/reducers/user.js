const initialStateUser = {
    userName: 'Anderson Costa',
    userAvatar: 'https://avatars0.githubusercontent.com/u/25548201'
}

export default user = (state = initialStateUser, action) => {
    
    switch(action.type) {
        case 'CHANGE_USER':
            return action.payload.user
        default:
            return state;
    }
}