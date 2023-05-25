import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/button'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Onboarding Screen</Text>
      <Button
                  title="Save"
                  family="medium"
                  style={{ backgroundColor: "red" , width:'90%'}}
                  textStyle={{ fontSize: 18, fontWeight: '800', color: '#FFFFFF', lineHeight: 25, }}
                  onPress={() => { console.log("yessss")}}
                />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
