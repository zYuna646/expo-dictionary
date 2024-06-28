import { Text, View } from "react-native";

export function Kosakata({ no, name, desc }) {
  return (
    <View style={{marginTop:'5%'}}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            width: "auto",
            fontWeight: "bold",
            fontSize: 17,
            paddingRight: "2%",
            paddingTop: "1%",
            paddingBottom: "1%",
            borderRadius: 20,
          }}
        >
          {no}
        </Text>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "#BBE9FF",
                maxWidth: "90%",
                fontWeight: "bold",
                fontSize: 17,
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingTop: "1%",
                paddingBottom: "1%",
                borderRadius: 20,
              }}
            >
              {name}
            </Text>
          </View>

          <Text
            style={{
              marginTop: "3%",
              fontSize: 14,
              marginLeft: "2%",
              textAlign: "justify",
            }}
          >
            {desc}
          </Text>
        </View>
      </View>
    </View>
  );
}
