import { FlatList, Text, View } from "react-native"
import { useCharacter } from "../hooks/useCharacter";

export default function HomeScreen() {

    const { characters, loading } = useCharacter();

    return (
        <View>
            <FlatList
                data={characters}
                renderItem={({ item }) => (<Text>{item.name}</Text>)}
                keyExtractor={item => "id : " + item.id}
            />
        </View>
    );

}