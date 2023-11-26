
import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const VentilacionIcon = ({ velocidades }) => {
  const viewRef = useRef(null);
  const [color, setColor] = useState('gray');

  useEffect(() => {
    const ultimaVelocidad = velocidades[velocidades.length - 1];

    if (ultimaVelocidad === 'baja') {
      setColor('yellow');
    } else if (ultimaVelocidad === 'media') {
      setColor('green');
    } else if (ultimaVelocidad === 'alta') {
      setColor('red');
    } else {
      setColor('gray');
    }

    if (viewRef.current) {
      viewRef.current.pulse(800);
    }
  }, [velocidades]);

  return (
    <Animatable.View
      ref={viewRef}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <MaterialCommunityIcons name="fan" size={30} color={color} />
      <Text style={{ color }}>{velocidades[velocidades.length - 1]}</Text>
    </Animatable.View>
  );
};

export default VentilacionIcon;
