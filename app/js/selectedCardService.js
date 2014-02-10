
var myApp = angular.module('myApp');

myApp.service('selectedCardService', function() {
        
		var card = {};
		var selectedCardService = {};
		
		selectedCardService.setSelectedCard = function(selectedCard){
		     console.log(selectedCard);
		     card = selectedCard;
		}	 
		selectedCardService.getSelectedCard = function(){
		     return card;
		}
		return selectedCardService;
  });