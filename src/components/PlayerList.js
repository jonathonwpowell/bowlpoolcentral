import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

  

class PlayerList extends React.Component {
    handleSearch(event) {
        this.props.playerSearch(event.target.value);
    }


    render() {
        const { playerList } = this.props;
        const listItems = []
        
        for (var key in playerList) {
            var p = playerList[key];
            listItems.push(<TableRow key={p.value}>
                                <TableCell>{p.wins}</TableCell>
                                <TableCell>{p.name}</TableCell>
                           </TableRow>)
        }
        return (
            <div>
            <Toolbar>          
                <Typography variant="h6" id="tableTitle">
                    Standings
                </Typography>
                <div style={{flex: '1 1 100%'}} />
                <Input placeholder="search" onKeyUp={this.handleSearch.bind(this)}/>
            </Toolbar>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Wins</TableCell>
                        <TableCell>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listItems}
                </TableBody>
            </Table>
            </div>
        )
  }
}

export default PlayerList