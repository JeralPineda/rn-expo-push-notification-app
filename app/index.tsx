import { ThemedText } from "@/components/ThemedText";
import { Text, View } from "react-native";

export default function PushApp() {
  const {} = usePushNotifications();

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 5,
        flex: 1,
      }}
    >
      <ThemedText>Expo token</ThemedText>
    </View>
  );
}
function usePushNotifications() {
  throw new Error("Function not implemented.");
}
