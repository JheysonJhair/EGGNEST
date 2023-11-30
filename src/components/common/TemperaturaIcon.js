import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const TemperaturaIcon = ({ temperatura }) => {
  const viewRef = useRef(null);
  const [color, setColor] = useState('green');

  useEffect(() => {
    if (temperatura < 10) {
      setColor('orange');
    } else if (temperatura > 15) {
      setColor('red');
    } else {
      setColor('green');
    }

    if (viewRef.current) {
      viewRef.current.pulse(4000);
    }
  }, [temperatura]);

  return (
    <Animatable.View
      ref={viewRef}
      style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}
    >
      <FontAwesome name="thermometer" size={50} color={color} />
      <Text style={{ color }}>{temperatura}°C</Text>
    </Animatable.View>
  );
};

export default TemperaturaIcon;
