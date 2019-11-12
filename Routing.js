import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MenJa from './component/MenJa'
import StaJa from './component/StaJa'
import UpJa from './component/UpJa'

const navigator = createStackNavigator(
    {
        MenJa: {
            screen: MenJa,
            navigationOptions:{
                title: 'Scheduler'
            }
        },
        StaJa:{
            screen: StaJa,
            navigationOptions:{
                title: 'Daily Schedule'
            }
        },
        UpJa: {
            screen: Upja
        }
})