import { Button } from 'react-native-rapi-ui';
import { add, gameController, personAdd } from '../utils/icons';

export const buttons = [
    {
        name: 'Dodaj grę',
        icon: add,
    },
    {
        name: 'Dodaj gracza',
        icon: personAdd,
    },
    {
        name: 'Dodaj rozgrywkę',
        icon: gameController,
    },
];

// eslint-disable-next-line react/prop-types
export default function CustomButton({
    text,
    size,
    style,
    rightContent,
    status,
    type,
    onPress,
}) {
    return (
        <Button
            text={text}
            size={size}
            style={style}
            rightContent={rightContent}
            status={status}
            type={type}
            onPress={onPress}
        />
    );
}
