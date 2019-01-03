
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from "reactotron-redux";

if(__DEV__) {

    const tron = Reactotron
        .configure() // or .configure({ host: '_your_IP_' })
        .useReactNative() 
        .use(reactotronRedux())
        .connect()

    console.tron = tron;
}
