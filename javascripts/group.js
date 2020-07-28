"use strict";

let _users = [
    {
        name: "Gustaw Maciejczak",
        age: "6",
        address: "xx street",
        allergy: "none",
        language: "Polish",
        birthday: "26.11.",
        email: "gm@example.pl",
        phone: "778890302",
        picture: "https://o2b.elevuxdev.com/wp-content/uploads/revslider/kid-green.png"
      },
      {
        name: "Pola Raksa",
        age: "5",
        address: "yy street",
        allergy: "none",
        language: "Polish, Spanish",
        birthday: "05.04.",
        email: "mom@example.com",
        phone: "89898989",
        picture: "https://i.pinimg.com/originals/f7/fc/87/f7fc87839fa5df99dc679d6b0b1e2821.png"
      },
      {
        name: "Artur Rojek",
        age: "5",
        address: "zz street",
        allergy: "hazelnuts",
        language: "Polish, English",
        birthday: "02.02.",
        email: "drojek@gmail.com",
        phone: "456743579",
        picture: "https://img.pngio.com/kid-dancing-free-transparent-png-download-pngkey-boy-kids-dance-png-820_760.png"
      },
  {
    name: "Kamil Kosa",
    age: "4",
    address: "Bielany, XX street",
    allergy: "orange",
    language: "Polish",
    birthday: "23.05.",
    email: "kosa.malgorzata@gmail.com",
    phone: "226789549",
    picture: "http://czasdzieci.pl/pliki/wydarzenia/2015/f_w_73267_0c946.jpg"
  },
  {
    name: "Jacob Chmielewski",
    age: "5",
    address: "Bielany, YY street",
    allergy: "almonds",
    language: "English & Polish",
    birthday: "12.03.",
    email: "chmielewski@example.pl",
    phone: "224445566",
    picture: "https://c.pxhere.com/photos/4a/11/boy_blond_child_young_caucasian_kid_happy_portrait-1060064.jpg!d"
  },
  {
    name: "Emilia Nowak",
    age: "5",
    address: "Bielany, ZZ",
    allergy: "horses",
    language: "Polish",
    birthday: "01.11.",
    email: "knowak@example.com",
    phone: "229967545",
    picture: "https://www.pngkey.com/png/detail/248-2485262_kids-girl-kids-wear-png.png"
  },
];

console.log(_users);

// credits - Rasmus Cederdorff classes

// Adding persons to the DOM 
function appendPersons(persons) {
  for (let index = 0; index < persons.length; index++) { // looping trough all persons
    let person = persons[index]; // save the exact person we are look at in the local variable person

    //creating person data, HTML tags and adding to the DOM, the element #gridPersons
    document.querySelector("#grid-persons").innerHTML += `
      <article onclick="showDetailView(${index})">
        <h2>${person.name}</h2>
        <img src="${person.picture}">
      </article>
      `;
  }
}

// call appendPersons with the parameter _users
appendPersons(_users);

// Show the details view of the user
function showDetailView(index){
  let selectedUser = _users[index];
  console.log(selectedUser);
  
  // todo: display user details

  // navigate to the detail view
  // navigateTo("detail-view");
}








// eventually another way (but have to work on that)

// function addGroup(){
  //for (let member of group){
    //let htmlTemplate =`<h2>${member.name}</h2><img src="{member.img}">`;

   // document.querySelector("#grid-persons").innerHTML +=
    //htmlTemplate;
 // }
//}