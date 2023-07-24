import React, {useState, useRef, useContext} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiController from '../ApiController/ApiController';
import Fonts from '../../assets/fonts';
import Colors from '../../assets/colors';
import AddTeam from './Adduser/AddTeam';
import Addvendor from './Adduser/Addvendor';
import {AuthContext} from '../../App';

const DrawerItem = ({id, DrawerItemlist, navigation}) => {
  const refRBSheet = useRef();
  const refRBSheet1 = useRef();
  const {removeToken} = useContext(AuthContext);
  const [toggleChevron, setToggleChevron] = useState(false);
  
  // console.log(DrawerItemlist?.children?.map(e=>e.title),"hhhs")
  const handleLogoutUser = async () => {
    const token = await AsyncStorage.getItem('token');
    const NewToken = token;
    const headers = {
      Authorization: `Bearer ${NewToken}`,
      'Content-Type': 'application/json',
    };
    ApiController.LogOutuser('logout', headers)
      .then(async function (response) {
        let newData = response.data;
        console.log('logout', newData);
        if (newData.status === true) {
          AsyncStorage.removeItem('token');
          removeToken();
          console.log(NewToken, 'fhhhfhf/........');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleItemPress = () => {
    if (DrawerItemlist?.route === 'Logout') {
      handleLogoutUser();
    }else if(DrawerItemlist?.children?.length>0){
      setToggleChevron(!toggleChevron)

    }
    
    else {
      navigation.navigate(DrawerItemlist?.route);
    }
    // } else {
    //   el.path ? navigation.navigate(el.path) : setToggleChevron(!toggleChevron);
    // }
  };

  const handleSubItemPress = (el1) => {
    if (el1?.title === 'Add Team Member') {
      refRBSheet.current.open();
    } else {
      refRBSheet1.current.open();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handleItemPress}>
        <View style={styles.titleIconContainer}>
          <Icon
            name={DrawerItemlist?.iconName}
            size={22}
            color="#1F1F1F"
            style={styles.icon}
          />
          <Text style={styles.itemTitle}>{DrawerItemlist?.title}</Text>
        </View>
        {DrawerItemlist?.children?.length > 0 && (
          <Icons
            name={toggleChevron ? 'angle-up' : 'angle-down'}
            size={16}
            color="#757575"
          />
        )}
      </TouchableOpacity>
      {DrawerItemlist?.children && toggleChevron && (
        <View style={styles.subItemContainer}>
          {DrawerItemlist?.children?.map((el1, id) => {
            return(
              <TouchableOpacity
              key={id}
              style={styles.subItem}
              onPress={() => handleSubItemPress(el1)}>
              <Text style={styles.subItemTitle}>{el1.title}</Text>
            </TouchableOpacity>
            )
           
})}
        </View>
      )}
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        customStyles={styles.sheetContainer}>
        <AddTeam refRBSheet={refRBSheet} />
      </RBSheet>
      <RBSheet
        ref={refRBSheet1}
        closeOnPressMask={true}
        customStyles={styles.sheetContainer}>
        <Addvendor />
      </RBSheet>
    </View>
  );
};

export default DrawerItem;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#D6D6D6',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: '17%',
  },
  itemTitle: {
    flex: 1,
    fontSize: height > 900 ? 15 : 12,
    color: Colors.CommonColor,
    fontFamily: Fonts.OpenSans400,
    textTransform: 'capitalize',
  },
  subItemContainer: {
    paddingLeft: 40,
    paddingTop: 10,
  },
  subItem: {
    paddingTop: 10,
  },
  subItemTitle: {
    color: Colors.CommonColor,
    fontFamily: Fonts.OpenSans400,
  },
  sheetContainer: {
    container: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      
      // backgroundColor:Colors.MainColor,
      paddingBottom: 20,
      height: 'auto',
    },
  },
});
