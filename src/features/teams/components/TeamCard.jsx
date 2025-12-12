import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TeamCard({ team, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress(team)}>
            <Text style={styles.name}>{team.name}</Text>
            {team.coachName && <Text>Coach: {team.coachName}</Text>}
            {team.leagueName && <Text>League: {team.leagueName}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 12,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        elevation: 2,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
});
