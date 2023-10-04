import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Accueil from "../screens/Accueil";
import ReseauSocial from "../screens/ReseauSocial";
import Documents from "../screens/Documents";
import Parametre from "../screens/Parametre";
import Profil from "../screens/Profil";
import CustomBottomTab from "../components/BottomTabs/CustomBottomTab";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomBottomTab {...props} />}>
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen
          options={{ tabBarLabel: "Accueil" }}
          name="Accueil"
          component={Accueil}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Documents" }}
          name="Documents"
          component={Documents}
        />
        <Tab.Screen
          options={{ tabBarLabel: "BFbook" }}
          name="ReseauSocial"
          component={ReseauSocial}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Profil" }}
          name="Profil"
          component={Profil}
        />
        {/* <Tab.Screen
          options={{ tabBarLabel: "Paramètre" }}
          name="parametre"
          component={Parametre}
        /> */}
      </Tab.Group>
    </Tab.Navigator>
  );
}

export default BottomTabs;
