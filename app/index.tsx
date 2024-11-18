import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { usePushnotifications } from "@/hooks/usePushNotifications";

export default function PushApp() {
  const { expoPushToken } = usePushnotifications();

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 5,
        flex: 1,
      }}
    >
      <ThemedText>Token: {expoPushToken}</ThemedText>
    </View>
  );
}
