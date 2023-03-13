import {View, Image, Text} from 'react-native';

const ReviewPitch = ({name, avatar, title}) => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 17}}>{name}:</Text>
      <Text style={{marginBottom: 10}}>{title}</Text>
    </View>
  );
};
export default ReviewPitch;
