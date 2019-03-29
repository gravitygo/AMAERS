/* 
	NOVEMBER 5, 2017
	AMA OED Automated Answers Chrome Extension
*/

/*
	How it works?
	I have made an array of questions and answers for the function to look for.
	It works by first, looking for the question text in the page, then it checks if it is a check box or a text box,
	then it inputs the value or selects it from the multiple choices' check box. 
	
	It is still under development so there are still a lot of subjects that are not included.
	If you have answers for other subjects, please message me.

	[DISCONTINUED]
	I have spent a lot of time for this to work, but now I don't have one so I've decided to make it open source to you.
*/


// HEHE ANTI-OED
$('.usertext').text("Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas");
$('a[href="http://kto12.amauonline.com/mod/page/view.php?id=4269"]').text("Post Student Concern na walang silbi");

// INSERT TO MAIN BLENDED.AMAUONLINE.COM PAGE
// DON'T TRY TO PUT IT ON AN EXTERNAL FILE BECAUSE CHROME DOESN'T ALLOW LOADING OF SUCH FILES
// I'VE MADE A GITHUB PAGE BEFORE AND UPLOADED THE MAIN.FUNCTIONS.JS FILE BECAUSE CHROME DOESN'T ALLOW LOADING OF FILES ON HTTP SERVERS. IF YOU'LL TRY TO UPLOAD ONE, DO IT ON GITHUB. I'VE REMOVED THAT PAGE SO CHANGE THE <script src=""></script> TO YOUR FILE.
var main_insert = '	<div style="width:100%;margin-bottom:2%"> <div id="main_pop" style="background-image:url(&quot;https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D&quot;);height:100%;width:100%"><div style="background-color:rgba(106,27,154,0.5);width:100%;height:100%;"><div style="width:100%;height:100%;z-index:200"><div style="padding:40px 50px;"><style>h3, h2, h5 {font-family: arial !important;color:white}h5 {text-align:left}#input, #highlight {background-color:#1e2b38;color:#bdc3c7;padding:15px;font-family:arial;outline:none !Important;border:1px solid #1e2b38;-webkit-appearance: input;border-radius: 5px;transition: all 300ms ease;cursor:default;font-size:10px;}#input:hover , #highlight:hover {background-color:#2e2b38;border: 1px solid white;}</style><div style="line-height:0.5"><h2>AMA OED Automated Answers</h2><h3>OPEN SOURCE</h3></div><h3 style="letter-spacing:1px;font-size:15px;font-size:1.3vw"><b>CONFIGURATION</b></h3><br/><div id="input" style="float:left;margin-right:0.5%">ANSWER (INPUT)</div><div id="highlight" style="float:left;margin-bottom:2%">ANSWER (HIGHLIGHT)</div><h5 style="clear:both;">The former:<br/>It automatically inputs the answers to either text boxes or check boxes. Text boxes are automatically inputted.</h5><h5>The latter:<br/>It higlights the answers in either text box ones or check box ones.</h5></div></div></div></div></div></div><script src="https://jersonreyes.github.io/jquery.min.js"></script><script src="https://jersonreyes.github.io/main.functions.js"></script>';
$('#region-main').prepend(main_insert);

// REST OF THE CODE GOES TO MAIN.FUNCTIONS.JS FILE