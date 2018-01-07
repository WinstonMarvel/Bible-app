// Load default passage
	//	Read and parse JSON Files
	// 	Inject into DOM

// Listen for user input on select passage dropdown
	// Choose passage
	// Load new passage
	// Add listensers to Previous and Next Chapter buttons
	// Change the passages

//Bugs and Fixes
	// Identify Last and first Chapter and disallow next/previous chapter
	// Disable previous and next buttons for First and Last  Chapters
	

function MyBible(version){
	console.log("Creating Bible");
	var _this = this;
	var mybibleContent;
	var version = version;
	var currentBook = "Genesis"; //default
	var currentChapter = 1; 

	this.nextChapter = function(){
		currentChapter += 1;
		_this.updateView();
	}

	this.previousChapter = function(){
		currentChapter -= 1;
		_this.updateView();
	}

	this.getCurrentChapter = function(){
		return currentChapter;
	}

	this.getCurrentBook = function(){
		return currentBook;
	}

	this.getBookList = function (){

	}

	this.getNumberofChapters = function (){
		count = 0;
		for(var chapter in mybibleContent[currentBook]){
			if(mybibleContent[currentBook].hasOwnProperty(chapter)){
				console.log(chapter);
				count++;    
			}
		}
		return count;
	}

	this.setCurrentChapter = function (chaptername){
		currentChapter = chaptername;
	}

	this.getBible = function(){
		$.ajax({
			url:"/Bible/bible-assets/MSG.json",	
			success: function(responseTxt){
		 		mybibleContent = responseTxt; //set content to JSON data
		 		_this.updateView();
		}});
		return mybibleContent; 
	}

	this.setCurrentBook = function (bookname){
		currentBook = bookname;
	}

	this.updateView = function(){
		var versesToDisplay = mybibleContent[currentBook][currentChapter];
		console.log("verseToDisplay: ",versesToDisplay[1]);
		console.log(typeof(versesToDisplay));
		console.log(Array.isArray(versesToDisplay));
		var verseHTML = "";
		for(i in versesToDisplay){
			console.log(i, " : ", versesToDisplay[i]);
			verseHTML += "<span class='verse-number'> " + i + " </span>" + versesToDisplay[i];
		}
		console.log(verseHTML);
		$("#title .bookname,#title .chapter,#passage").fadeOut(100, function(){
			console.log("fadein");
			$("#title .bookname").html(currentBook);
			$("#title .chapter").html(currentChapter);
			$("#passage").html(verseHTML);
			$(this).fadeIn(100);
		});
		
		//Convert JSON Object to string and print to screen
			// 1.	Get Bookname and insert into h2 
			// 2.	Get Chapter number and append to h2
			// 3. 	Get Verses and print with verse number in a span next to it.
	}
}


var Bible = new MyBible("MSG");
Bible.getBible();







//Create Handlers
// var next = document.querySelector("#next");
// var prev = document.querySelector("#prev");
// prev.onclick = Bible.previousChapter;

$("#next").on("click",function(){
	$("html, body").animate({scrollTop:0},900);
	Bible.nextChapter();
	
});


$("#prev").on("click",function(){
	$("html, body").animate({scrollTop:0},900);
	Bible.previousChapter();
});


$("#book").on("change", function(){
	Bible.setCurrentBook($("#book").val());
	//Populate chapters
	var numberOfChapters = Bible.getNumberofChapters();
	var htmlString;
	for(var i=1; i<=numberOfChapters;i++){
		htmlString += "<option value=" + i + ">" +i + "</option>";
	}
	$("#chapter").html(htmlString);
	$("#chapter").change();

});

$("#chapter").on("change", function(){
	Bible.setCurrentChapter($(this).val());
});


$("#read").on("click", function(e){
	e.preventDefault();
	Bible.updateView();
	if($(window).width() < 768){
		$("button.navbar-toggle").click();
	}
});




