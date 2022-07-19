/* eslint-disable prettier/prettier */
/**
 * This App is for academic purpose only.
 * Created by Ben Sagir.
 * in this app there will be a predict from a neural network that happends localy on the device.
 * the net was train on Google Colab.
 * the net is DenseNet201.
 * train accuracy achived: 98%
 * validation accuracy achived: 90%
 */

import React, {useState, useEffect, useCallback} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, Platform, View, Image} from 'react-native';
import Star from './anim/anim';
import Circle from './anim/circle';

function App() {

  const [tries, setTries] = useState(1);
  return (
    <View style={styles.main}>
      <Circle />
    </View >
  );
}

const styles = StyleSheet.create({
  main: {
    // backgroundColor: '#F3F9FF',
    backgroundColor: '#FFF',
    padding: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  header: {
    padding: 10,
    position: 'absolute',
    top: 0,
    width: Dimensions.get('screen').width,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7.49,
    elevation: 12,
  },
  button: {
    backgroundColor: '#56AAFF',
    paddingHorizontal: 25,
    paddingVertical: 12,
    margin: 10,
    alignItems: 'center',
    borderRadius: 11,
    shadowColor: '#229BD5',
    shadowOffset: {
      width: 9,
      height: 11,
    },
    shadowOpacity: 0.43,
    shadowRadius: 16,
    elevation: 12,
  },
  WT: {
    color: '#FFF',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',

  },
  recognition: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 180,
    height: 180,
    margin: 15,
    borderRadius: 10,
    padding: 0,
    borderColor: '#461177',
    shadowColor: '#3D0E61',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  reconV: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reconText: {
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
    fontSize: 24,
    color: '#273746',
    fontFamily: 'Helvetica',

  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
    color: '#273746',
    fontFamily: 'Helvetica',

  },
  headText: {
    fontSize: 24,
    color: '#273746',
    fontWeight: 'bold',
    padding: 10,
    fontFamily: 'Helveticas',

  },
  headSmallText: {
    fontSize: 16,
    color: '#79A8D8',
    fontWeight: 'bold',
    padding: 8,
    fontFamily: 'Helvetica',

  },
});

export default App;
