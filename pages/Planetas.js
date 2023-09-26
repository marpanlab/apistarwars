import React, { useState, useEffect } from 'react';
import { Text, View, FlatList,SafeAreaView } from 'react-native'; 
import estilo from '../components/estiloRebeldes';

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/planets/'); 
  const parsed = await response.json();
  callback(parsed.results);
}

export default function Planetas() {
 const [registros, setRegistros] = useState([]);

 useEffect(() => { 
  request(setRegistros);
 },[])


 return (
  <SafeAreaView style={estilo.container}>
   <View>
    <Text style={estilo.superior}>
    Planetas Star Wars 
    </Text> 
   </View>

   <FlatList
   data={registros}
   keyExtractor={(item) => item.name.toString()} 
   renderItem={({item}) =>
    <Text style={estilo.item}>
    <Text> Nome: {item.name}{'\n'}</Text> 
    <Text> Periodo de rotação: {item.rotation_period}{'\n'}</Text> 
    <Text> Periodo de Orbita: {item.orbital_period}{'\n'}</Text> 
    <Text> Diametro: {item.diameter}{'\n'}</Text>
    <Text> Clima: {item.climate}{'\n'}</Text>
    <Text> Gravidade: {item.gravity}{'\n'}</Text>
    <Text> Terreno: {item.terrain}{'\n'}</Text>
    <Text> Tem agua?: {item.surface_water}{'\n'}</Text>
    <Text> População: {item.population}{'\n'}</Text>
   </Text>
 }/>

  </SafeAreaView>
 );
}