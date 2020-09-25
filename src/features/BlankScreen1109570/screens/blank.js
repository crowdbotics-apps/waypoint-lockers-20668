import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Input_5: "$4.99" }

  render = () => (
    <View style={this.props.themedStyle.View_1}>
      <Text style={this.props.themedStyle.Text_3}>
        This subscription will grant you access to EVERY waypoint Locker in the
        nation. Waypoint Lockers were built with our customers coming first and
        becasue of that we our our price affordable to all.
      </Text>
      <Input
        placeholder="$4.99"
        editable={false}
        textStyle={{
          fontSize: 23,
          color: "#000000",
          textAlign: "left",
          fontWeight: "normal",
          fontStyle: "normal"
        }}
        style={this.props.themedStyle.Input_5}
        value={this.state.Input_5}
        onChangeText={nextValue => this.setState({ Input_5: nextValue })}
      />
      <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
        <Button
          textStyle={{
            fontSize: 12,
            color: "#ffffff",
            textAlign: "center",
            fontFamily: "Merriweather-Bold"
          }}
          style={this.props.themedStyle.Button_7}
          onPress={() => alert("Pressed!")}
        >
          Subscribe Now
        </Button>
      </TouchableOpacity>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  View_1: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "visible",
    alignSelf: "center",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    backgroundSize: "auto"
  },
  Text_3: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    overflow: "visible",
    fontSize: 12,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontFamily: "Montserrat-Bold",
    borderColor: "#000000",
    borderStyle: "solid",
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 23,
    letterSpacing: 1
  },
  Input_5: {
    width: 80,
    marginLeft: -1,
    marginRight: 0,
    marginTop: 4,
    marginBottom: 7,
    paddingLeft: 11,
    paddingRight: 5,
    paddingTop: 200,
    paddingBottom: 3,
    overflow: "visible",
    alignSelf: "center",
    fontSize: 23,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Button_7: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 6,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 9,
    paddingBottom: 8,
    overflow: "visible",
    alignSelf: "center",
    fontSize: 12,
    color: "#ffffff",
    backgroundColor: "#000000",
    fontFamily: "Merriweather-Bold",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 0,
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  }
}))
