import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
const Progress = ({step, steps, height}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);
  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);
  return (
    <View style={{marginVertical: 10}}>
      <Text
        style={{
          fontSize: 12,
          paddingVertical: 10,
          fontFamily: 'Menlo',
          fontWeight: '900',
        }}>
        {step}/ {steps}
      </Text>
      <Animated.View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          // width: Dimensions.get('screen').width,
          flex:1,
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: height,
          overflow: 'hidden',
        }}>
        <Animated.View
          style={{
            height,
            width: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: height,
            overflow: 'hidden',
            transform: [{translateX: animatedValue}],
          }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default Progress;
