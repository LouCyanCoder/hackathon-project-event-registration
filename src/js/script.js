var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
import { Event } from './event.js'

document.addEventListener('DOMContentLoaded', async () => {
    //load data from events API
    const loadData = async () => {
        const response = await fetch('https://test-api.codingbootcamp.cz/api/f6d612fc/events');
        const data = await response.json();
        return data;
    }
    
    //store data in data array of objects
    const data = await loadData();
    console.log(data);
    
    
    //create array for objects to be stored, and two variables for containers
    let objectList = [];
    const containerEvents = document.querySelector('.container__events');
    const containerFeature = document.querySelector('.container__feat');

    //upon the data loaded from API, create element and call createEvent method as standard to display event-list boxes
    const createObject = async () => {

        data.forEach(element => {
            const event = new Event(element.id, element.name, element.data, element.description, element.image_url)
            objectList.push(event);
            event.createEvent();
            containerEvents.appendChild(event.elemBox);

            document.querySelector('#btn'+event.id).addEventListener('click', () => {
                console.log(event.id)
                event.populateFeature(); 
            })
        });
        
        
    }

    //call create object with displaying event boxes
    createObject();

    objectList[1].populateFeature();
    

    //before appending of feature content first clear the existing content through innerHTML = ''
})
