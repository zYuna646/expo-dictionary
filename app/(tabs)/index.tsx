import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { data } from "@/constants/Kosakata";
import { Link, router } from "expo-router";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [search, onSearch] = useState("");

  // Extract major names from the data
  const majors = Object.keys(data).map((key, index) => ({
    id: index + 1,
    name: key,
    description: `Learn about ${key}`,
    vocab: data[key],
  }));

  // Filter majors based on search query
  const filteredMajors = majors.filter((major) =>
    major.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>
          PROGRAM KAMPUS MERDEKA : PMS UNG 2024 DI SMKN 3 GORONTALO
        </Text>
        <Text style={styles.subHeading}>Selamat Datang Di</Text>
        <Text style={styles.title}>Kamus Keteknikan</Text>
        <Text style={styles.description}>
          Silahkan Cari Jurusan Dibawah Ini!
        </Text>
      </View>
      <View style={styles.mainContent}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari Jurusan"
          onChangeText={onSearch}
          value={search}
        />
        <ScrollView style={styles.scrollView}>
          {filteredMajors.map((major) => (
            // <TouchableOpacity
            //   key={major.id}
            //   style={styles.majorCard}
            //   onPress={() => {
            //     router.setParams({ 'major': major.name });
            //     router.push('/DetailView');
            //   }}
            // >
            //   <View style={styles.textContainer}>
            //     <Text style={styles.majorName}>{major.name}</Text>
            //     <Text style={styles.majorDescription}>{major.description}</Text>
            //   </View>
            // </TouchableOpacity>
            <Link
              key={major.id}
              style={styles.majorCard}
              href={{ pathname: "DetailView", params: { key: major.name } }}
            >
              <View style={styles.textContainer}>
                <Text style={styles.majorName}>{major.name}</Text>
                <Text style={styles.majorDescription}>{major.description}</Text>
              </View>
            </Link>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BBE9FF",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    marginTop: "10%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFED3",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 10,
  },
  mainContent: {
    marginTop: "10%",
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    alignSelf: "center",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  searchInput: {
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 20,
    borderColor: "#BBE9FF",
    marginBottom: 10,
  },
  scrollView: {
    marginBottom: "5%",
  },
  majorCard: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  textContainer: {
    alignItems: "flex-start",
  },
  majorName: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
  },
  majorDescription: {
    fontSize: 16,
    color: "#777",
  },
});
