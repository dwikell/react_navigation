import React from "react";
// import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import ProfileScreen from "./ProfileScreen";

// Membuat tumpukan navigasi (stack navigator) dengan menggunkan libary React Navigasi
const Stack = createStackNavigator();

const App = () => {
    return(
        // <View>
        //     <Text>
        //         Satu
        //     </Text>
        // </View>

        // mengelola navigasi dalam aplikasi menggunakan React Navigation
        <NavigationContainer>
            {/* Inisialisasi tumpukan navigator dengan rute awal yang ditentukan sebagai "Home" */}
            <Stack.Navigator initialRouteName="Home">
                {/* Setiap "Stack.Screen" mrepresentasikan satu rute (layar) dalam tumpukan navigator. Anda dapat menambahkan lebih banyak Stack.Screen sesuai dengan kebutuhan aplikasi. */}
                {/* Contoh: */}
                {/* <Stack.Screen name="NamaRute" component={NamaRuteComponent} /> */}

                {/* Layar "Home" akan menggunakan komponen HomeScreen untuk tampilannya */}
                <Stack.Screen name="Home" component={HomeScreen} />
                {/* Layar "Details" akan menggunakan komponen DetailScreen untuk tampilannya */}
                <Stack.Screen name="Details" component={DetailScreen} />
                {/* Layar "Profiles" akan menggunakan komponen ProfilesScreen untuk tampilannya */}
                <Stack.Screen name="Profiles" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;