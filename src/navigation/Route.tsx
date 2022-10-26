import {createStackNavigator} from '@react-navigation/stack';
import {AddNewCharacter} from '../screens/AddNewCharacter';
import {CharacterList} from '../screens/CharacterList';
import {CharacterListDetails} from '../screens/CharacterListDetails';

const Stack = createStackNavigator();

function Route() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Simpson" component={CharacterList} />
      <Stack.Screen name="SimpsonDetails" component={CharacterListDetails} />
      <Stack.Screen name="AddNewCharacter" component={AddNewCharacter} />
    </Stack.Navigator>
  );
}
export default Route;
