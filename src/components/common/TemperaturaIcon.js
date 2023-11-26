import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const TemperaturaIcon = ({ temperaturas }) => {
  const viewRef = useRef(null);
  const [color, setColor] = useState('green');

  useEffect(() => {
    const ultimaTemperatura = temperaturas[temperaturas.length - 1];

    if (ultimaTemperatura < 10) {
      setColor('orange');
    } else if (ultimaTemperatura > 15) {
      setColor('red');
    } else {
      setColor('green');
    }

    if (viewRef.current) {
      viewRef.current.pulse(4000);
    }
  }, [temperaturas]);

  return (
    <Animatable.View
      ref={viewRef}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <FontAwesome name="thermometer" size={30} color={color} />
      <Text style={{ color }}>{temperaturas[temperaturas.length - 1]}°C</Text>
    </Animatable.View>
  );
};

export default TemperaturaIcon;
