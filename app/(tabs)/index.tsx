import React, { useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, View, TextInput } from "react-native";
import { Kosakata } from "@/components/Kosakata";
import { data } from "@/constants/Kosakata";

export default function HomeScreen() {
  const [search, onSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUWYZ";

  // Transform the data object into an array and sort it alphabetically by keys
  const sortedData = Object.keys(data)
    .sort()
    .map((key, index) => ({
      no: index + 1,
      name: key,
      desc: data[key],
    }));

  // Filter data based on search query and selected letter
  const filteredData = sortedData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesSelected = selected ? item.name.charAt(0).toUpperCase() === selected : true;
    return matchesSearch && matchesSelected;
  });

  // Group data by the first letter
  const groupedData = filteredData.reduce((acc, item) => {
    const firstLetter = item.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

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
          <View
            style={{
              marginTop: "5%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => setSelected(null)}>
              <Text style={{ fontSize: 18, color: selected === null ? 'blue' : 'black' }}>All</Text>
            </TouchableOpacity>
            {alphabet.split("").map((item) => (
              <TouchableOpacity key={item} onPress={() => setSelected(item)}>
                <Text style={{ fontSize: 18, color: selected === item ? 'blue' : 'black' }}>{item}</Text>
              </TouchableOpacity>
            ))}
          
          </View>

          <ScrollView style={{ marginTop: "5%", marginBottom: "5%" }}>
            {Object.keys(groupedData).map((letter) => (
              <View key={letter}>
                <Text style={{ fontWeight: "bold", fontSize: 24, marginTop: 10 }}>
                  {letter}
                </Text>
                {groupedData[letter].map((item) => (
                  <Kosakata
                    key={item.no}
                    no={item.no}
                    name={item.name}
                    desc={item.desc}
                  />
                ))}
              </View>
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
