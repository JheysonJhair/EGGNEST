import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
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
      style={{ alignItems: 'center', justifyContent: 'center', marginLeft:10, marginRight:10 }}
    >
      <FontAwesome name="thermometer" size={40} color={color} />
      <Text style={{ color }}>{temperaturas[temperaturas.length - 1]}°C</Text>
    </Animatable.View>
  );
};

export default TemperaturaIcon;
