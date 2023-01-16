import React from "react";
import {Students} from './data.js'

class State extends React.Component{
     constructor(props){
         super(props)
         this.state={
             count: 0,
             name: 'Otabek',
             surname: 'Shokirjonov',
             data: Students

         }
     }
    render(){
        console.log(this.state.count);
        const increament =()=>{
            this.setState({
              count: this.state.count +1
            })
        }
        const decreament =()=>{
            if (this.state.count>0) {
                this.setState({
                count: this.state.count-1
                }) 
            }
        }
        const onChange=(event)=>{
            console.log(event.target.value)
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        const onSelect=(e)=>{
            console.log(e.target.value);
        }
        const onCheck=(e)=>{
            console.log(e.target.checked);
        }
        const onFilter=(e)=>{
            let res = Students.filter((value)=>value.name.toLowerCase().includes(e.target.value.toLowerCase()))
            this.setState({data: res})
        }
        return(
            <div>
                <h1>Name {this.state.name}</h1>
                <h1>Surname {this.state.surname}</h1>
                <h1>State {this.state.count}</h1>
                <input name="name" onChange={onChange} type="text" placeholder="Name" />
                <input name="surname" onChange={(e)=>onChange(e,'hey')} type="text" placeholder="Surname" />
                <select onChange={onSelect} name="" id="">
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <input onChange={onCheck} type="checkbox" />
                <button onClick={increament} >+</button>
                <button onClick={decreament}>-</button>
                <hr />
                <input onChange={onFilter} type="text" placeholder="filter" />
                {
                    this.state.data.map(({id, name, status})=>{
                        return(

                            <h1 key={id}>
                            {id} {name} {status}
                        </h1>
                    )
                    })
                }
            </div>
        )
    }
}
export default State