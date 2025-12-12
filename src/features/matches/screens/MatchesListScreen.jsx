import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import MatchCard from '../components/MatchCard';
import { getAllMatches } from '../../../shared/api/matchesApi';

export default function MatchesListScreen({ navigation }) {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllMatches()
            .then(setMatches)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {loading ? (
                <ActivityIndicator size="large" style={{ flex: 1 }} />
            ) : (
                <FlatList
                    data={matches}
                    keyExtractor={(item, index) => `${item.homeTeamName}-${item.awayTeamName}-${index}`}
                    renderItem={({ item }) => <MatchCard match={item} />}
                />
            )}
        </View>
    );
}
