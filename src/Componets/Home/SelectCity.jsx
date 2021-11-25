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
        return (
            <div>
                <div className="bg-black bg-opacity-60 m-5 p-4 rounded-3xl opacity-90 shadow-xl hover:shadow-2xl ">
                    <img
                    className="inline-block h-60 md:-mt-44 "
                    src="./images/img1.png"
                        alt="Service Hub" />
                    <div className=" inline-block ">
                        <img
                        className="h-24 md:h-28"
                        src="./images/mainlogo.png"
                            alt="Service Hub" />
                        <div className="text-2xl md:text-3xl ml-9 font-bold text-gray-400">Quality Home services, On Demand</div>
                        <div className="bg-white p-2 m-4 ml-9 rounded-md grid md:grid-flow-col">
                                <h2 className=" text-1xl p-1">Where do you need service</h2>
                                <select id="drop" className="text-1xl rounded-md p-1" value={this.state.fruit} onChange={this.handleChange}>
                                    <option selected disabled>Select Your City</option>
                                        {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                    </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-center ">
                        Our Core Services
                        </div>
                <div className="bg-white m-5 mt-2 p-6 pb-4 rounded-3xl grid md:grid-cols-4 space-x-1">                                  
                                <div className="border-black text-center">
                                    <img
                                    className="inline-block  h-36 w-auto rounded-3xl opacity-90 shadow-xl hover:shadow-2xl"
                                    src="./images/salon.jpeg"
                                        alt="Service Hub" />
                                    <div className="text-2xl m-1">Salon</div>
                                </div>

                                <div className="border-black text-center">
                                    <img
                                    className="inline-block  h-36 w-auto rounded-3xl opacity-90 shadow-xl hover:shadow-2xl"
                                    src="./images/massage.jpeg"
                                        alt="Service Hub" />
                                    <div className="text-2xl mt-1">Massage</div>

                                </div>
                                <div className="border-black text-center">
                                    <img
                                    className="inline-block  h-36 w-auto rounded-3xl opacity-90 shadow-xl hover:shadow-2xl"
                                    src="./images/ac.jpeg"
                                        alt="Service Hub" />
                                    <div className="text-2xl m-1">AC Repair</div>

                                </div>
                                <div className="border-black text-center">
                                    <img
                                    className="inline-block  h-36 w-auto rounded-3xl opacity-90 shadow-xl hover:shadow-2xl"
                                    src="./images/electriian.jpeg"
                                        alt="Service Hub" />
                                    <div className="text-2xl m-1">Electrician</div>
                                </div>
                            </div>
                    </div>
            
        )
    }
}

export default SelectCity;