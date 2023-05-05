import {Button} from 'react-native-rapi-ui';

// eslint-disable-next-line react/prop-types
export default function CustomButton({
    text,
    size,
    style,
    rightContent,
    status,
    type,
    onPress,
    leftContent,
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
            leftContent={leftContent}
        />
    );
}
