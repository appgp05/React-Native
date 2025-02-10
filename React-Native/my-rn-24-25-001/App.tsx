import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import LoginForm from './src/components/LoginForm/LoginForm';
import { UserDTO } from './src/dtos/UserDTO';
import PokemonList from './src/components/PokemonList/PokemonList';

export default function App() {
  //Lista de datos
  const data = [
    { key: 'Item1'},
    { key: 'Item2'},
    { key: 'Item3'},
    { key: 'Item4'},
    { key: 'Item5'},
  ]
  const userData: UserDTO = {
    id: '123',
    nombre: 'PEPO',
    email: 'asdasd@asd.com',
    edad: 18
  }

  return (
    <ScrollView>
      <LoginForm user={userData}></LoginForm>
      <PokemonList></PokemonList>
      <FlatList
        data={data}
        renderItem={({item}) => 
            <Text style={styles.item}>{item.key}</Text>
        }
        >
      </FlatList>
      <TextInput
        placeholder="Escribe aquí">
      </TextInput>
      <Button
        title="Presiona aquí!!"
        onPress={()=>{
          alert('Has pulsado el botón')
        }}
        >
      </Button>
      <Image
        source={{ uri:"https://th.bing.com/th/id/R.88f6bd707d1c5a919685075ca0fa2215?rik=3H%2b76CuXRc1neA&riu=http%3a%2f%2flogonoid.com%2fimages%2fghostbusters-logo.png&ehk=ncGl4ZCxDDGCRgS2za0kJhdih5Pxsx2BujPgYtf3eI4%3d&risl=&pid=ImgRaw&r=0" }}
        style={styles.image}
        >
      </Image>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:'100%',
    height:400
  },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  }
});