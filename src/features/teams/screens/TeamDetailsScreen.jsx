import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getTeamById } from '../../../shared/api/teamsApi';
import MatchCard from '../../matches/components/MatchCard';

export default function TeamDetailsScreen({ route }) {
    const { teamId } = route.params;
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTeamById(teamId)
            .then(setTeam)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [teamId]);

    if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

    if (!team) return <Text style={{ padding: 12 }}>Команда не найдена</Text>;

    return (
        <View style={{ flex: 1, padding: 12 }}>
            <Text style={styles.name}>{team.name}</Text>
            {team.coachName && <Text>Coach: {team.coachName}</Text>}
            {team.leagueName && <Text>League: {team.leagueName}</Text>}

            <Text style={styles.sectionTitle}>Players:</Text>
            <FlatList
                data={team.playerNames}
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={({ item }) => <Text style={styles.player}>{item}</Text>}
            />

            <Text style={styles.sectionTitle}>Home Matches:</Text>
            <FlatList
                data={team.homeMatches}
                keyExtractor={(item, index) => `home-${index}`}
                renderItem={({ item }) => <MatchCard match={item} />}
            />

            <Text style={styles.sectionTitle}>Away Matches:</Text>
            <FlatList
                data={team.awayMatches}
                keyExtractor={(item, index) => `away-${index}`}
                renderItem={({ item }) => <MatchCard match={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    name: { fontSize: 22, fontWeight: 'bold', marginBottom: 6 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 6 },
    player: { fontSize: 16, paddingVertical: 2 },
});
