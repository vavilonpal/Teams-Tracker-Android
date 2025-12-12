import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, TouchableOpacity, StyleSheet } from 'react-native';
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

    const handleEdit = (team) => {
        navigation.navigate('TeamEdit', { teamId: team.id });
    };

    const handleAdd = () => {
        navigation.navigate('TeamCreate');
    };

    if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                <Text style={styles.addButtonText}>+ Добавить команду</Text>
            </TouchableOpacity>

            <FlatList
                data={teams}
                keyExtractor={(item) => item.name.toString()}
                renderItem={({ item }) => (
                    <TeamCard
                        team={item}
                        onPress={() => handlePress(item)}
                        onEdit={() => handleEdit(item)}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 12, backgroundColor: '#f2f2f2' },
    addButton: {
        backgroundColor: '#1e90ff',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 12
    },
    addButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

