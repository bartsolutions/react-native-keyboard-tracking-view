import React, {PureComponent} from 'react';
import {View} from 'react-native';

export default class KeyboardTrackingView extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View {...this.props} />
    );
  }
  getNativeProps(callback) {
    callback({trackingViewHeight: 0, keyboardHeight: 0, contentTopInset: 0});
  }
  scrollToStart() {}
}
