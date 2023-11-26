
import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';

const AguaIcon = ({ velocidades }) => {
  const viewRef = useRef(null);
  const [color, setColor] = useState('gray');

  useEffect(() => {
    const ultimaVelocidad = velocidades[velocidades.length - 1];

    if (ultimaVelocidad === 'baja') {
      setColor('#09b2f4');
    } else if (ultimaVelocidad === 'media') {
      setColor('#0958f4');
    } else if (ultimaVelocidad === 'alta') {
      setColor('#0132b7');
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
      style={{ alignItems: 'center', justifyContent: 'center', marginLeft:10, marginRight:10 }}
    >
      <MaterialCommunityIcons name="barrel" size={40} color={color} />
      <Text style={{ color }}>{velocidades[velocidades.length - 1]}</Text>
    </Animatable.View>
  );
};

export default AguaIcon;
