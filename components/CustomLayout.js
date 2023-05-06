import { Layout, TopNav } from 'react-native-rapi-ui';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomAvatar } from './CustomAvatar';

// eslint-disable-next-line react/prop-types
export default function CustomLayout({ children, signOutUser }) {
    const logout = (
        <Ionicons
            onPress={signOutUser}
            name="log-out-outline"
            color="white"
            size={24}
        />
    );

    return (
        <Layout>
            <TopNav
                middleContent="ScoreKeeper"
                leftContent={
                    <CustomAvatar
                        size={24}
                        color="white"
                        style={{ backgroundColor: 'red' }}
                        label="PZ"
                    />
                }
                rightContent={logout}
            />
            <View style={styles.root}>{children}</View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        gap: 10,
        padding: 50,
        margin: 10,
    },
});
