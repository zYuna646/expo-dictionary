import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

// Mock data for developers (assuming you have developer data elsewhere)
const developers = [
  { id: 1, name: 'Agfasya Awaliyah Mohammad', role: 'Penyusun', imageUrl: '' },
  { id: 2, name: 'M. Tegar Yunus', role: 'Penyusun', imageUrl: '' },
  { id: 3, name: 'Stela Abdullah', role: 'Penyusun', imageUrl: '' },

  // Add more developers as needed
];

const placeholderImageUrl = 'https://avatar.iran.liara.run/public/46';

const Pengembang = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.title}>Daftar Pengembang</Text>
      <View style={styles.developerContainer}>
        {developers.map(developer => (
          <TouchableOpacity key={developer.id} style={styles.developerCard}>
            <Image source={{ uri: developer.imageUrl || placeholderImageUrl }} style={styles.developerImage} />
            <View style={styles.textContainer}>
              <Text style={styles.developerName}>{developer.name}</Text>
              <Text style={styles.developerRole}>{developer.role}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// Styling
const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  developerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  developerCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  developerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  textContainer: {
    alignItems: 'center',
  },
  developerName: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  developerRole: {
    fontSize: 16,
    color: '#777',
  },
});

export default Pengembang;
