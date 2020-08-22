import React, { Component } from 'react'
import { Container, Header, Item, Input, Icon, Button, Text, View } from 'native-base'
import { TouchableOpacity, Platform } from 'react-native'
import { ScaledSheet } from "react-native-size-matters"
import Colors from '../../res/colors'
import { Fonts } from '../../utils/fonts';

export default class ProductSearchBarComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        };
    }

    textChanged = (searchText) => {
        this.setState({searchText});
        // if (this.props.getSearchText !== undefined) {
        //     this.props.getSearchText(searchText)
        // }
    };

    searchButtonPressed = () => {
        
    }

    clearSearchText = () => {
        this.setState({ searchText: ''})
    }

    render() {
        return (
            <View style={styles.searchContainer}>
                <Item rounded style={styles.roundedBox}>
                    <Input
                        style={{height: 40, paddingLeft: 15, top: 0, fontFamily: Fonts.PoppinsRegular, fontSize: 15}}
                        onChangeText={(searchText) => this.textChanged(searchText)}
                        placeholder={"Search"}
                        placeholderTextColor='#828282'
                        value={this.state.searchText}
                        // returnKeyType={'search'}
                        // onSubmitEditing={() => this.onSubmitHandler()}
                    />
                    <TouchableOpacity onPress={() => this.searchButtonPressed()}>
                        <Icon name="ios-search" style={{color: '#828282', position: 'relative', top: 2}} />
                    </TouchableOpacity>
                </Item>
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    searchContainer: {
        borderRadius: 20,
        paddingTop: 15,
        paddingBottom: 10,
        position: 'relative',
    },
    roundedBox: {
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.16,
        shadowRadius: 6,
        elevation: Platform.OS === 'android' ? 2 : 0,
        borderColor: 'white'
    }
});