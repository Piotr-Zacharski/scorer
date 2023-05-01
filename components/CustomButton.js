import { Button } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export const buttons = [
  {
    name: "Dodaj grę",
    icon: <Ionicons name="add-circle-outline" size={20} color="white" />,
  },
  {
    name: "Usuń grę",
    icon: <Ionicons name="trash-outline" size={20} color="white" />,
  },
  {
    name: "Zapisz grę",
    icon: <Ionicons name="save-outline" size={20} color="white" />,
  },
  {
    name: "Dodaj gracza",
    icon: <Ionicons name="person-add-outline" size={20} color="white" />,
  },
  {
    name: "Usuń gracza",
    icon: <Ionicons name="person-remove-outline" size={20} color="white" />,
  },
  {
    name: "Podaj czas",
    icon: <Ionicons name="time-outline" size={20} color="white" />,
  },
];

export default function CustomButton({
  text,
  size,
  style,
  rightContent,
  status,
  type,
  onPress,
}) {
  return (
    <Button
      text={text}
      size={size}
      style={style}
      rightContent={rightContent}
      status={status}
      type={type}
      onPress={onPress}
    />
  );
}
