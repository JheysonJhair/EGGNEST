import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const HumedadIcon = ({ humedades }) => {
  const viewRef = useRef(null);
  const [color, setColor] = useState('blue');

  useEffect(() => {
    const ultimaHumedad = humedades[humedades.length - 1];

    if (ultimaHumedad < 30) {
      setColor('#30afff');
    } else if (ultimaHumedad > 70) {
      setColor('#000be5')
    } else {
      setColor('#0f6bdb');
    }

    if (viewRef.current) {
      viewRef.current.pulse(800);
    }
  }, [humedades]);

  return (
    <Animatable.View
      ref={viewRef}
      style={{ alignItems: 'center', justifyContent: 'center', marginLeft:10, marginRight:10 }}
    >
      <FontAwesome name="tint" size={40} color={color} />
      <Text style={{ color }}>{humedades[humedades.length - 1]}%</Text>
    </Animatable.View>
  );
};

export default HumedadIcon;
