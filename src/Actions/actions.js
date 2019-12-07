import firebaseApp from "../firebase.js"

function addSong(song){
    return{
        type:"ADD_SONG",
        song
    }
}

function deleteSong(songId){
    return{
        type:"ADD_SONG",
        songId
    }
}
function getRoads(){
    let y=[];
    let fire= firebaseApp.firestore().collection('roads').get().then(function(snapshot) {
          
        snapshot.docs.forEach((docSnapshot) => {
          y.push(docSnapshot.data().name)
        })
      });
      fire.then(res=>y.push(res))
      return y
}
function addRoad(road){
    return{
        type:"GET_ROADS",
        road:getRoads()
    }
}
export * from "./actions" ;
