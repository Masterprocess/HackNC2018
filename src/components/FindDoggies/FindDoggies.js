import React, {
	Component
} from 'react';
import "./FindDoggies.css";

class FindDoggies extends Component {
	constructor() {
		super();
		this.state = {
			age: [],
			animal: [],
			breeds: [],
			email: [],
			city: [],
			description: [],
			media: [],
			mix: [],
			name: [],
			sex: [],
			size: [],
		};

	};

	componentDidMount() {

		fetch('https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.getRandom?format=json&key=b2434a6ca9e8998d7d9423c2f34fbfe7&output=full&animal=dog')
			.then(results => {
				return results.json();
			}).then(data => {
				console.log(data);
				this.setState({
					age: data.petfinder.pet.age.$t,
					animal: data.petfinder.pet.animal.$t,
					city: data.petfinder.pet.contact.city.$t,
					email: data.petfinder.pet.contact.email.$t,
					// media: data.petfinder.pets.pet.photos.photo[7],
					mix: data.petfinder.pet.mix.$t,
					name: data.petfinder.pet.name.$t,
					sex: data.petfinder.pet.sex.$t,
					size: data.petfinder.pet.size.$t
				});

			})

	}

	render() {
		return ( 
			<div class="cardInfo">
				{/* <h1>{this.state.age}</h1>
				<h1>{this.state.animal}</h1>
				<h1>{this.state.mix}</h1>
				<h1>{this.state.name}</h1>
				<h1>{this.state.sex}</h1>
				<h1>{this.state.size}</h1>
				<h1>{this.state.city}</h1>
				<h1>{this.state.email}</h1>
 */}
                <div><h4>{this.state.name}</h4></div>

				<div><p class="type">City: {this.state.city}</p></div>
				<div><p>Age: {this.state.age}</p></div>
				<div><p>Sex: {this.state.sex}</p></div>


			</div>
		)
	}
}

export default FindDoggies;