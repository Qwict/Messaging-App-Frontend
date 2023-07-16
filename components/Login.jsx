import { TextInput, StyleSheet, Text } from "react-native";
import { View } from "react-native-web";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput placeholder="Username" 
                style={styles.input}
            />
            <TextInput placeholder="Password"
                style={styles.input}
                secureTextEntry={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ecf0f1',
        maxHeight: 300,
        borderRadius: 10,
    }
  });