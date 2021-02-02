import {
  Navigation
} from '/pages/navigation/index.js';

export const WatchList = () => {
  const auth = firebase.auth().currentUser;
  const user = auth.uid
  

  const nav = Navigation();
  const rootElement = document.createElement('div');

  rootElement.appendChild(nav);

  const contentElement = () => {
    const boxElement = document.createElement('div');
    boxElement.innerHTML = `
  <div class="backgroundPoster" id="">
    <img class="poster" src="" alt="Capa do filme ..."/>
    </div>
  </div>
  `;

  const docRef = firebase.firestore().collection("users").doc(user);

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log(doc.data().listwatched);
        console.log(doc.data().listToWatch);

    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


    return boxElement
  }
  rootElement.appendChild(contentElement())

  return rootElement;
};
