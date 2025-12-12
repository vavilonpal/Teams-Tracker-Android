import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { getAllTeams } from '../../../shared/api/teamsApi';
import { getAllMatches } from '../../../shared/api/matchesApi';
import TeamCard from '../../teams/components/TeamCard';
import MatchCard from '../../matches/components/MatchCard';

export default function HomeScreen({ navigation }) {
    const [teams, setTeams] = useState([]);
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([getAllTeams(), getAllMatches()])
            .then(([teamsData, matchesData]) => {
                setTeams(teamsData.slice(0, 3)); // показываем 3 последних команды
                setMatches(matchesData.slice(0, 3)); // 3 последних матча
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

    const handleTeamPress = (team) => {
        navigation.navigate('Teams', { screen: 'TeamDetailsScreen', params: { teamId: team.id } });
    };

    const handleEditTeam = (team) => {
        navigation.navigate('Teams', { screen: 'TeamEditScreen', params: { teamId: team.id } });
    };


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Welcome to SportsApp!</Text>

            <View style={styles.section}>
                <View style={styles.header}>
                    <Text style={styles.sectionTitle}>Latest Teams</Text>
                </View>
                <FlatList
                    data={teams}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id ? item.id : index.toString()}
                    renderItem={({ item }) => (
                        <TeamCard
                            team={item}
                            onPress={() => handleTeamPress(item)}
                            onEdit={() => handleEditTeam(item)}
                        />
                    )}
                />
            </View>

            <View style={styles.section}>
                <View style={styles.header}>
                    <Text style={styles.sectionTitle}>Recent Matches</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Matches')}>
                        <Text style={styles.link}>See All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={matches}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => `${item.homeTeamName}-${item.awayTeamName}-${index}`}
                    renderItem={({ item }) => <MatchCard match={item} />}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 12 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
    section: { marginBottom: 20 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold' },
    link: { fontSize: 14, color: '#1e90ff', marginLeft: 12 },
});
