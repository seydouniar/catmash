function loadData(){
    var myRequest = new Request('cats.json');
    fetch(myRequest).then(
        function(response){
            if(response.ok){
                response.json().then(function(data){
          
                    var rand = Math.floor(Math.random() * data.images.length);
                    var rand1 = Math.floor(Math.random() * data.images.length);

					document.getElementById('cat1').innerHTML = '<img id="cat1_" class="img-thumbnail" style="width:400px;height:500px;" src = "'+data.images[rand].url+'"/>';
					document.getElementById('cat2').innerHTML = '<img id="cat2_" class="img-thumbnail" style="width:400px;height:500px;" src = "'+data.images[rand1].url+'"/>';
                    

                    document.getElementById('cat1_').addEventListener('click',function(e){
                        alert("cat1");
                    });
                    document.getElementById('cat2_').addEventListener('click',function(e){
                        alert("cat2");
                    });
                })
            }else{
                throw new Error("Données non disponible pour cette date");
            }
            
    });

}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}