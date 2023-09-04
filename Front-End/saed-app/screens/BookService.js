import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
  Platform,
  TextInput,
} from "react-native";
import { StyleSheet } from "react-native";
import {RangeSlider} from "react-native-super-range-slider";
import Slider from '@react-native-community/slider';
const BookService = () => {
  const [values, setValues] = useState(0);
  const [sliderValue, setSliderValue] = useState(15);
  
  const handleValueChange = (newValue) => {
    setValues(newValue);
  };

  return (
    <>
   

    <View style={styles.container}>
        <Text style={styles.title}>
           Value : {sliderValue}
        </Text>

        <Slider
        style={styles.slider}
          maximumValue={100}
          minimumValue={0}
          thumbTintColor="#00E0FF"
          minimumTrackTintColor="#00E0FF"
          maximumTrackTintColor="#00C9E5"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  slider: {
    width: '100%',
     // Increase the height of the slider track
  },
});
export default BookService