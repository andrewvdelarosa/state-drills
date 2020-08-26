import React from 'react';

export default class Roulette extends React.Component {

    static defaultProps = {
        bullet: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleRouletteSpin = () => {
        console.log('click')
        this.setState({spinningTheChamber: true})
        this.timeout = setTimeout(() => {
            const randomBullet = Math.ceil(Math.random() * 8)

            this.setState({ 
                chamber: randomBullet,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    displayResults() {
        const {spinningTheChamber, chamber} = this.state
        const { bullet } = this.props
        if(spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if(chamber === bullet) {
            return 'BANG'
        } else {
            return 'you\'re safe you lucky bastard'
        }
    }



    render() {
        return (
            <div className="Roulette">
                {/* //spin the chamber trigger */}
                <button onClick={this.handleRouletteSpin} >Play roulette</button>
                <p>{this.displayResults()}</p>
            </div>
        )
    }
}