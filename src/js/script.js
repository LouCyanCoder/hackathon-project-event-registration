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

    objectList[0].populateFeature();
    

    //before appending of feature content first clear the existing content through innerHTML = ''
})