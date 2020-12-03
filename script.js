
const charactersList = document.getElementById('charactersList');
let dataa = [];
let searchword ;
function loadCharacters (){
    searchword = document.getElementById("searchBar").value;
    var urlsearchword = decodeURI(searchword);
        fetch('https://kitsu.io/api/edge/anime?filter[text]='+urlsearchword)
        .then(response => {
            return response.json();
        })
        .then(data => {
            Array.prototype.push.apply(dataa, data.data);
            
            
        })

        setTimeout(function(){ console.log(dataa); jyaha2eme();}, 1200);
        
            
        
        
};

function jyaha2eme(){
    
   const htmlString = dataa 
    
        .map((dataa) => {
            return `
            <li  class="character">
                <h2>${dataa.attributes.canonicalTitle} </h2>
                
                
                <img src="${dataa.attributes.posterImage.medium}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
   
    dataa = [];
};


var input = document.getElementById("searchBar");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});