import React from 'react';

export default class Bomb extends React.Component {
        state = { count: 0 };

    componentDidMount() {
        console.log('component mounted')
         this.interval = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        const {count} = this.state;
        
        if(count % 2 === 0) {
                return (
                    <div>Tick</div> 
                )
            }
        else if(!count % 2 === 0)
            return (
                <div>Tock</div>
            )
        else if(count >= 8) {
            clearInterval(this.interval)
            return (
                <div>Boom!</div>
            )
        }
    }

    render() {
        return (
        <div>
            <p>{this.state.count}</p>
            <div>{this.renderDisplay()}</div>
        </div>
        )
    }
}
