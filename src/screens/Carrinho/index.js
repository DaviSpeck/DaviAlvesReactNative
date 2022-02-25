import React from 'react'
import { ScrollView } from 'react-native';

import Detalhes from './components/Detalhes';
import Topo from './components/Topo';
import Lista from './components/Lista';


export default function Carrinho ({topo, detalhes, itens}){
    return  <ScrollView>
                <Topo {...topo} />
                <Detalhes {...detalhes}/>
                <Lista {...itens}/>
            </ScrollView>
}
