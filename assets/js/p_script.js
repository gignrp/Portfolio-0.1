function pile_fase() { if ( Math.floor(Math.random() * 50) > 25) alert('Pile') 
else alert('Face') } document.getElementById('bouton').addEventListener('submit', function(event) {pile_fase()})
