import { FlatList, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { usePushnotifications } from "@/hooks/usePushNotifications";

export default function PushApp() {
  const { expoPushToken, notifications } = usePushnotifications();

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginTop: 5,
        flex: 1,
      }}
    >
      {/* <ThemedText>Token: {expoPushToken}</ThemedText> */}

      <ThemedText
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        Notificaciones
      </ThemedText>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.request.identifier}
        renderItem={({ item }) => (
          <View>
            <ThemedText
              style={{
                fontWeight: "bold",
              }}
            >
              {item.request.content.title}
            </ThemedText>
            <ThemedText>{item.request.content.body}</ThemedText>
            <ThemedText>
              {JSON.stringify(item.request.content.data, null, 2)}
            </ThemedText>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: "gray",
              opacity: 0.3,
              marginVertical: 10,
            }}
          />
        )}
      />
    </View>
  );
}
