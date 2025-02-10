import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

interface Pokemon {
  name: string;
}

const PokemonList = () => {
/*    useState es un hook de React que permite agregar estado a un 
    componente funcional. En este caso, 
    se está declarando una variable de estado 
    llamada pokemons y una función para actualizarla llamada setPokemons.
*/  
const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    // DATA, FUNCIÓN ¿CUÁNDO? -> useEffect()
    // Expone variables DE ESTADO para ser actualizadas desde otro Hook
    // Y SU FUNCIÓN O ACCIÓN ACTUALIZADORA
  /* ON LOAD -> DESPUÉS DEL RENDERIZADO, PERO ANTES DE USUARIO */  
  useEffect(() => {
    const fetchPokemons = 
        async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
            const data = await response.json();
            setPokemons(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

    fetchPokemons();
  }, []); // Este arreglo vacío significa que se ejecuta solo una vez, 
            // Si tuviera parámetros, dependería de ellos.

  return (
    <FlatList
      data={pokemons}
      keyExtractor={item => item.name}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default PokemonList;
