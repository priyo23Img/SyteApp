import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  LogBox,
  ActivityIndicator,
  SafeAreaView,
  Platform
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Fonts from './assets/fonts';
import Colors from './assets/colors';
import Index from './src/StackNavigators/Index';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import DrawerNavigator from './src/DrawerNavigators/DrawerNavigator';
import BlankScreen from './src/Screens/Common/BlankScreen';
import LogRegisterMain from './src/Screens/LoginRegister/LogRegisterMain';
import Login from './src/Screens/LoginRegister/Login';
import Register from './src/Screens/LoginRegister/Register';
import OtpScreen from './src/Screens/LoginRegister/OtpScreen/OtpScreen';
import SubsCription from './src/Screens/SubcriptionScreen/SubsCription';
import ProjectPage from './src/Screens/AddProject/ProjectPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sales from './src/Screens/Sales/Sales';
import Photos from './src/Screens/Photoes/Photos';
import Documents from './src/Screens/Documents/Documents';
import MaterialHistory from './src/Screens/MaterialHistory/MaterialHistory';
import ProjectPage2 from './src/Screens/AddProject/ProjectPage2';
import ProjectPage3 from './src/Screens/AddProject/ProjectPage3';
import AdminDashboardMain from './src/Screens/AdminDashboard/AdminDashboardMain';
import SiteManager from './src/DrawerNavigators/Adduser/InnerScreen/SiteManager';
import Agent from './src/DrawerNavigators/Adduser/InnerScreen/Agent';
import SalesTeam from './src/DrawerNavigators/Adduser/InnerScreen/SalesTeam';
import Accounts from './src/DrawerNavigators/Adduser/InnerScreen/Accounts';
import DprMain from './src/Screens/DprScreens/DprMain';
import TaskManagerMain from './src/Screens/DprScreens/TaskManagerMain';
import TaskDetails from './src/Screens/DprScreens/InnerScreens/TaskDetails';
import MaterialConsumMain from './src/Screens/DprScreens/MaterialCon/MaterialConsumMain';
import LabourConsumeMain from './src/Screens/DprScreens/LabourCon/LabourConsumeMain';
import MachinaryConMain from './src/Screens/DprScreens/MachinaryCon/MachinaryConMain';
import UserProfileMain from './src/Screens/UserProfile/UserProfileMain';
import Media from './src/Screens/UserProfile/InnetScreen/MediaMain';
import Receipts from './src/Screens/UserProfile/InnetScreen/ReceiptsMain';
import Project from './src/Screens/UserProfile/InnetScreen/ProjectMain';
import AccountsMain from './src/Screens/Accounts/AccountsMain';
import AddVender from './src/Screens/Accounts/InnerScreen/AddVender';
import NewBookingScreen from './src/Screens/Sales/InnerScreen/NewBookingScreen';
import AddUnit from './src/Screens/Sales/InnerScreen/AddUnit';
import DetailsPayment from './src/Screens/Sales/Booked/InnerScreen/DetailsPayment';
import DetailsPayment2 from './src/Screens/Sales/Booked/InnerScreen/DetailsPayment2';
import DetailsPayment3 from './src/Screens/Sales/Booked/InnerScreen/DetailsPayment3';
import FinalPaymentScreen from './src/Screens/Sales/Booked/InnerScreen/FinalPaymentScreen';
import BookScreenMain from './src/Screens/Sales/Booked/BookScreenMain';
import ReserveScreenMain from './src/Screens/Sales/Reserve/ReserveScreenMain';
import BookedSecondry from './src/Screens/Sales/Booked/BookedSecondry';
import LeadsMain from './src/Screens/Leads/LeadsMain';
import AddLeads from './src/Screens/Leads/AddLeads';
import LeadHistoty from './src/Screens/Leads/LeadHistoty';
import CommonScreen from './src/Screens/Leads/innerScreens/CommonScreen';
import TeamProfile from './src/Screens/TeamProfile/TeamProfile';
import Settings from './src/Screens/Settings/Settings';
import Reports from './src/Screens/Reports/Reports';
import SiteProgress from './src/Screens/Siteprogress/SiteProgress';
import Attendances from './src/Screens/Attendancs/Attendances';
import Purchases from './src/Screens/Purchases/Purchases';
const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();
const App = () => {
  const initialState = {
    authToken: null,
  };
  const [isLoading, setIsLoading] = useState(true);

  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'SET_TOKEN':
        return {
          ...prevState,
          authToken: action.data,
        };
      case 'REMOVE_TOKEN':
        return {
          ...prevState,
          authToken: null,
        };
      default:
        return {
          ...prevState,
        };
    }
  };

  const authContext = React.useMemo(
    () => ({
      setToken: async data => {
        dispatch({ type: 'SET_TOKEN', data: data });
      },
      removeToken: async () => {
        dispatch({ type: 'REMOVE_TOKEN' });
      },
    }),

    [],
  );

  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log(state.authToken, 'nulllll............');

  const initializeApp = async () => {
    let userProfile = await AsyncStorage.getItem('token');
    console.log(userProfile, state.authToken, 'nulllll............');
    if (userProfile) {
      dispatch({ type: 'SET_TOKEN', data: userProfile });
    }
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreAllLogs();
    initializeApp();
  }, []);
  if (isLoading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: 'center', color: Colors.MainColor }}
      />
    );
  } else {
    return (
      <>
      <View style={{height: Platform.OS==="ios" ? 50:0,backgroundColor:Colors.MainColor}} >
      <StatusBar backgroundColor={ Colors.MainColor} barStyle="dark-content"  />

      </View>
       
        <NavigationContainer>
          <AuthContext.Provider value={authContext}>
            <Stack.Navigator>
              {state.authToken ? (
                <>
                  <Stack.Screen
                    name="DrawerNavigator"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Material"
                    component={MaterialHistory}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Leads"
                    component={LeadsMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Document"
                    component={Documents}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Photos"
                    component={Photos}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Salesmain"
                    component={Sales}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Newbookingmain"
                    component={NewBookingScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Projectpage"
                    component={ProjectPage}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SubScription"
                    component={SubsCription}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Projectpage2"
                    component={ProjectPage2}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Projectpage3"
                    component={ProjectPage3}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Addminmain"
                    component={AdminDashboardMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Sitemanager"
                    component={SiteManager}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Accounts"
                    component={Accounts}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Salesteam"
                    component={SalesTeam}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Agent"
                    component={Agent}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Dpr"
                    component={DprMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Taskmanagermain"
                    component={TaskManagerMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Taskdetails"
                    component={TaskDetails}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Materialconsume"
                    component={MaterialConsumMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Labourconsumemain"
                    component={LabourConsumeMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Machinaryconmain"
                    component={MachinaryConMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Userprofilemain"
                    component={UserProfileMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Accountsmain"
                    component={AccountsMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Addvender"
                    component={AddVender}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="AddUnit"
                    component={AddUnit}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Detailspayment1"
                    component={DetailsPayment}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Detailspayment2"
                    component={DetailsPayment2}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="Detailspayment3"
                    component={DetailsPayment3}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Finalpayment"
                    component={FinalPaymentScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Bookedmain"
                    component={BookScreenMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Reservedmain"
                    component={ReserveScreenMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="BookedSecond"
                    component={BookedSecondry}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Addleads"
                    component={AddLeads}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="Commonscreen"
                    component={CommonScreen}
                    options={{ headerShown: false }}
                  />
                    <Stack.Screen
                    name="Leadhistory"
                    component={LeadHistoty}
                    options={{ headerShown: false }}
                  />
                      <Stack.Screen
                    name="Teamprofile"
                    component={TeamProfile}
                    options={{ headerShown: false }}
                  />
                     <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{ headerShown: false }}
                  />
                   <Stack.Screen
                    name="Reports"
                    component={Reports}
                    options={{ headerShown: false }}
                  />
                    <Stack.Screen
                    name="SiteProgress"
                    component={SiteProgress}
                    options={{ headerShown: false }}
                  />
                   <Stack.Screen
                    name="Attendances"
                    component={Attendances}
                    options={{ headerShown: false }}
                  />
                   <Stack.Screen
                    name="Purchases"
                    component={Purchases}
                    options={{ headerShown: false }}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="Blank"
                    component={BlankScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Logregistermain"
                    component={LogRegisterMain}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Register" component={Register} />
                  <Stack.Screen
                    name="Otpscreen"
                    component={OtpScreen}
                    options={{ headerShown: false }}
                  />
                
                </>
              )}
            </Stack.Navigator>
          </AuthContext.Provider>
        </NavigationContainer>
      </>
    );
  }
};

export { App as default, AuthContext };
const styles = StyleSheet.create({});
