import { ScaledSheet } from 'react-native-size-matters'
import Colors from "../../../res/colors"
import { Fonts } from "../../../utils/fonts"

const styles = ScaledSheet.create({
  raisedButton: {
    borderRadius: 10,
    height: 42,
    backgroundColor: Colors.primaryColor,
  },
  btnText: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: "19@ms",
    lineHeight: 42,
    textAlign: 'center'
  },
  primaryColor: {
    color: Colors.primaryColor
  },
  whiteColor: {
    color: Colors.white
  },
  fromGroup: {
    flexDirection: 'row',
    marginBottom: 20
  },
  inputLabel: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: "16@ms",
    color: Colors.black
  },
  forgotPasswordText: {
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.primaryColor,
    fontSize: "14@ms",
    lineHeight: 22
  },
  searchContainer: {
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 10,
    position: 'relative',
},
roundedBox: {
    backgroundColor: Colors.white,
    // shadowColor: Colors.black,
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.16,
    // shadowRadius: 3,
    // elevation: Platform.OS === 'android' ? 2 : 0,
    borderColor: '#E6E9F4'
},
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  inputTextContainer: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#E6E9F4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E9F4',
    marginVertical: 10
   
  },
  textInputView: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#E6E9F4',
    color: '#424242',
    borderRadius: 10,
    marginHorizontal: 10
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  backButtonImage: {
    width: 23,
    height: 15,
    tintColor: Colors.black,
    resizeMode: 'contain',
    display: 'flex'
  }
});

export default styles;