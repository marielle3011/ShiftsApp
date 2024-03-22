import React from "react";
import { Text, View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import place1 from "./place1";
import place2 from "./place2";
import place3 from "./place3";

function AvailableShifts() {
    const navigation = useNavigation();

    const goToPlace = (placeName) => {
        switch (placeName) {
            case "place1":
                navigation.navigate("Place 1", { screen: place1 });
                break;
            case "place2":
                navigation.navigate("Place 2", { screen: place2 });
                break;
            case "place3":
                navigation.navigate("Place 3", { screen: place3 });
                break;
            default:
                break;
        }
    };

    return (
        <View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Place 1"
                    onPress={() => goToPlace(place1)}
                />
                <Button
                    title="Go to Place 2"
                    onPress={() => goToPlace(place2)}
                />
                <Button
                    title="Go to Place 3"
                    onPress={() => goToPlace(place3)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default AvailableShifts;
