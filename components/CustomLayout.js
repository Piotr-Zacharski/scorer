import { Layout, TopNav } from "react-native-rapi-ui";
import { StyleSheet, View } from "react-native";

export default function CustomLayout({ children }) {
  return (
    <Layout>
      <TopNav middleContent="ScoreKeeper" />
      <View style={styles.root}>{children}</View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    gap: 10,
    padding: 50,
    margin: 10,
  },
});
