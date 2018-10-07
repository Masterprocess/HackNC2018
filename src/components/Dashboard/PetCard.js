import React, { Component } from "react";
import FindDoggies from "../FindDoggies/FindDoggies.js";
import Popup from "reactjs-popup";

class PetCard extends Component {
    constructor(props){
        super(props);
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

        this.state = {doggo : new FindDoggies()};
        this.state.doggo.render();
        console.log(this.state.doggo.name);
    }

    randomDog(){
        return Math.floor(Math.random() * Math.floor(6));
    }

    makeMoreDogs(){
        this.state.doggo.render();

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
    
    render(){
        var dogNum = this.randomDog() + 1;
        console.log(dogNum);

        console.log("boop");

        

        return( 
        <div class="row offset-lg-3" >

            <div class="cardHolder col-6 ">
                <div id="card">
                    <div class="backImage">
                        <img src={"../assets/dog" + dogNum + ".png"}/>
                    </div>

                    <FindDoggies/>

                    <button class="expand">LEARN MORE</button>
                </div>
                <div class="col-12 swipeButtons">
                    <Popup trigger={<button id="yes">Yep</button>} position="top center"><div><strong>Hi There!</strong><br/>This dog is available for foster care for a minimum of 3 months! <strong>See full Profile!</strong></div></Popup>
                    <button id="no" onClick="" >No, <br/> Not Today</button>
                    {/* Button will reload page with new dog information in the future */}
                </div>
            </div>
        </div>
      );
    }

  }

  export default PetCard;