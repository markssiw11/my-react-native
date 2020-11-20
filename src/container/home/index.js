import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Home({navigation}) {
  const onPressNav = () => {
    navigation.navigate('Carousel')
  }
  console.log("navigation====", navigation)
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={onPressNav}
        style={styles.box}>
        <Text style={styles.txt}>carousel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
      },
      txt: {
          color: 'white',

      }
})
export default Home;
