import React from 'react';
import { DataList } from 'rc-easyui';



class Apidata extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            // selected: null
        };
    }

    getApi = () => {
        var { lists } = this.state
        const axios = require('axios').default;
        var apiUrl = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(apiUrl)
            .then((res) => {
                console.log(res.data)
                if (res) {
                    lists = res.data
                    this.setState({
                        lists: lists
                    })
                }
            })
            .catch((err) => console.log(err))
    }



    // getApi = async () => {
    //     var { lists } = this.state
    //     const axios = require('axios').default;
    //     var apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    //     try {
    //         const res = await axios.get(apiUrl);
    //         console.log(res.data);
    //         if (res) {
    //             lists = res.data
    //             this.setState({
    //                 lists: lists
    //             })
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }



    // handleSelectionChange = (selected) => {
    //     this.setState({ selected: selected})
    //   }

    renderItem = ({ row }) => {
        return (
            <div className="">

                <div className="detail">
                    <h1>{row.id} - {row.title}</h1>
                    <p>{row.body}</p>

                </div>
            </div>
        )
    }
    render() {
        var { lists } = this.state
        return <div>
            <button onClick={this.getApi}>Get Api</button>


            {/* {lists.map((value,index) => <ul key={index}>
                    <li>{value.title}</li>
                    <li>{value.body}</li>
            </ul>)} */}


            <DataList
                style={{ width: 700, height: 400, margin: "auto", marginTop: "10px" }}
                data={this.state.lists}
                renderItem={this.renderItem}
            // selectionMode="single"
            // onSelectionChange={this.handleSelectionChange}
            />
        </div>;
    }
}


export default Apidata;