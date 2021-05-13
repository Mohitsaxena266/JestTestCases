import React from 'react';
import {View, Text} from 'react-native';
const TestCaseComponent = (props) => {
  return (
    <View>
      <Text testID="TestCase_Text">{props.textElement}</Text>
    </View>
  );
};

export default TestCaseComponent;
