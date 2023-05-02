import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker, Section, SectionContent, Text } from 'react-native-rapi-ui';
import { getDocs } from 'firebase/firestore';
import { colRef } from '../firebase-config';

const Forms = () => {
    const [gameValue, setGameValue] = useState('');
    const [playerValue, setPlayerValue] = useState('');
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        const getGames = async () => {
            const data = await getDocs(colRef);
            setGameList(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    name: doc.data().name,
                }))
            );
        };
        getGames();
    }, []);

    const players = [
        { label: 'Ania', value: 'Ania' },
        { label: 'Piotrek', value: 'Piotrek' },
    ];

    return (
        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
            <SectionContent style={styles.container}>
                <View>
                    <Picker
                        items={
                            gameList?.length > 0
                                ? gameList.map((list) => ({
                                      label: list.name,
                                      value: list.name,
                                  }))
                                : [{ label: 'Loading...', value: null }]
                        }
                        value={gameValue}
                        placeholder="Wybierz grę"
                        onValueChange={(val) => setGameValue(val)}
                    />
                </View>
                <View>
                    <Picker
                        items={players}
                        value={playerValue}
                        placeholder="Wybierz gracza"
                        onValueChange={(val) => setPlayerValue(val)}
                    />
                </View>
                <View>
                    <Text>{gameValue}</Text>
                    <Text>{playerValue}</Text>
                </View>
            </SectionContent>
        </Section>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 20,
    },
});

export default Forms;
