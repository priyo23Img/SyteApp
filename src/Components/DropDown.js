import { StyleSheet, Text, View, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../assets/colors'


const DropDown = ({ state = "select", setState = () => (<></>), data = [] }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <TouchableOpacity onPress={() => setOpen(!open)}
             style={{ padding: 10, 
             borderWidth: 1,
              borderColor: Colors.MainColor,
               elevation: 3, backgroundColor: "#fff", marginBottom: 5, flexDirection: "row", justifyContent: "space-between", borderRadius: 5 }}>
                <Text>{state}</Text>
                <AntDesign name="down" color="#000" />
            </TouchableOpacity>
            <View style={{ height: 100, }}>
                {open ? (
                    <ScrollView style={{}}>
                        {
                            data.map((title,index) => (
                                <TouchableOpacity
                                key={index}
                                onPress={() => { setState(title.label); setOpen(false) }} style={styles.item}>
                                    <Text style={styles.title}>{title.label}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                ) : null

                }
            </View>

        </>
    )
}

export default DropDown

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#fff',
        padding: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        width: 80

    },
    title: {
        fontSize: 16,
        color: "#000",
    },
})