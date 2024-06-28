import React, { useState } from "react";
import { Image, StyleSheet, Platform, ScrollView } from "react-native";
import { Text, View, TextInput } from "react-native";
import { Kosakata } from "@/components/Kosakata";
import { data } from "@/constants/Kosakata";

export default function HomeScreen() {
  const [search, onSearch] = useState("");

  // Transform the data object into an array and sort it alphabetically by keys
  const sortedData = Object.keys(data)
    .sort()
    .map((key, index) => ({
      no: index + 1,
      name: key,
      desc: data[key]
    }));

  // Filter data based on search query
  const filteredData = sortedData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#BBE9FF" }}>
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: "10%", width: "90%", alignSelf: "center" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Selamat Datang Di
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#FFFED3" }}>
            Kamus Informatika
          </Text>
          <Text style={{ fontSize: 15, textAlign: "justify" }}>
            Silahkan Cari Kosakata Yang Ingin Anda Pelajari Dibawah Ini!
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: "white",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          width: "100%",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "90%",
            alignSelf: "center",
            marginTop: "10%",
          }}
        >
          <View>
            <TextInput
              style={{
                borderWidth: 1,
                height: 50,
                padding: 10,
                borderRadius: 20,
                borderColor: "#BBE9FF",
              }}
              placeholder="Cari Kosakata"
              onChangeText={onSearch}
              value={search}
            />
          </View>

          <ScrollView style={{ marginTop: "5%" , marginBottom:'5%',}}>
            {filteredData.map((item) => (
              <Kosakata
                key={item.no}
                no={item.no}
                name={item.name}
                desc={item.desc}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
