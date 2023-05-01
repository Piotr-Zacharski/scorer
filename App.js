import { ThemeProvider } from "react-native-rapi-ui";
import CustomLayout from "./components/CustomLayout";
import { StyleSheet, View } from "react-native";
import CustomButton, { buttons } from "./components/CustomButton";
import SignIn from "./components/SignIn";
import {useState} from "react";

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleSignInSuccess = () => {
        setIsAuthenticated(true);
    }


  return (
    <ThemeProvider theme="light">
      <CustomLayout>
          { isAuthenticated ? (<View style={styles.container}>
              {buttons.map(button => (
                  <CustomButton
                      key={button.name}
                      text={button.name}
                      size="lg"
                      style={styles.button}
                      rightContent={button.icon}
                      status="danger"
                      type="TouchableOpacity"
                  />
              ))}
          </View>) : (<SignIn onSignInSuccess={handleSignInSuccess} />)}
              </CustomLayout>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});

export default App;
