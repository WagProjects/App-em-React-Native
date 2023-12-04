import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/Itens";


export default function Cesta({topo, detalhes, itens}){
    return <>
        <Topo {...topo}/>
        <View style={estilos.body}>
            <Detalhes {...detalhes}/>
            <Itens {...itens} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    body:{
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})