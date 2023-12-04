import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import imgTopo from '../../../assets/topo.png'
import Texto from '../../../componentes/Texto';



export default function Topo({titulo}){
    return <>
        <Image source={imgTopo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
}


const width = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
    topo:{
        width: '100%',
        height: 578/ 768 * width
    },

    titulo:{
        position: 'absolute',
        width:  '100%',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        lineHeight: 52,
        marginTop: 16,
        fontWeight: "bold"
    }
})