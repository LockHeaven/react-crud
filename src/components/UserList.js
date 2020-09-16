import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Button,Typography} from 'antd';
import {DeleteOutlined,ScissorOutlined } from '@ant-design/icons';
const {Text} = Typography;

const Usuarios = props => (
 
      
    <tr>
        <td>{props.persona.names}</td>
        <td>{props.persona.lastnames}</td>
        <td>{props.persona.typedocument}</td>
        <td>{props.persona.document}</td>
        <td>{props.persona.email}</td>
        <td>{props.persona.phone}</td>
        <td>{props.persona.username}</td>
        <td>{props.persona.birthday.substring(0, 10)}</td>
        <td>{props.persona.residence}</td>
        <td>
      <Button type ="dashed"> <Link to={"edit/"+props.persona._id}>edit <ScissorOutlined /></Link> </Button> <Button danger > <a href="#" onClick={() => { props.deleteUser(props.persona._id) }}><Text type="danger">delete <DeleteOutlined/></Text></a> </Button>
        </td>
    </tr>

)



export default class UserList extends Component {


    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this)

        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/persona/')
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    usersList() {
        return this.state.users.map(currentuser => {
            return <Usuarios persona={currentuser} deleteUser={this.deleteUser} key={currentuser._id} />;
        })
    }


    deleteUser(id) {
        axios.delete('http://localhost:5000/persona/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }


    render() {
        return (
            <div className='App'>
                <br />
                <table  class="table table-striped table-bordered" >
                
               
                    <thead >
                        <tr >
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>TD</th>
                            <th>Documento</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>username</th>
                            <th>Birthday</th>
                            <th>Residence</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.usersList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
