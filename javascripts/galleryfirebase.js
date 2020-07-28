// Firebase Storage for gallery of pictures in Parent subsite

// Create a reference under which you want to list
let listRef = storageRef.child('pictures');
let pictureTags = [];

// Find all the prefixes and items.
listRef.listAll().then(function(res) {
  res.prefixes.forEach(function(folderRef) {
    // All the prefixes under listRef.
console.log("prefixes: ", folderRef)
  });
  res.items.forEach(function(itemRef) {
    // All the items under listRef.
   itemRef.getDownloadURL().then((url) => {
     let htmlTemplate = `<img src="${url}" alt="Gallery image">`;
     document.querySelector("#gallery").innerHTML += htmlTemplate;
     })
});
}).catch(function(error) {
  console.log(error)
});





// news to develop

//firebase.database().ref('newsboard').once('value', 
//function(snapshot) {
    //snapshot.forEach(function(childSnapshot) {
       // var childKey = childSnapshot.key;
       // var childData = childSnapshot.val();
        // });
         // });
