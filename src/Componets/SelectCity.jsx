import React from 'react';


const options = [
    {
        label: "Sangli",
        value: "Sangli",
    },
    {
        label: "Pune",
        value: "Pune",
    },
    {
        label: "Banglore",
        value: "Banglore",
    },
    {
        label: "Mumbai",
        value: "Mumbai",
    },
    {
        label: "Nagpur",
        value: "Nagpur",
    },
    {
        label: "Kolkata",
        value: "Kolkata",
    },
];

class SelectCity extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            City: "Sangli",
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        console.log("City Selected!!");
        console.log(e.target.value);
        this.setState({ City: e.target.value });
      }
    render(){
        return(
        <div id="ev">
        <div class="img2">
        </div>

        <div class="all">
            <h2 id="sh" class="sh">
                Service Hub
            </h2>

            <h1 id="qh" class="qh">
                Quality Home Services, book now
            </h1>
            <h2 id="pt" class="pt">
                Professional Technitians now at your doorstep
            </h2>

            <div id="select2" class="hov1">
                <label id="lab" class="pad">Where do you need service</label>
                <select id="drop" class="pad2" value={this.state.fruit} onChange={this.handleChange}>
                    <option selected disabled>Select Your City</option>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
            ))}
                </select>
            </div>
        </div>
    </div>
        )
    }
}

export default SelectCity;