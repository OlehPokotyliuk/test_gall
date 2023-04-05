fetch('./pets.json')
    .then(data => data.json())
    .then(data2 => pageBuilder(data2));
    
let head = document.querySelector('.header');

function pageBuilder(pets) {

    for (let pet of pets) {
        let block = document.createElement('div');
        block.classList.add('pets-item');
        let name = document.createElement('h1');
        // let img = document.createElemenblock('p');
        let type = document.createElement('h2');
        let breed = document.createElement('p');
        let description = document.createElement('p');
        let age = document.createElement('p');
        let inoculations = document.createElement('p');
        let diseases = document.createElement('p');
        let parasites = document.createElement('p');

        name.textContent = pet.name;
        // img.textContent = pet.img;
        type.textContent = pet.type;
        breed.textContent = pet.breed;
        description.textContent = pet.description;
        age.textContent = pet.age;
        inoculations.textContent = pet.inoculations;
        diseases.textContent = pet.diseases;
        parasites.textContent = pet.parasites;
        name.textContent = pet.name;
        block.appendChild(name);
        // block.appendChild(img);
        block.appendChild(type);
        block.appendChild(breed);
        block.appendChild(description);
        block.appendChild(age);
        block.appendChild(inoculations);
        block.appendChild(diseases);
        block.appendChild(parasites);

        head.appendChild(block);

    }
    return head;


}