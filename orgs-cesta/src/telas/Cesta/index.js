import React from "react";
import Detalhes from "./componentes/Detalhes";
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import Topo from "./componentes/Topo";

export default function Cesta({topo, detalhes}){
    return <>
        <Topo {...topo}/>
        <View style={estilos.body}>
            <Detalhes {...detalhes}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    body:{
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})