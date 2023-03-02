import {View, Image, Text} from 'react-native';

const ReviewPitch = ({name, avatar, title}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Image
        source={{
          uri: avatar,
        }}
        style={{width: 150, height: 100}}
      />
      <Text>{title}</Text>
    </View>
  );
};
export default ReviewPitch;
