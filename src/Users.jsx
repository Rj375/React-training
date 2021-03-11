import React from 'react';
import { TextBox, DataGrid, GridColumn, ComboBox, LinkButton, NumberBox, ButtonGroup, Form, Dialog, Label, FormField, Messager } from 'rc-easyui';
class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: "",
                email: "",
                age: "",
                contact: "",
                address: "",
                password: "",
                confirmPass: ""

            },

            rows: [],
            // users: [],
          



            rules: {
                name: ["required", "length[5,10]"],
                email: ["required", "email"],
                age: ["required", "age[18]"],
                address: "required",
                contact: "required",
                password: "password",
                confirmPass: 'confirmPass'

            }
        };
        this.nameRef = React.createRef()
    }

   
    componentDidMount = () => {
        var { users, rows } = this.state

        
        rows = JSON.parse(localStorage.getItem('user'))
        this.setState({
            // users: [...users]
            rows: [...rows]
        })
        console.log(rows)
        this.nameRef.current.focus()
    }
    


    getCustomRules = () => {
        var { user } = this.state
        return {
            age: {
                validator(value, param) {
                    return value >= parseInt(param[0], 10)
                },
                message: 'Minimum age must be 18'
            },

            password: {
                validator(value) {
                    return value.length >= 8
                },
                message: 'Password must be atleast 8 characters'
            },

            confirmPass: {
                validator() {
                    return user.password == user.confirmPass
                },
                message: 'Confirm Password'
            }
        }
    }

    validateUser() {
        this.messager.alert({
          title: "Alert",
          msg: "please fill in all the input fields and complete all the requirements"
        });
      }

    handleChange = (name, value) => {
        var { user } = this.state;
        user[name] = value;
        this.setState({
            user: user
        })

    }

    handleSubmit = (event) => {
        var { rows, user, users} = this.state

        var newUser = {
            name: "",
            email: "",
            age: "",
            address: "",
            contact: "",
            password: "",
            confirmPass: ""
        }
         
       
            if(!user.name) {
                this.validateUser()
            }else if(!user.email) {
               this.validateUser()
            }
            else if(!user.age && user.age < 18) {
                this.validateUser()
            }else if(!user.address) {
                this.validateUser()
            }else if(!user.contact) {
               this.validateUser()
            }else if(!user.password) {
               this.validateUser()
            }else if(user.confirmPass !== user.password) {
                this.validateUser()
            }
            else{
            this.form.validate(() => {

                event.preventDefault()
                rows.push(user)
                var json = JSON.stringify(rows)
                localStorage.setItem('user', json)
                // users.push(json)
                rows = JSON.parse(localStorage.getItem('user'))
                this.setState({
                    // rows: [...json],
                    rows: [...rows],
                    // users: [...users],
                    user: newUser
                })
    
                this.nameRef.current.focus()
            }) 
           }
           

            //      event.preventDefault()
            //     rows.push(user)
            //     var json = JSON.stringify(rows)
            //     localStorage.setItem('user', json) 

            //     this.setState({
            //         // rows: [...json],
            //         rows: [...rows],
            //         user: newUser
            //     })
            //    users =  localStorage.getItem('user')
            //    this.setState({
            //      users: [users]
            //    })
            //    console.log(users)
            //     this.nameRef.current.focus()








       










    }

    render() {
        var { user, rules } = this.state
        return <div className="users" style={{ display: 'flex' }}>
            <section style={{ margin: '50px', width: '30%', border: '1px solid skyblue', padding: '10px' }}>
                <h1>User Registration</h1>
                <Form
                    ref={ref => this.form = ref}
                    style={{ maxWidth: 400 }}
                    validateRules={this.getCustomRules()}
                    model={user}
                    rules={rules}
                    labelWidth={150}

                    labelAlign="right"

                >
                    <FormField name="name" label="Name:">
                        <TextBox value={user.name} ref={this.nameRef} onChange={(e) => this.handleChange("name", e)}></TextBox>
                    </FormField>
                    <FormField name="email" label="Email:" >
                        <TextBox value={user.email} onChange={(e) => this.handleChange("email", e)}></TextBox>
                    </FormField>
                    <FormField name="age" label="Age:" >
                        <NumberBox value={user.age} onChange={(e) => this.handleChange("age", e)}></NumberBox>
                    </FormField>
                    <FormField name="address" label="Address:">
                        <TextBox value={user.address} onChange={(e) => this.handleChange("address", e)}></TextBox>
                    </FormField>
                    <FormField name="contact" label="Contact:">
                        <NumberBox value={user.contact} onChange={(e) => this.handleChange("contact", e)}></NumberBox>
                    </FormField>
                    <FormField name="password" label="Password:">
                        <TextBox value={user.password} onChange={(e) => this.handleChange("password", e)}></TextBox>
                    </FormField>
                    <FormField name="confirmPass" label="Confirm Password:">
                        <TextBox value={user.confirmPass} onChange={(e) => this.handleChange("confirmPass", e)}></TextBox>
                    </FormField>

                    <FormField style={{ marginLeft: 120 }}>
                        <LinkButton onClick={this.handleSubmit} >Submit</LinkButton>
                    </FormField>
                </Form>


            </section>

            <section style={{ margin: '50px', width: '50%' }}>
                <h1>User Information</h1>
                <DataGrid data={this.state.rows} >
                    <GridColumn field="name" title="Name" align="center"></GridColumn>
                    <GridColumn field="email" title="Email" align="center"></GridColumn>
                    <GridColumn field="age" title="Age" align="center"></GridColumn>
                    <GridColumn field="address" title="Address" align="center"></GridColumn>
                    <GridColumn field="contact" title="Contact" align="center" ></GridColumn>
                    {/* <GridColumn field="password" title="password" align="center"></GridColumn>
                    <GridColumn field="confirmPass" title="ConfirmPass" align="center"></GridColumn> */}
                </DataGrid>
            </section>
            <Messager ref={ref => this.messager = ref}></Messager>
        </div>;
    }
}


export default Users;