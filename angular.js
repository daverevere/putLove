var app = angular.module("myApp", ['ngStorage', 'ngAnimate', 'angular-scroll-animate'])


app.controller("mainController", ["$scope", "$localStorage", function($scope, $localStorage, $document){
// $localStorage.$reset();


	// $scope.active = false;
 //  $scope.activeButton = function() {
 //    $scope.active = !$scope.active;
 //  }  
	
$scope.setTheme = function(str){
	$scope.theme = str
}

$scope.$storage = $localStorage.$default({
	userCards:[{"userName":"Yusuke","gender":"his","person":"Samantha","relation":"hero","quote":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","theme":"theme6","commentArray":[{"commentName":"Manny","theComment":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","commentTime":1443753644801},{"commentName":"Terrance","theComment":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?","commentTime":1443753657570}]},{"userName":"Dave","gender":"his","person":"Holly","relation":"wife","quote":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","theme":"theme4","commentArray":[]},{"userName":"Dave","gender":"his","person":"Akira","relation":"son","quote":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","theme":"theme1","commentArray":[{"commentName":"Bob","theComment":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","commentTime":1443753600647},{"commentName":"Charity","theComment":"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","commentTime":1443753621768}]},{"userName":"Macky","gender":"his","person":"Pablo","relation":"hero","quote":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","theme":"theme5","commentArray":[]},{"userName":"Charity","gender":"her","person":"Betty","relation":"mother-in-law","quote":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","theme":"theme3","commentArray":[]}]
	// userCards is the key, and the empty array is the value at that key
// calling the default method to define what we're storing(an array of userCards)
})
	
	$scope.relationsArray = ["friend","inspiration","crush","hero","boyfriend","girlfriend","partner",
	"wife","husband","son","daughter","mother","father","sister","brother","cousin","uncle",
	"aunt","niece","nephew","grandmother","grandfather","grandson","granddaughter","mother-in-law","father-in-law","son-in-law","daughter-in-law"]

	

$scope.userCard = $scope.$storage.userCards
  Card = function (userName, gender, person, relation, quote, theme) {
		this.userName = userName;
		this.gender = gender;
		this.person = person;
		this.relation = relation;
		this.quote = quote;
		this.theme = theme;
		this.commentArray = [];
		// $scope.userCard.unshift(this);
	}


$scope.submitButton = function() {
	var newCard = new Card($scope.userName, $scope.gender, $scope.person, $scope.relation, $scope.quote, $scope.theme)
	$scope.$storage.userCards.unshift(newCard);
	$('#myModal').modal('hide');
	$scope.userName = $scope.gender = $scope.person = $scope.relation = $scope.quote = $scope.theme = '';
}

 //  comment = function (commentName, theComment) {
	// 	this.commentName = commentName;
	// 	this.theComment = theComment;
	// 	$scope.commentDisplay.unshift(this);
	// }

$scope.commentSubmit = function($index, commentName, theComment){
 // var newComment = new comment ($scope.commentName, $scope.theComment)
 // $scope.userCard.comment.push($index) 
 var commentTime = Date.now();//Date is a built-in javascript object that retrieves the timestamp
 $scope.userCard[$index].commentArray.push({commentName:commentName, theComment:theComment, commentTime : commentTime})//added variable commentTime, and we had to make a key value pair because it's an object an array
 $scope.theComment = ''
 $scope.commentName = ''

 // console.log($scope.userCard[$index].commentArray)
 // go into this particular User card's comment Array and push in this particular commentname/comment
}

$scope.currentCard = 0

$scope.setCardIndex = function(index) {
$scope.currentCard = index //here's where we're storing the number of the card we're looking at
}

$scope.scrollDown = function() {
	var scrollHeight = document.documentElement.clientHeight * ($scope.currentCard +1);
	$("body").animate({scrollTop: scrollHeight}, "slow")
// scrollTo(0, );
$scope.currentCard += 1;
// $document.scrollToElement(duration);
}
// $scrollTo(0, document.documentElement.clientHeight * ($scope.currentCard +1))//Here we're adding one to whatever the current card is now 
//(so if we're at 3 then we'll be at 4). And we're multiplying that by the height of our current view. And we're telling the page to scroll to whatever position that is.
// $scope.currentCard += 1 //Here we're adding one more to the card, so that on the next click, this function will run and take us one more page down
$scope.scrollUp = function() {
	var scrollHeight = document.documentElement.clientHeight * ($scope.currentCard -1);
	$("body").animate({scrollTop: scrollHeight}, "slow")
$scope.currentCard -= 1;
}


$scope.userNameClick = function($index) {
	 // $scope.quotesList[$index].sort(author)
	$scope.sortUser = $scope.userCard[$index].userName;
	 
}

$scope.relationClick = function($index) {
	 // $scope.quotesList[$index].sort(author)
	$scope.sortRelation = $scope.userCard[$index].relation;
	 
}

$scope.hideShare = true

$scope.shareClick = function(){
	$scope.hideShare = !$scope.hideShare
}


var d = new Date();
var n = d.toDateString();



}]);

