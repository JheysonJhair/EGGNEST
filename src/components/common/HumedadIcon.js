import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const HumedadIcon = ({ humedades }) => {
  const viewRef = useRef(null);
  const [color, setColor] = useState('blue');

  useEffect(() => {
    const ultimaHumedad = humedades[humedades.length - 1];

    if (ultimaHumedad < 30) {
      setColor('yellow');
    } else if (ultimaHumedad > 70) {
      setColor('red');
    } else {
      setColor('blue');
    }

    if (viewRef.current) {
      viewRef.current.pulse(800);
    }
  }, [humedades]);

  return (
    <Animatable.View
      ref={viewRef}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <FontAwesome name="tint" size={30} color={color} />
      <Text style={{ color }}>{humedades[humedades.length - 1]}%</Text>
    </Animatable.View>
  );
};

export default HumedadIcon;
