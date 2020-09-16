import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { List, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const { Meta } = Card;


const Usuarios = props => (

    <Card
        style={{ width: 300 }}
        cover={
            <img
                alt="example"
                src={props.persona.img}
            />
        }
        actions={[

            <Link to={"edit/" + props.persona._id}><EditOutlined key="edit" /></Link>,
            <a href="#" onClick={() => { props.deleteUser(props.persona._id) }}><DeleteOutlined /></a>,

        ]}
    >
        <Meta
            title={props.persona.names}
            description={props.persona.document}
        />
    </Card>
)



export default class UserCards extends Component {

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
            <List>
                <List.Item>
                    {this.usersList()}
                </List.Item>
            </List>
        )
    }
}