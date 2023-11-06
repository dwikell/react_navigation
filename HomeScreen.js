import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>

            <TouchableOpacity
            // onPress adalah komponen yang merespon tindakan ketika elemen tersebut ditekan (klik atau sentuh)
            // navigation.navigate adalah kode yang digunakan untuk memicu perpindahan ke layar (screen)
            // Detail adalah nama route yang akan dikunjungi
            onPress={() => navigation.navigate("Details")}
            style={{ backgroundColor: "blue", padding: 10, marginTop: 10}}
            >
                <Text style={{ color: "white" }}>Details</Text>
            </TouchableOpacity>

            <TouchableOpacity
            // onPress adalah komponen yang merespon tindakan ketika elemen tersebut ditekan (klik atau sentuh)
            // navigation.navigate adalah kode yang digunakan untuk memicu perpindahan ke layar (screen)
            // Detail adalah nama route yang akan dikunjungi
            onPress={() => navigation.navigate("Profiles")}
            style={{ backgroundColor: "red", padding: 10, marginTop: 10}}
            >
                <Text style={{ color: "white" }}>Profiles</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HomeScreen;