//Bloco de importação dos componentes
import { StyleSheet, View } from 'react-native';
import Title from './src/components/title';
import Form from './src/components/Form';

//Define a função do componente principal do aplicativo
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 80,
  },
});