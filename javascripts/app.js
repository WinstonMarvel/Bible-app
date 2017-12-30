// Load default passage
	//	Read and parse JSON Files
	// 	Inject into DOM

// Listen for user input on select passage dropdown
	// Choose passage
	// Load new passage
	// Add listensers to Previous and Next Chapter buttons
	// Change the passages


function MyBible(version){
	console.log("Creating Bible");
	var _this = this;
	var mybibleContent;
	var version = version;
	var currentBook = "Genesis"; //default
	var currentChapter = 1; 

	this.nextChapter = function(){
		currentChapter += 1;
	}

	this.previousChapter = function(){
		currentChapter -= 1;
	}

	this.getCurrentChapter = function(){
		return currentChapter;
	}

	this.setCurrentChapter = function (chaptername){
		currentChapter = chaptername;
	}

	this.getBible = function(){
		$.ajax({
			url:"/Bible/bible-assets/MSG.json",	
			success: function(responseTxt){
		 		mybibleContent = responseTxt; //set content to JSON data
		 		setPage(responseTxt);
		}});
	}

	this.setCurrentBook = function (bookname){
		currentBook = bookname;
	}
}


function setPage(passageObject){
	//Convert JSON Object to string and print to screen
		// 1.	Get Bookname and insert into h2 
		// 2.	Get Chapter number and append to h2
		// 3. 	Get Verses and print with verse number in a span next to it.
}

var bible = new MyBible("MSG");
bible.getBible();




