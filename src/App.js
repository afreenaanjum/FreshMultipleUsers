import React from 'react';
import MultipleUser from './MultilpleUser'

class App extends React.Component{
	removedFieldTag = "RemovedField"
	constructor(props){
		super(props)
		this.state = {
			noofInputFields : [0],
			currentFieldValue : 0, 
			names : [{id: 0, name: ""}]
		}
		 this.handleAdd = this.handleAdd.bind(this)
		 this.handleRemove = this.handleRemove.bind(this)
		 this.handleNameChange = this.handleNameChange.bind(this)
	}

   

	handleNameChange(name, position){
		// console.log(name, position)
		//const findNameObject = this.state.names.find(oldName => oldName.id == position)
		// console.log("find",findNameObject)
		// const indexOfObj = this.state.names.findIndex(oldName => oldName.id == position)
		// console.log(indexOfObj)
		//  name = Object.assign({},this.state.names,name)
		//this.state.names = this.state.names.splice(indexOfObj,1)
		//  console.log('Remove object',this.state.names) 
		 
		// console.log('Add object',this.state.names)
		let names = this.state.names
        names[position] = name
		// console.log("parent",name)
		this.setState((prevState) => ({
			names : names
		}))
		console.log(this.state.names)
	}
	
	handleAdd(){
	    //console.log(this.state)
		let names = this.state.names
		//console.log(names)
		let nextFieldValue = this.state.currentFieldValue + 1
		//console.log(nextFieldValue)
		names[nextFieldValue] = {id: nextFieldValue, name: ""} 
		//console.log(names)
		this.setState((prevState) =>({
			noofInputFields : prevState.noofInputFields.concat(prevState.currentFieldValue + 1),
			currentFieldValue : prevState.currentFieldValue + 1,
			names: names
	}))
	//console.log("state after modification: ")
	//console.log(this.state)
	}

	handleRemove(id){
		//console.log(id)
		//console.log(this.state)	
		const nums =this.state.noofInputFields.filter( no => no != id)
		//console.log(nums)
		const names = this.state.names.filter(no => no.id != id)
		//console.log(names)
		this.setState(() =>({	
			 noofInputFields : 	nums,
			 names: names
		}))
		}
	
    // formUserNameFileds(){
	// 	let userNameFields = []
	// 	for(let i=0; i<this.state.numOfInputFileds; ++i){
	// 		if (this.state.names[i] == this.removedFieldTag){
	// 			continue
	// 		}
	// 		userNameFields[i] = <MultipleUser 
	// 		handleNameChange = {this.handleNameChange} 
	// 		position ={i} 
	// 		handleRemove = {this.handleRemove} 
	// 	/>
	// 	}
	// 	return userNameFields;
	// }

	render(){
		return(
			<div>	
				<label> Name:
					<input type='text' placeholder = 'Enter name'/>
					<button onClick={this.handleAdd}>Add</button>
					<input type='submit' />
					<br/>
				</label>
				<ul>
					{
						this.state.noofInputFields.map( count =>
			
							<li key ={count}>
								<MultipleUser 
									handleNameChange = {this.handleNameChange} 
									position ={count} 
									handleRemove = {this.handleRemove} 
								/>
							</li> 	 
							
						)
					}
				</ul>
				
			</div>
		)
			
	}
}



export default App;
