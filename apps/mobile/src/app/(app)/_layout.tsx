import { DrawerContents } from "@/components/DrawerContents";
import { DrawerHeader } from "@/components/DrawerHeader";
import { Drawer } from "expo-router/drawer";
import { FC } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const AppLayout: FC = () => {
  return (
    <Drawer
      screenOptions={{
        header: (props) => <DrawerHeader {...props} />,
        drawerPosition: "right",
      }}
      drawerContent={(props) => <DrawerContents {...props} />}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          drawerIcon: () => (
            <MaterialIcons name="home" size={24} color="black" />
          ),
        }}
      />
    </Drawer>
  );
};

export default AppLayout;
