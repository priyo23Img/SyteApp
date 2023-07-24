import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Colors from '../../../../assets/colors';
import DocIcon from 'react-native-vector-icons/AntDesign';
const ReceiptsMain = () => {
  return (
    <View style={{marginBottom: height > 900 ? 20 : 20}}>
      <View
        style={{
          borderBottomColor: Colors.MainColor,
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}>
        <View style={styles.container}>
          <Text
            style={{
              color: Colors.CommonColor,
              fontSize: height > 900 ? 15 : 12,
            }}>
            16feb,2023
          </Text>
        </View>
        <View style={styles.DocsWrap}>
          <View style={styles.DocContainetr}>
            <DocIcon name="filetext1" style={styles.DocumentStyle} />
            <Text style={{textAlign: 'center', fontSize: 12}}>Document1</Text>
          </View>
          <View style={styles.DocContainetr}>
            <DocIcon name="filetext1" style={styles.DocumentStyle} />
            <Text style={{textAlign: 'center', fontSize: 12}}>Document1</Text>
          </View>
          <View style={styles.DocContainetr}>
            <DocIcon name="filetext1" style={styles.DocumentStyle} />
            <Text style={{textAlign: 'center', fontSize: 12}}>Document1</Text>
          </View>
          <View style={styles.DocContainetr}>
            <DocIcon name="filetext1" style={styles.DocumentStyle} />
            <Text style={{textAlign: 'center', fontSize: 12}}>Document1</Text>
          </View>
          <View style={styles.DocContainetr}>
            <DocIcon name="filetext1" style={styles.DocumentStyle} />
            <Text style={{textAlign: 'center', fontSize: 12}}>Document1</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: Colors.MainColor,
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}>
        <View style={styles.container}>
          <Text
            style={{
              color: Colors.CommonColor,
              fontSize: height > 900 ? 15 : 12,
            }}>
            20feb,2023
          </Text>
        </View>
        <View style={styles.DocsWrap}>
          <View style={styles.DocContainetr}>
            <DocIcon name="filetext1" style={styles.DocumentStyle} />
            <Text style={{textAlign: 'center', fontSize: 12}}>Document1</Text>
          </View>
          <View style={styles.DocContainetr}>
            <DocIcon name="filetext1" style={styles.DocumentStyle} />
            <Text style={{textAlign: 'center', fontSize: 12}}>Document1</Text>
          </View>
          <View style={styles.DocContainetr}>
            <DocIcon name="filetext1" style={styles.DocumentStyle} />
            <Text style={{textAlign: 'center', fontSize: 12}}>Document1</Text>
          </View>
          <View style={styles.DocContainetr}>
            <DocIcon name="filetext1" style={styles.DocumentStyle} />
            <Text style={{textAlign: 'center', fontSize: 12}}>Document1</Text>
          </View>
          <View style={styles.DocContainetr}>
            <DocIcon name="filetext1" style={styles.DocumentStyle} />
            <Text style={{textAlign: 'center', fontSize: 12}}>Document1</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReceiptsMain;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: '30%',
    alignSelf: 'center',
    marginTop: 15,
  },
  DocContainetr: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    elevation: 4,
    alignItems: 'center',
    height: 100,
  },
  DocumentStyle: {
    fontSize: 40,
    paddingVertical: 10,
  },
  DocsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
    flexWrap: 'wrap',
  },
});
