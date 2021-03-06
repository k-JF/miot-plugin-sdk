import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {ColorGreen} from '../utils/colors';
import {adjustSize} from '../utils/sizes';
import {FontLantingLight} from '../utils/fonts';
import {NOOP} from '../utils/fns';
const Size168 = adjustSize(168);
const Size150 = adjustSize(150);
const Size138 = adjustSize(138);
const Size120 = adjustSize(120);
const Size72 = adjustSize(72);
const Size66 = adjustSize(66);
const Size60 = adjustSize(60);
export default class CircleButton extends Component {
  static propTypes = {
    sizeLevel: PropTypes.oneOf([0, 1, 2, 3]),
    themeColor: PropTypes.any,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    horizontal: PropTypes.bool,
    onPress: PropTypes.func,
    title: PropTypes.string,
    icon: PropTypes.any,
    iconSelected: PropTypes.any,
    iconText: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  };
  static defaultProps = {
    sizeLevel: 0,
    themeColor: '',
    disabled: false,
    selected: false,
    horizontal: false,
    onPress: NOOP,
    title: '',
    icon: null,
    iconSelected: null,
    iconText: ''
  };
  onPress = () => {
    let {disabled, onPress} = this.props;
    if(disabled) {
      return;
    }
    onPress();
  }
  render() {
    let {sizeLevel, selected, title, icon, iconSelected, iconText, themeColor, disabled, horizontal} = this.props;
    let containerSizeStyle = Styles[['container0', 'container1', 'container2', 'container3'][sizeLevel || 0]] || Styles.container0;
    let iconContainerSizeStyle = Styles[['iconContainer0', 'iconContainer1', 'iconContainer2', 'iconContainer3'][sizeLevel || 0]] || Styles.iconContainer0;
    let iconSizeStyle = Styles[['icon0', 'icon1', 'icon2', 'icon3'][sizeLevel || 0]] || Styles.icon0;
    let titleSizeStyle = Styles[['title0', 'title1', 'title2', 'title3'][sizeLevel || 0]] || Styles.title0;
    return (
      <View style={StyleSheet.flatten([Styles.container, containerSizeStyle, horizontal ? Styles.containerHorizontal : null])}>
        <TouchableOpacity style={StyleSheet.flatten([Styles.iconContainer, iconContainerSizeStyle, selected ? {
          backgroundColor: themeColor || ColorGreen,
          borderColor: themeColor || ColorGreen
        } : null, disabled ? Styles.iconContainerDisabled : null, disabled && selected ? Styles.iconContainerDisabledSelected : null])} activeOpacity={1} onPress={this.onPress}>
          {icon ? (
            <Image style={StyleSheet.flatten([Styles.icon, iconSizeStyle])} source={selected && !disabled ? (iconSelected || iconSelected) : icon} />
          ) : (
            <Text style={[Styles.iconText, selected && !disabled ? Styles.iconTextSelected : null]}>{iconText}</Text>
          )}
        </TouchableOpacity>
        {title ? (
          <Text style={StyleSheet.flatten([Styles.title, selected ? {
            color: themeColor || ColorGreen
          } : null, disabled ? Styles.titleDisabled : null, horizontal ? Styles.titleHorizontal : null])} numberOfLines={1}>{title}</Text>
        ) : null}
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  container0: {
    width: Size168
  },
  container1: {
    width: Size150
  },
  container2: {
    width: Size138
  },
  container3: {
    width: Size120
  },
  containerHorizontal: {
    width: 'auto',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(176, 182, 184, 0.4)',
    opacity: 1
  },
  iconContainer0: {
    width: Size168,
    height: Size168,
    borderRadius: Size168 / 2
  },
  iconContainer1: {
    width: Size150,
    height: Size150,
    borderRadius: Size150 / 2
  },
  iconContainer2: {
    width: Size138,
    height: Size138,
    borderRadius: Size138 / 2
  },
  iconContainer3: {
    width: Size120,
    height: Size120,
    borderRadius: Size120 / 2
  },
  iconContainerDisabled: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(197, 201, 203, 0.3)'
  },
  iconContainerDisabledSelected: {
    backgroundColor: 'rgba(197, 201, 203, 0.3)',
    borderColor: 'rgba(197, 201, 203, 0.3)'
  },
  icon: {
    resizeMode: 'contain'
  },
  icon0: {
    width: Size72
  },
  icon0: {
    width: Size66
  },
  icon0: {
    width: Size60
  },
  icon0: {
    width: Size60
  },
  iconText: {
    fontFamily: FontLantingLight,
    fontSize: adjustSize(36),
    color: '#000'
  },
  iconTextSelected: {
    color: '#FFF'
  },
  title: {
    marginTop: adjustSize(27),
    textAlign: 'center',
    fontSize: adjustSize(42),
    fontFamily: FontLantingLight,
    color: '#000'
  },
  title3: {
    display: 'none'
  },
  titleDisabled: {
    color: '#7F7F7F'
  },
  titleHorizontal: {
    marginTop: 0,
    marginLeft: adjustSize(39)
  }
});