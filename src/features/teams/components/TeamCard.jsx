import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function TeamCard({ team, onPress, onEdit }) {
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
    editButton: {
        marginTop: 8,
        backgroundColor: '#1e90ff',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    editText: {
        color: '#fff',
        fontSize: 12,
    },
});
