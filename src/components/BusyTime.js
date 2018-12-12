import React, {Component} from 'react';

class BusyTime extends Component {
    constructor(props) {
        super(props);
    }
    renderBusyTimesTable(busyTimesList) {
        let middle = {
            width: '50%',
            margin: 'auto'
        };
        return (
            <div>
                <table className='table' style={middle}>
                    <thead>
                    <tr>
                        <th>Busy From</th>
                        <th>Busy To</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        busyTimesList.slice(this.props.page * 5, this.props.page * 5 + 5).map(busy =>
                            <tr key={busy.id}>
                                <td className={"times"}>{busy.busyFrom.replace('T',' ')}</td>
                                <td className={"times"}>{busy.busyTo.replace('T',' ')}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
    render() {
        const {busyTimesList} = this.props;
        return (
            <div>
                {this.renderBusyTimesTable(busyTimesList)}
            </div>
        );
    }
}

export default BusyTime;