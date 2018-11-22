import React, { Component } from 'react';
import Chart from 'react-google-charts';
import { getMultiPlayerData } from "../common/helper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';

class MultiPlayer extends Component {

    state = {
        selectedPlayers : []
    }

    handleChange = (value) => {
        this.setState({
            selectedPlayers: value
        })
    }

    render() {
        const {bowlPool} = this.props

        const getHeadRow = () => {
            var cells = [];
            cells.push(<TableCell key={"Name"}>Name</TableCell>);
            for( var key in this.state.selectedPlayers) {
                var playerName = this.state.selectedPlayers[key].name;
                var playerWins = this.state.selectedPlayers[key].wins
                cells.push(<TableCell key={playerName+"-Name"}>{playerName + " (" + playerWins + " Wins)"}</TableCell>)
            }
    
            return cells;
        }

        const getResult = (bowlPool, pick, gameKey) => {
            if (bowlPool.winners.length <= parseInt(gameKey) || bowlPool.winners[gameKey] === "") {
                return null
            } else if (pick === bowlPool.winners[gameKey]) {
                return {backgroundColor:"#1aff1a"}
            } else {
                return {backgroundColor:"#ff1a1a"}
            }
        }

        const getGameRows= () => {
            
            var rows = [];
            for( var i in bowlPool.games) {
                var cells = []
                var gameName = bowlPool.games[i]
                cells.push(<TableCell key={gameName}>{gameName}</TableCell>)
                for( var j in this.state.selectedPlayers) {
                    var playerName = this.state.selectedPlayers[j].name;
                    var selection = this.state.selectedPlayers[j].picks[i];
                    var result = getResult(bowlPool, selection, i)
                    cells.push(<TableCell style={result} key={playerName+selection}>{selection}</TableCell>)
                }
                rows.push(<TableRow key={gameName+i}>{cells}</TableRow>)
            }
            return rows;
        }

        if (bowlPool && bowlPool.players) {
            return (
                <div>
                    <Select
                    closeMenuOnSelect={false}
                    components={makeAnimated()}
                    isMulti
                    options={bowlPool.players}
                    onChange={this.handleChange}
                    />
                    <Table>
                        <TableHead>
                            <TableRow>
                                {getHeadRow()}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {getGameRows()}
                        </TableBody>
                    </Table>
                </div>
            )}
        return (
        <div></div>
        );
    }
}

export default MultiPlayer