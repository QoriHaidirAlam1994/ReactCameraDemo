import { StackNavigator } from 'react-navigation';

import CreateCamera from '../camera/screens';

const RootNavigator = StackNavigator({
  
  Home: {
    screen: CreateCamera,
    navigationOptions: {
     header: null
    }
  },
})

export default RootNavigator
