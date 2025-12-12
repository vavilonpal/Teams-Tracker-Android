import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import TeamCard from '../components/TeamCard';
import { getAllTeams } from '../../../shared/api/teamsApi';

export default function TeamsListScreen({ navigation }) {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllTeams()
            .then(setTeams)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const handlePress = (team) => {
        navigation.navigate('TeamDetails', { teamId: team.id });
    };

    if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={teams}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <TeamCard team={item} onPress={handlePress} />}
            />
        </View>
    );
}
