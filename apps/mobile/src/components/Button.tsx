import { FC, ReactNode, RefAttributes } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface Props extends PressableProps, RefAttributes<View> {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Button: FC<Props> = ({ children, style, ...props }) => (
  <Pressable style={[styles.button, style]} {...props}>
    {children}
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#fff",
  },
});
