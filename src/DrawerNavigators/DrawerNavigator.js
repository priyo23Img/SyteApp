import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import HomeScreenMain from '../Screens/HomeScreen/HomeScreenMain';
import Sales from '../Screens/Sales/Sales';
import Photos from '../Screens/Photoes/Photos';
import Documents from '../Screens/Documents/Documents';
import MaterialHistory from '../Screens/MaterialHistory/MaterialHistory';
import LogRegisterMain from '../Screens/LoginRegister/LogRegisterMain';
import ProjectPage from '../Screens/AddProject/ProjectPage';
import SubsCription from '../Screens/SubcriptionScreen/SubsCription';
import OtpScreen from '../Screens/LoginRegister/OtpScreen/OtpScreen';
import Register from '../Screens/LoginRegister/Register';
import Login from '../Screens/LoginRegister/Login';
import HomeStack from '../Screens/Common/Auth/HomeStack';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            backBehavior={'history'}
            drawerContent={props => <DrawerContent {...props} />}
            defaultStatus={'closed'}
            initialRouteName='Homemain'
        >
            {/* <Drawer.Screen
                name='HomeStack'
                component={HomeStack}
                options={{ headerShown: false }}

            /> */}
            
            <Drawer.Screen
                name='Homemain'
                component={HomeScreenMain}
                options={{ headerShown: false }}

            />

           
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;