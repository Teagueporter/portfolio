document.getElementById("random").addEventListener("click", function
(event){
  event.preventDefault();
  const url = "http://api.icndb.com/jokes/random";
  console.log(url);
  fetch(url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let result = "";
      result += "<p id='jokeStyle'>" + json.value.joke + "</p>";
      console.log(result);
      document.getElementById("joke").innerHTML = result;
    });
});












// function onClick(e){
//   e.preventDefault();
//   let url = "http://api.icndb.com/jokes/random"
//   fetch(url)
//     .then(function(response){
//       if(response.status != 200){
//         return{
//           text: "Error calling the Chuck Norries API service" + response.statusText
//         }
//       }
//       return response.json();
//     }).then(function(json){
//       updateResult(json.text);
//     });
// }
//
// function updateResult(info){
//   document.getElementByID('result').textContent = info;
// }
//
//
// document.getElementByID('random').addEventListener('click', onClick);
