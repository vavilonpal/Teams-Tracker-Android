// src/features/teams/screens/TeamEditScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import api from '../../../shared/api/apiConnect';

export default function TeamEditScreen({ route, navigation }) {
    const { teamId } = route.params;
    const [name, setName] = useState('');
    const [coachName, setCoachName] = useState('');
    const [leagueName, setLeagueName] = useState('');

    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await api.get(`/teams/${teamId}`);
                setName(response.data.name);
                setCity(response.data.city);
            } catch (error) {
                console.error(error);
                Alert.alert('Ошибка', 'Не удалось загрузить данные команды');
            } finally {
                setLoading(false);
            }
        };
        fetchTeam();
    }, [teamId]);

    const handleSave = async () => {
        if (!name) {
            Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
            return;
        }

        try {
            await api.put(`/teams/${teamId}`, { name});
            Alert.alert('Успешно', 'Команда обновлена');
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert('Ошибка', 'Не удалось обновить команду');
        }
    };

    if (loading) return <Text style={{ padding: 16 }}>Загрузка...</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Редактировать команду</Text>

            <TextInput
                style={styles.input}
                placeholder="Название команды"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Тренер"
                value={coachName}
                onChangeText={setCoachName}
            />
            <TextInput
                style={styles.input}
                placeholder="Лига"
                value={leagueName}
                onChangeText={setLeagueName}
            />
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Сохранить</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 },
    input: {
        borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
        padding: 12, marginBottom: 16, backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#1e90ff', padding: 16, borderRadius: 8, alignItems: 'center'
    },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
