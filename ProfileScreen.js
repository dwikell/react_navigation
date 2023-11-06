import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

// Layar Profile
const ProfileScreen = ({ navigation }) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>

            <TouchableOpacity
            // onPress adalah komponen yang merespon tindakan ketika elemen tersebut ditekan (klik atau sentuh)
            // navigation.navigate adalah kode yang digunakan untuk memicu perpindahan ke layar (screen)
            // Detail adalah nama route yang akan dikunjungi
            onPress={() => navigation.navigate('Home')}
            style={{ backgroundColor: 'black', padding: 10, marginTop: 10}}
            >
                <Text style={{ color: 'white' }}>Go to home</Text>
            </TouchableOpacity>
        </View>
    );
}
export default ProfileScreen;