import React from "react";
import { Image, StyleSheet, Dimensions, Text, View, ScrollView, FlatList } from 'react-native';

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "../../componentes/Texto";


export default function Cesta({topo, detalhes, itens}){
    return <>
        <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo}/>
                    <View style={estilos.body}>
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.tituloItens}>{ itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    body:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    
    tituloItens:{
        paddingVertical: 16,
        fontSize: 26,
        fontWeight: "bold"
    },
})