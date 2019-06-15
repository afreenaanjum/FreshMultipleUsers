import React from 'react';
import MultipleUser from './MultilpleUser'

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			noofInputFields : [1],
			currentFieldValue : 1, 
			names : []
		}
		 this.handleAdd = this.handleAdd.bind(this)
		 this.handleRemove = this.handleRemove.bind(this)
		 this.handleNameChange = this.handleNameChange.bind(this)
	}

	handleNameChange(name, inputFieldValue){
		console.log(name, inputFieldValue)
		name = Object.assign({},this.state.names[inputFieldValue],name)
		console.log("parent",name)
		this.setState((prevState) => ({
			names : prevState.names.concat(name)
		}))
	}
	
	handleAdd(){
    console.log(this.state) 
		this.setState((prevState) =>({
      noofInputFields : prevState.noofInputFields.concat(prevState.currentFieldValue + 1),
      currentFieldValue : prevState.currentFieldValue + 1
	}))
	
	}

	handleRemove(id){
		// console.log(id)	
		
		const nums =this.state.noofInputFields.filter( no => no != id)
		const names = this.state.names.filter(no => no != id)
		console.log(names)
			this.setState(() =>({	
			 noofInputFields : 	nums,
			 names: names
		}))
		}
	

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
