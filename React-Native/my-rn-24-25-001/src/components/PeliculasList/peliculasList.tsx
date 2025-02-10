import { useEffect, useState } from "react"
import { FlatList, Text } from "react-native";

interface Pelicula {
    id: string,
    titulo: string,
    descripcion: string,
    anio: number,
    imagen_url: string
}

const PeliculasList = () => {
    //HOOK
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);

    useEffect( () => {
        const fetchPeliculas = 
        async () => {
            try {
                const response = await fetch('http://192.168.104.70:300/peliculas')
                const data = await response.json();
                setPeliculas(data)
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchPeliculas();
    }, []);

    return (
        <FlatList
          data={peliculas}
          keyExtractor={item => item.titulo}
          renderItem={({ item }) => <Text>{item.titulo}</Text>}
        />
      );
}
export default PeliculasList