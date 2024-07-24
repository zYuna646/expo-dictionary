import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Kosakata } from '@/components/Kosakata';
import { data } from '@/constants/Kosakata';

const DetailView = () => {
  const vocab = data.infomartika;
  const [search, setSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(null);

  // Transform the data object into an array and sort it alphabetically by keys
  const sortedData = Object.keys(vocab)
    .sort()
    .map((key, index) => ({
      no: index + 1,
      name: key,
      desc: vocab[key],
    }));

  // Filter and group data by the first letter
  const filteredData = sortedData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedLetter ? item.name.charAt(0).toUpperCase() === selectedLetter : true)
  );

  const groupedData = filteredData.reduce((acc, item) => {
    const firstLetter = item.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <ScrollView style={styles.scrollViewContent}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Kamus Keteknikan</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari Kosakata"
        onChangeText={setSearch}
        value={search}
      />
      <View style={styles.alphabetContainer}>
        <TouchableOpacity
          onPress={() => setSelectedLetter(null)}
        >
          <Text style={[styles.alphabetLetter, selectedLetter === null && styles.selectedLetter]}>
            All
          </Text>
        </TouchableOpacity>
        {alphabet.split("").map(letter => (
          <TouchableOpacity
            key={letter}
            onPress={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
          >
            <Text style={[styles.alphabetLetter, selectedLetter === letter && styles.selectedLetter]}>
              {letter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {Object.keys(groupedData).map(letter => (
        <View key={letter}>
          <Text style={styles.letterTitle}>{letter}</Text>
          {groupedData[letter].map(item => (
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
  );
}

// Styling
const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
  },
  searchInput: {
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 20,
    borderColor: "#BBE9FF",
    marginBottom: 10,
  },
  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  alphabetLetter: {
    fontSize: 18,
    margin: 5,
    color: '#000',
  },
  selectedLetter: {
    color: 'blue',
    fontWeight: 'bold',
  },
  letterTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
  },
});

export default DetailView;
