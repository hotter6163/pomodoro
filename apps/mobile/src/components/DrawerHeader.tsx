import { Color } from "@/constants/Color";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SimpleLineIcons } from "@expo/vector-icons";

interface Props extends DrawerHeaderProps {}

const Height = 100;

export const DrawerHeader: FC<Props> = ({
  layout,
  options,
  route,
  navigation,
}) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: top,
          marginBottom: route.name === "index" ? -1 * (top * Height) : "auto",
        },
      ]}
    >
      <Pressable
        style={styles.iconButton}
        onPress={() => navigation.toggleDrawer()}
      >
        <SimpleLineIcons name="menu" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.brand,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,

    height: Height,
  },
  iconButton: {
    padding: 8,
  },
});
