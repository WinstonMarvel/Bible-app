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
	var mybible = this;
	this.version = version;
	this.currentBook = "Genesis"; //default
	this.currentChapter = 1; 
	this.content = "test";

	this.next_chapter = function(){
		this.currentChapter += 1;
	}
	this.previous_chapter = function(){
		this.currentChapter -= 1;
	}
	this.getCurrentChapter = function(){
		return this.currentChapter;
	}
	this.LoadBible = function(){
		$.ajax({url:"/Bible/bible-assets/MSG.json",	success: function(responseTxt){
		 		mybible.content = responseTxt; //set content to JSON data
		 		console.log(mybible.content);
		}});
	}
}

// var bible = new MyBible("MSG");
// bible.next_chapter();


