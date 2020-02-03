import React, {Component} from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";
import mapChooser from "../mapChooser";


class StoreLocator extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentMap: 'none.png'
        }
        this.shops = [
        {
            'location':'Portland',
            'address': '123 Portland Dr'
        },{
            'location':'Astoria',
            'address':'123 Astoria Dr'
        },{
            'location':'',
            'address':''
        }]
        this.chooseMap = this.chooseMap.bind(this);
    }
    chooseMap(e){
        debugger;
        this.setState({
            currentMap: mapChooser(e.target.value)
        })
    }
    render(){
        let storeButtons = this.shops.map((shop,index) => <Button key={index} handleClick={this.chooseMap} location={shop.location} />);
        return(
        <>
            <Header/>
            <div>
                {/* <Button location="Portland"/>
                <Button location="Astoria"/>
                <Button/> */}
                {storeButtons}
            </div>
            <Map imageName = {this.state.currentMap} location={this.props.location}/>
        </>
        )
    }
}

export default StoreLocator;