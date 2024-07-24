import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

// Mock data for mentors (assuming you have mentor data elsewhere)
const mentors = [
  { id: 1, name: 'Dr. Harto S. Malik', expertise: 'Dosen Pembimbing', imageUrl: '' },
  { id: 2, name: 'Maryam Jusuf, M.Pd', expertise: 'Guru Pamong', imageUrl: '' },
  // Add more mentors as needed
];

const placeholderImageUrl = 'https://avatar.iran.liara.run/public/46';

const Pembimbing = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.title}>Daftar Pembimbing</Text>
      <View style={styles.mentorContainer}>
        {mentors.map(mentor => (
          <TouchableOpacity key={mentor.id} style={styles.mentorCard}>
            <Image source={{ uri: mentor.imageUrl || placeholderImageUrl }} style={styles.mentorImage} />
            <View style={styles.textContainer}>
              <Text style={styles.mentorName}>{mentor.name}</Text>
              <Text style={styles.mentorExpertise}>{mentor.expertise}</Text>
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
  mentorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  mentorCard: {
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
  mentorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  textContainer: {
    alignItems: 'center',
  },
  mentorName: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  mentorExpertise: {
    fontSize: 16,
    color: '#777',
  },
});

export default Pembimbing;
