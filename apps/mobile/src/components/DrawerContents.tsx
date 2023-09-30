import {
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import { FC } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

interface Props extends DrawerContentComponentProps {}

export const DrawerContents: FC<Props> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="SingIn"
        icon={() => <MaterialIcons name="login" size={24} color="black" />}
        onPress={() => {
          props.navigation.closeDrawer();
          router.push("(auth)/signin");
        }}
      />
    </DrawerContentScrollView>
  );
};
