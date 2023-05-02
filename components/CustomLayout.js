import { Layout, TopNav } from 'react-native-rapi-ui';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const avatar = <Avatar.Image size={24} source={require('../assets/ja.png')} />;

const logout = <Ionicons name="log-out-outline" color="white" size={20} />;

// eslint-disable-next-line react/prop-types
export default function CustomLayout({ children }) {
    return (
        <Layout>
            <TopNav
                middleContent="ScoreKeeper"
                leftContent={avatar}
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
