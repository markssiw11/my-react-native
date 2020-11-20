import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  FlatList,
  Image,
} from 'react-native';
import {Progress} from 'react-native-progress'
const {width, height} = Dimensions.get('screen');
const bgs = ['#A5BBFF', '#DDBEFE', '#C5EDAC', '#FDCA40'];
const DATA = [
  {
    key: '3571572',
    title: 'Multi-lateral intermediate moratorium',
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: 'https://image.flaticon.com/icons/png/256/3571/3571572.png',
  },
  {
    key: '3571747',
    title: 'Automated radical data-warehouse',
    description:
      'Use the optical SAS system, then you can navigate the auxiliary alarm!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571747.png',
  },
  {
    key: '3571680',
    title: 'Inverse attitude-oriented system engine',
    description:
      'The ADP array is down, compress the online sensor so we can input the HTTP panel!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571680.png',
  },
  {
    key: '3571603',
    title: 'Monitored global data-warehouse',
    description: 'We need to program the open-source IB interface!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571603.png',
  },
];
const Square = ({scroll}) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scroll, width), new Animated.Value(width)),
    1,
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius: 86,
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [
          {
            rotateZ: rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};
const Indicator = ({scroll}) => {
  return (
    <View style={{flexDirection: 'row', position: 'absolute', bottom: 100}}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scroll.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scroll.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              width: 10,
              height: 10,
              backgroundColor: 'red',
              borderRadius: 5,
              marginHorizontal: 5,
              transform: [{scale}],
              opacity,
            }}
          />
        );
      })}
    </View>
  );
};
const BackDrop = ({scroll}) => {
  const bg = scroll.interpolate({
    inputRange: DATA.map((_, i) => i * width),
    outputRange: bgs.map((i) => i),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: bg,
        },
      ]}></Animated.View>
  );
};
const RenderFooter = ({scroll}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 100,
        paddingHorizontal: 10,
        width: width,
      }}>
      <Progress step={4} height={20} steps={4} />
    </View>
  );
};
function Carousel() {
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemCtn}>
        <View style={styles.imageCtn}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <View style={styles.txtCtn}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <BackDrop scroll={scrollX} />
      <Square scroll={scrollX} />
      <Animated.FlatList
        contentContainerStyle={{paddingBottom: 100}}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={DATA}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {x: scrollX},
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />
      <Indicator scroll={scrollX}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width / 2,
    height: width / 2,
    resizeMode: 'contain',
  },
  itemCtn: {
    width,
    alignItems: 'center',
  },
  imageCtn: {
    flex: 0.7,
    justifyContent: 'center',
    padding: 20,
  },
  txtCtn: {
    flex: 0.3,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 10,
    color: 'white',
  },
  description: {
    fontWeight: '300',
    color: 'white',
  },
});
export default Carousel;
