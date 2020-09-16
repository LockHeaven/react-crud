import React, { Component } from 'react'
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker,Typography } from 'antd';
import {CheckOutlined } from '@ant-design/icons';

 
const {Text}=Typography;

export default class EditUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeNames = this.onChangeNames.bind(this);
        this.onChangeLastNames = this.onChangeLastNames.bind(this);
        this.onChangeDocument = this.onChangeDocument.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onChangeTypeDocument = this.onChangeTypeDocument.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.onChangeResidence = this.onChangeResidence.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            names: '',
            lastnames: '',
            document: 0,
            email: '',
            phone: '',
            username: '',
            password: '',
            birthday: new Date(),
            typedocument: '',
            residence: '',
            img:'',
            documents: [],
            residences: []
        }
    }

    

    componentDidMount() {
        axios.get('http://localhost:5000/persona/'+this.props.match.params.id)
        .then(response => {
          this.setState({
            names: response.data.names,
            lastnames: response.data.lastnames,
            document: response.data.document,
            email: response.data.email,
            phone: response.data.phone,
            username: response.data.username,
            password: response.data.password,
            typedocument: response.data.typedocument,
            residence: response.data.residence,
            img: response.data.img,
            birthday: new Date(response.data.birthday)
          })   
        })
        .catch(function (error) {
          console.log(error);
        })

        axios.get('http://localhost:5000/ciudad/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        residences: response.data.map(city => city.name),
                        residence: response.data[0].name
                    })
                }
            })

            axios.get('http://localhost:5000/documento/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        documents: response.data.map(docu => docu.name),
                        typedocument: response.data[0].name
                    })
                }
            })
    }
 

    onChangeNames(e) {
        this.setState({
            names: e.target.value
        });
    }

    onChangeLastNames(e) {
        this.setState({
            lastnames: e.target.value
        });
    }

    onChangeDocument(e) {
        this.setState({
            document: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeTypeDocument(e) {
        this.setState({
            typedocument: e.target.value
        });
    }

    onChangeResidence(e) {
        this.setState({
            residence: e.target.value
        });
    }
    onChangeImg(e) {
        this.setState({
            img: e.target.value
        });
    }

    onChangeBirthday(date) {
        this.setState({
            birthday: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            names: this.state.names,
            lastnames: this.state.lastnames,
            document: this.state.document,
            email: this.state.email,
            phone: this.state.phone,
            username: this.state.username,
            password: this.state.password,
            residence: this.state.residence,
            typedocument: this.state.typedocument,
            img: this.state.img,
            birthday: this.state.birthday

        }

        axios.post('http://localhost:5000/persona/update/'+ this.props.match.params.id, user)
        .then(res => console.log(res.data));

        window.location = '/';
     

        


    }


    render() {
        return (
            <div>
                <h3><Text type="success">edit old user</Text></h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nombres: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.names}
                            onChange={this.onChangeNames}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.lastnames}
                            onChange={this.onChangeLastNames}
                        />
                    </div>

                      <div class="form-row">
                      <div className="form-group col-md-2"> 
                        <label>TD </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.typedocument}
                            onChange={this.onChangeTypeDocument}>
                            {
                                this.state.documents.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group col-md-5">
                        <label>Documento </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.document}
                            onChange={this.onChangeDocument}
                        />
                    </div>
                    
                    <div className="form-group col-md-5">
                        <label>Telefono </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                        />
                    </div>
                    </div>
                    <div className="form-group ">
                        <label>Email </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div class="form-row">
                    <div className="form-group col-md-6">
                        <label>Usuario </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Password </label>
                        <input type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    </div>

                    <div class="form-row"> 
                    <div className="form-group col-md-2">
                        <label>Birthday </label>
                        <div>
                            <DatePicker
                                selected={this.state.birthday}
                                onChange={this.onChangeBirthday}
                            />
                        </div>
                    </div>

                    <div className="form-group col-md-5">
                        <label>Residencia </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.residence}
                            onChange={this.onChangeResidence}>
                            {
                                this.state.residences.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    
                    <div className="form-group col-md-5 ">
                   
                   <label>Avatar </label>
                   
                   <select ref="userInput"
                       required
                       className="form-control"
                       value={this.state.img}
                       onChange={this.onChangeImg}>

                       <option key="https://semantic-ui.com/images/avatar/large/elliot.jpg" value="https://semantic-ui.com/images/avatar/large/elliot.jpg">Elliot</option>
                       <option key="https://semantic-ui.com/images/avatar/large/christian.jpg" value="https://semantic-ui.com/images/avatar/large/christian.jpg">Christian</option>
                       <option key="https://semantic-ui.com/images/avatar/large/jenny.jpg" value="https://semantic-ui.com/images/avatar/large/jenny.jpg">Jenny</option>
                       <option key="https://semantic-ui.com/images/avatar/large/stevie.jpg" value="https://semantic-ui.com/images/avatar/large/stevie.jpg">Stevie</option>
                       <option key="https://semantic-ui.com/images/avatar/large/daniel.jpg" value="https://semantic-ui.com/images/avatar/large/daniel.jpg">Daniel</option>
                           
                   </select>
                   
               </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit" className="btn btn-primary" /> <CheckOutlined/>
                    </div>
                </form>
            </div>
        )
    }
}

