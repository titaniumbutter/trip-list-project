document.querySelector("form").addEventListener("submit", addTrip);
const message = document.querySelector('#message')

function addTrip(event) {
  event.preventDefault();
  let inputField = document.querySelector('input')

  const trip = document.createElement('li')

  const tripName = document.createElement("span");
  tripName.textContent = inputField.value;
  tripName.addEventListener("click", crossOffTrip);
  trip.appendChild(tripName)

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteTrip);
  const tripId = inputField.value.replace(/\s+/g, '');
  deleteBtn.setAttribute('id', tripId);
  trip.appendChild(deleteBtn);

  const list = document.querySelector("ul");
  list.appendChild(trip);

  inputField.value = ''
}
function addTrip2(event) {
    event.preventDefault();
    let inputField = document.getElementById('2')
  
    const trip2 = document.createElement('li')
  
    const tripName = document.createElement("span");
    tripName.textContent = inputField.value;
    tripName.addEventListener("click", crossOffTrip);
    trip2.appendChild(tripName)
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deleteTrip);
    const tripId = inputField.value.replace(/\s+/g, '');
    deleteBtn.setAttribute('id', tripId);
    trip2.appendChild(deleteBtn);
  
    const list = document.getElementById("list2")
    list.appendChild(trip2);
  
    inputField.value = ''
  }

function deleteTrip(event) {
    event.target.parentNode.remove();
}

function crossOffTrip(event) {
    event.target.classList.toggle('checked')
}
