import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial2109572Navigator from '../features/Tutorial2109572/navigator';
import Maps3109571Navigator from '../features/Maps3109571/navigator';
import BlankScreen1109570Navigator from '../features/BlankScreen1109570/navigator';
import BlankScreen0109569Navigator from '../features/BlankScreen0109569/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial2109572: { screen: Tutorial2109572Navigator },
Maps3109571: { screen: Maps3109571Navigator },
BlankScreen1109570: { screen: BlankScreen1109570Navigator },
BlankScreen0109569: { screen: BlankScreen0109569Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
