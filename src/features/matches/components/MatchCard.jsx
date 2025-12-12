import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MatchCard({ match }) {
    return (
        <View style={styles.card}>
            <Text style={styles.teams}>
                {match.homeTeamName} vs {match.awayTeamName}
            </Text>
            <Text>League: {match.leagueName}</Text>
            {match.matchDateTime && <Text>Date: {new Date(match.matchDateTime).toLocaleString()}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 12,
        marginVertical: 6,
        marginHorizontal: 12,
        backgroundColor: '#e6f7ff',
        borderRadius: 10,
        elevation: 2,
    },
    teams: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
});
