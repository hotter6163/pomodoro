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
import { useAuthState } from "@/hooks/useAuthState";
import { useSignOut } from "@/hooks/useSignOut";

interface Props extends DrawerContentComponentProps {}

export const DrawerContents: FC<Props> = (props) => {
  const { user } = useAuthState();
  const { signOut } = useSignOut();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {user ? (
        <DrawerItem
          label="SignOut"
          icon={() => <MaterialIcons name="logout" size={24} color="black" />}
          onPress={() => {
            props.navigation.closeDrawer();
            signOut();
          }}
        />
      ) : (
        <DrawerItem
          label="SingIn"
          icon={() => <MaterialIcons name="login" size={24} color="black" />}
          onPress={() => {
            props.navigation.closeDrawer();
            router.push("(auth)/signin");
          }}
        />
      )}
    </DrawerContentScrollView>
  );
};
