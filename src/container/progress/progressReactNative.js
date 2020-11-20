import React, {useState, useRef, useEffect} from 'react';
import {Text, View, StyleSheet, Button, StatusBar} from 'react-native';
import {Transitioning, Transition} from 'react-native-reanimated';

const Progress = ({step, steps, height}) => {
  const transition = <Transition.Change interpolation="easeInOut" />;

  let [perc, setPerc] = useState(step / steps);
  const ref = useRef();
  useEffect(() => {
    ref.current.animateNextTransition();
    setPerc(step / steps);
  }, [step]);
  return (
    <Transitioning.View
      ref={ref}
      style={styles.centerAll}
      transition={transition}>
          <Text>{step}/ {steps}</Text>
      <View style={styles.bar}>
        <View
          style={{
            borderRadius: 20,
            height,
            width: `${perc*100}%`,
            backgroundColor: '#FF5252',
          }}
        />
      </View>
    </Transitioning.View>
  );
};

function ProgressScreen() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (index === 10) return;
  
      const interval = setInterval(() => {
        setIndex((index+1) % (10 + 1));
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }, [index]);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Progress step={index} steps={10} height={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  centerAll: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  bar: {
    marginTop: 30,
    height: 20,
    width: '80%',
    backgroundColor: '#aaa',
    borderRadius: 20,
  },
});

export default ProgressScreen;
