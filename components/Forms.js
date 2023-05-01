import { useState } from "react";
import { View } from "react-native";
import { Picker, Text, Section, SectionContent } from "react-native-rapi-ui";

const Forms = () => {
  const [pickerValue, setPickerValue] = useState(null);
  const items = [
    { label: "Everdell", value: "Everdell" },
    { label: "Talizman", value: "Talizman" },
    { label: "Terraformacja Marsa", value: "Terraformacja Marsa" },
    { label: "Uno", value: "Uno" },
    { label: "Wirus", value: "Wirus" },
    { label: "Santorini", value: "Santorini" },
    { label: "Carcassonne", value: "Carcassonne" },
    { label: "Dixit", value: "Dixit" },
    { label: "Hero Realms", value: "Hero Realms" },
  ];
  return (
    <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
      <SectionContent>
        <View>
          <Text style={{ marginBottom: 10 }}>Picker</Text>
          <Picker
            items={items}
            value={pickerValue}
            placeholder="Wybierz grę"
            onValueChange={val => setPickerValue(val)}
          />
        </View>
        <View>
          <Text>{pickerValue}</Text>
        </View>
      </SectionContent>
    </Section>
  );
};

export default Forms;
