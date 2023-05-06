import { Avatar } from 'react-native-paper';

// eslint-disable-next-line react/prop-types
export const CustomAvatar = ({ size, style, color, label }) => (
    <Avatar.Text size={size} style={style} color={color} label={label} />
);
