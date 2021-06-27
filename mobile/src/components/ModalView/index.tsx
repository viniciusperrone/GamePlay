import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps
} from 'react-native';

import { style } from './style';

import { Background } from '../Background';

type Props = ModalProps & {
  children: ReactNode;
}

const ModalView = ({children, ...rest}: Props) => {
  return (
    <Modal
      transparent
      animationType="slide"
      {...rest}
    >
      <View style={style.overlay}>
        <View style={style.container}>
          <Background>
            <View style={style.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}

export default ModalView;