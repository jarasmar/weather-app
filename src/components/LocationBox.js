import React from "react";

class LocationBox extends React.Component {
    constructor(props) {
        super(props);
        this.buildDate = this.buildDate.bind(this);
    }
    buildDate(d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    render() {
        return (
            <div className="location-box">
                <div className="location">Helsinki, FI</div>
                <div className="date">{ this.buildDate(this.props.date) }</div>
            </div>
        )
    }
}

export default LocationBox;