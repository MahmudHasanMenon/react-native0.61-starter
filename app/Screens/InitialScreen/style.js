import {
    ScaledSheet
  } from 'react-native-size-matters';
  import Colors from "../../res/colors";
  import {
    Fonts
  } from "../../utils/fonts"
  
  const styles = ScaledSheet.create({
    stretch: {
      width: "100%",
      height: "100%",
      overflow: 'visible',
    },
    wrapper: {
      flex: 1,
      marginHorizontal: 25,
    },
    bottomSection: {
      flexBasis: '23%',
      paddingHorizontal: 38,
      backgroundColor: Colors.white,
    },
    raisedButton: {
      borderRadius: 3,
      height: 42,
      backgroundColor: Colors.primaryColor,
    },
    outlineButton: {
      borderRadius: 3,
      height: 42,
      borderColor: Colors.primaryColor,
      borderWidth: 2
    },
    btnText: {
      fontFamily: Fonts.PoppinsMedium,
      fontSize: "19@ms",
      lineHeight: 38,
      textAlign: 'center'
    },
    primaryColor: {
      color: Colors.primaryColor
    },
    whiteColor: {
      color: Colors.white
    }
  })
  
  export default styles;