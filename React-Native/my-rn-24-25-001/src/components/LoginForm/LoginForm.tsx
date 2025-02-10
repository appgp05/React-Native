import { Button, Text, View } from "react-native";
import { UserDTO } from "../../dtos/UserDTO";


interface LoginFormProps{
    user: UserDTO;
}

//export default function LoginForm(props: any){
// Object destruction
    // const {name} = props;
    const LoginForm = ( {user}: LoginFormProps ) =>{
        const {id, nombre, email} = user;
        const name1 = user.nombre;
        return(
            <View>
                <Text>Componente 1</Text>
                <Text>{name1}</Text>
                <Text>{nombre}</Text>
                <Text>Componente 1</Text>
                <Text>Componente 1</Text>
                <Button title='Enviar' 
                        onPress={
                            () => {alert('LoginForm')}
                        } />
            </View>
        );
    }
    export default LoginForm;2