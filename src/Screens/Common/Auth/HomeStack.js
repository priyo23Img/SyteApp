import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenMain from '../../HomeScreen/HomeScreenMain';
import MaterialHistory from '../../MaterialHistory/MaterialHistory';
import Documents from '../../Documents/Documents';
import Photos from '../../Photoes/Photos';
import Sales from '../../Sales/Sales';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <View>
            {/* <Text>dfgdfsgsgf</Text> */}
            <Stack.Navigator initialRouteName="Homemain">
                <Stack.Screen
                    name='Homemain'
                    component={HomeScreenMain}
                    options={{ headerShown: false }}

                />

                <Stack.Screen
                    name='Material'
                    component={MaterialHistory}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='Document'
                    component={Documents}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='Photos'
                    component={Photos}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name='Sales'
                    component={Sales}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </View>
    )
}

export default HomeStack

const styles = StyleSheet.create({})