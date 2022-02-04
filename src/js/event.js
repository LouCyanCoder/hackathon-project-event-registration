export class Event {

    constructor(id, name, date, description, imageUrl) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.description = description;
        this.imageUrl = imageUrl;
        this.elemBox = null;
        
        this.elemFeatCont = null;

    }

    createEvent() {
        const eventBox = document.createElement('div');
        eventBox.classList.add('container__events--box');

        const heading3 = document.createElement('h3');
        heading3.textContent = this.name;

        const btn = document.createElement('button');
        btn.classList.add('btn--more');
        btn.id = 'btn'+this.id;
        btn.textContent = 'More';
        //btn.addEventListener('click', /*call function to create feature of the event cliecked*/ )

        eventBox.appendChild(heading3);
        eventBox.appendChild(btn);
        this.elemBox = eventBox;
    }

    populateFeature() {
        
        const image = document.querySelector('.container__feat--img img');
        image.src = this.imageUrl;
        image.alt = this.name;
        
        const heading2 = document.querySelector('.container__feat--content h2');
        heading2.textContent = this.name;

        const evetnDesc = document.querySelector('.container__feat--content p');
        evetnDesc.textContent = this.description;

        //check whether attaching register button ID should be done here
        // const btnPost = document.querySelector('.btn--register');
        // btnPost.id = '#btnReg'+this.id;

        }

       
    returnName() {
        return this.name;
    }

    returnData() {
        myData = {
            'id': this.id,
            'name': this.name,
            'date': this.date,
            'description': this.description
        }
        return myData;
    }


    
}