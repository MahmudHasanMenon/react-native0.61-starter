import {
    ScaledSheet
  } from 'react-native-size-matters';
  import Colors from "../../../res/colors";
  import {
    Fonts
  } from "../../../utils/fonts"
  
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
    },
    gridView: {
      marginTop: 10,
      marginHorizontal: 10,
      flex: 1,
    },
    itemContainer: {
      flex: 1,
      height: 107,
      borderRadius: 5,
      borderColor: '#eee',
      borderWidth:1,
      borderBottomWidth: 3,
      borderBottomColor:'#eee',
      shadowColor: '#25265E',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 24,
      elevation: 0,
      margin: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemName: {
      fontFamily: Fonts.PoppinsMedium, 
      fontSize: 12, 
      lineHeight: 20, 
      color: Colors.black, 
      textAlign: 'center', 
      marginTop: 2,
      paddingHorizontal: 8
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    sectionHeader: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      alignItems: 'center',
      backgroundColor: '#636e72',
      color: 'white',
      padding: 10,
    },
  })
  
  export default styles;