$(document).ready(function(){
	$("#home-btn").click(function() {
		AnimateSlideShow(0);
		$("#info-text").text("Background Image by Sandra Seitamaa");
		if (projectTabOpen == true)
		{
			ProjectPopOut();
		}
	});

	$("#prj-btn").click(function() {

		AnimateSlideShow(1);
		$("#info-text").text("Background Image by Atanas Dzhingarov");
		if (projectTabOpen == true)
		{
			ProjectPopOut();
		}
	});

	$("#abt-btn").click(function() {
		AnimateSlideShow(2);
		$("#info-text").text("Background Image by Ferenc Almasi");
		if (projectTabOpen == true)
		{
			ProjectPopOut();
		}
	});

	$("#comp-btn").click(function() {
		AnimateSlideShow(3);
		$("#info-text").text("Background Image by Guillaume Fischer");
		if (projectTabOpen == true)
		{
			ProjectPopOut();
		}
	});

	$(".reblock").click(function() {

	});

	$(".expand-icon").click(function() {
		ProjectPopOut(this);
	});

	$(".prj-close").click(function() {
		ProjectPopOut(this);
	});

	$("#dark-overlay").click(function() {
		ProjectPopOut();
	});

	$("#abt-education").click(function() {
		CheckAbtTabSelected("Education", this);

	});

	$("#abt-interests").click(function() {
		CheckAbtTabSelected("Interests", this);

	});


	$(".comp-tab-overlay").click(function() {
		if (pickedTab != true)
		{
			ReformatComp();
		}
		pickedTab = true;
		$('.comp-tab-block').each(function(i, obj) {
	    	$(obj).addClass("resized-block");
		});
		$('.comp-tab-overlay').each(function(i, obj) {
	    	$(obj).addClass("resized-tabs");
		});
	});

	$("#java-tab").click(function(){
		currentTab = "Java";
		$("#comp-title").text(currentTab);
	});

	$("#cplusplus-tab").click(function(){
		currentTab = "C++";
		$("#comp-title").text(currentTab);
	});

	$("#java-tab").mouseenter(function(){
		$("#comp-title").text("Java");

	});

	$("#java-tab").mouseleave(function(){
		if (pickedTab == false)
		{
			currentTab = "Compendium";
			$("#comp-title").text(currentTab);
		}
		else
		{
			$("#comp-title").text(currentTab);
		}
	});

	$("#cplusplus-tab").mouseenter(function(){
		$("#comp-title").text("C++");
	});

	$("#cplusplus-tab").mouseleave(function(){
		if (pickedTab == false)
		{
			currentTab = "Compendium";
			$("#comp-title").text(currentTab);
		}
		else
		{
			$("#comp-title").text(currentTab);
		}
	});

	$("#comp-close").click(function() {
		ReformatComp();
		pickedTab = false;
		$('.comp-tab-block').each(function(i, obj) {
	    	$(obj).removeClass("resized-block");
		});
		$('.comp-tab-overlay').each(function(i, obj) {
	    	$(obj).removeClass("resized-tabs");
		});
	});

	$(".comp-list-item").click(function(){
		if (selectedCompItem != null)
		{
			$(selectedCompItem).removeClass("comp-list-item-highlight");
		}
		selectedCompItem = $(this);

		$(selectedCompItem).addClass("comp-list-item-highlight");
		//$(".comp-article").addClass("comp-article-highlight");

	});

	var slideUp = false;
var pickedTab = false;
var pickedTabAbt = false;
var currentTab = "Compendium";
var currentTabAbt = "About";
var selectedCompItem = null;
var projectTabOpen = false;

var currentTabAbtObj = null;
var previousTabAbtObj = null;


var selectedCloseBtn = null;
var selectedExpandIcon = null;
var selectedReblock = null;
var selectedReblockOverlay = null;
var selectedBlockContent = null;
var selectedBotBar = null;
var selectedSmallTitle = null;
var selectedBtnPad = null;
var selectedIconTitle = null;


function AnimateSlideShow(s=0)
{
	var l = s * -100;
	l = l + "vw";

	$("#slideshow-nav").animate({left: l}, 800, function() {

	});
}

function CustomFadeIn()
{
	$(".fader").fadeIn(2000);
}

function CustomFadeOut()
{

}

function CustomFadeToggle()
{
	if ($(".fader").css('display') == 'none')
	{
		$(".fader").show();
    	$(".fader").fadeIn(2000);
	}
	else
	{
		$(".fader").fadeOut(2000, function() {$(".fader").hide();});

	}
}

function SlideUpTab()
{
	$(".bottom-slider").animate({bottom: "+=9vh"}, 800, function() {});


}

function SlideDownTab()
{
	$(".bottom-slider").animate({bottom: "-=9vh"}, 800, function() {});
}

function SlideTabToggle()
{
	if (slideUp == false)
	{
		$(".bottom-slider").animate({bottom: "+=9vh"}, 600, function() {slideUp = true});
	}
	else
	{
		$(".bottom-slider").animate({bottom: "-=9vh"}, 600, function() {slideUp = false});
	}


}

function ScrollDown()
{
	$("body,html").animate({scrollTop: $("body").height()}, 800);
}

function ReformatComp()
{
	if (pickedTab == true)
	{
		$("#comp-list-block").fadeOut(600, function() {

		});
		$("#comp-close").fadeOut(600, function() {

		});
		$("#comp-title").animate({bottom: "+=16vh"}, 500, function() {
			$("#comp-desc").fadeIn(250, function() {

			});
		});
	}
	else
	{

		$("#comp-desc").fadeOut(250, function() {
			$("#comp-desc").hide();
			$("#comp-list-block").fadeIn(600, function() {

			});
			$("#comp-close").fadeIn(600, function() {

			});
			$("#comp-title").animate({bottom: "-=16vh"}, 500, function() {});
		});

	}
}

function CheckAbtTabSelected(txt, obj)
{
	if (txt != currentTabAbt)
	{
		pickedTabAbt = false;
		if (currentTabAbt == "About")
		{
			ReformatAbt();
		}
		MinimiseTabs(previousTabAbtObj);
		currentTabAbt = txt;

		currentTabAbtObj = obj;
		previousTabAbtObj = obj;

		ExpandTabs();
	}
	else
	{
		pickedTabAbt = true;
		currentTabAbt = "About";
		MinimiseTabs(previousTabAbtObj);
		ReformatAbt();
		currentTabAbtObj = null;
		previousTabAbtObj = null;
	}
}

function MinimiseTabs(obj)
{
	if (obj != null)
	{
		$(obj).children(".abt-tab-description").animate({height: "toggle"}, 500, function() {
			$(obj).children(".abt-tab-title").animate({width: "1vw"}, 1000, function() {

					$(obj).removeClass("tab-expander");
			});

		});



	}


}

function ExpandTabs()
{
	if (currentTabAbtObj != null)
	{
		$(currentTabAbtObj).addClass("tab-expander");

		$(currentTabAbtObj).children(".abt-tab-title").animate({width: "60vw"}, 1000, function() {
			$(currentTabAbtObj).children(".abt-tab-description").animate({height: "toggle"}, 500, function() {

			});
		});
	}
}

function ReformatAbt()
{
	if (pickedTabAbt == true)
	{
		$("#abt-title").animate({bottom: "+=16vh"}, 500, function() {
			$("#abt-desc").fadeIn(250, function() {

			});
		});
	}
	else
	{
		$("#abt-desc").fadeOut(250, function() {
			$("#abt-desc").hide();
			$("#abt-title").animate({bottom: "-=16vh"}, 500, function() {});
		});

	}
}

function ProjectPopOut(obj)
{
	if (projectTabOpen == true)
	{
		projectTabOpen = false;
		$("#dark-overlay").fadeOut(function(){$("#dark-overlay").hide();});
		$(selectedCloseBtn).hide();
		$(selectedExpandedIcon).show();
		$(selectedReblock).addClass("reblock-hidden");
		$(selectedReblockOverlay).removeClass("resized-reblock-overlay");
		$(selectedBlockContent).removeClass("resized-block-content");
		$(selectedBotBar).removeClass("resized-block-botbar");
		$(selectedBotBar).removeClass("scroller2");
		$(selectedSmallTitle).removeClass("resized-block-small-title");
		$(selectedBtnPad).removeClass("resized-block-btn-pad");
		$(selectedIconTitle).hide();
	}
	else
	{
		projectTabOpen = true;

		selectedCloseBtn = $(obj).parent().parent().siblings(".prj-close");
		selectedExpandedIcon = $(obj);
		selectedReblock = $(obj).parent().parent().parent().parent();
		selectedReblockOverlay = $(obj).parent().parent().parent();
		selectedBlockContent = $(obj).parent().parent().siblings(".block-content");
		selectedBotBar = $(obj).parent().parent();
		selectedSmallTitle = $(obj).parent().siblings(".block-small-title");
		selectedBtnPad = $(obj).parent();
		selectedIconTitle = $(obj).siblings(".icon-name");

		$("#dark-overlay").fadeIn(function(){});
		$(selectedCloseBtn).show();
		$(selectedExpandedIcon).hide();
		$(selectedReblock).removeClass("reblock-hidden");
		$(selectedReblockOverlay).addClass("resized-reblock-overlay");
		$(selectedBlockContent).addClass("resized-block-content");
		$(selectedBotBar).addClass("resized-block-botbar");
		$(selectedBotBar).addClass("scroller2");
		$(selectedSmallTitle).addClass("resized-block-small-title");
		$(selectedBtnPad).addClass("resized-block-btn-pad");
		$(selectedIconTitle).show();
	}
}


});

