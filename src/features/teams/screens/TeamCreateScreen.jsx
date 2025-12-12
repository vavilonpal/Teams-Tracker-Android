import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import api from '../../../shared/api/apiConnect'; // твой axios instance

export default function TeamCreateScreen({ navigation }) {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const handleSave = async () => {
        if (!name || !city) {
            Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
            return;
        }

        try {
            await api.post('/teams', { name, city });
            Alert.alert('Успешно', 'Команда добавлена');
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert('Ошибка', 'Не удалось добавить команду');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Добавить команду</Text>

            <TextInput
                style={styles.input}
                placeholder="Название команды"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Город"
                value={city}
                onChangeText={setCity}
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
