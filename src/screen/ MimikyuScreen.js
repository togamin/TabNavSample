import React from 'react';
import { Text, View, Image} from 'react-native';
import { styles } from '../style/common';

export function MimikyuScreen(){
  return(
    <View style={styles.container} >
        <Text style={styles.pokeName}>ミミッキュ</Text>
        <Image
          source={require('../../assets/mmk.png')}
          resizeMode='contain'
          style={{ width: 200, height: 200 }}
        />
    </View>
  );
}