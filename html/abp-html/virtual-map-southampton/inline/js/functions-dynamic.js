// Dynamic Pano Title and Description
function updatePanorama(panoid) {

	/* Window History back - DISABLED to prevent browser back button navigation */

	var hash = "#s=" + panoid;

	if(!Phistory.length || Phistory[Phistory.length -1] != hash){
		// window.history.pushState(null, null, hash); // DISABLED
		Phistory.push(hash);
	}

	var panotourPlayer = getTourPlayer();
	var groupid = panotourPlayer.get("scene["+panoid+"].group");
	var titleid = panotourPlayer.get("scene["+panoid+"].titleid");				

	// Pano Info

	jQuery('.panorama-title').html(ktools.I18N.getInstance().getMessage(titleid));

	var descriptionid = panotourPlayer.get("scene["+panoid+"].descriptionid");
	if (descriptionid != "") {
		jQuery('.panorama-description').show();
		jQuery('.expand-info').show();
		jQuery('.panorama-description').html(ktools.I18N.getInstance().getMessage(descriptionid));					
	} else{
		jQuery('.panorama-description').hide();
		jQuery('.expand-info').hide();
	}

	$('.pano-info').delay(3000).fadeIn();
	$('.status').hide();
	$('.switch-time').hide();
	$('body').removeClass('night');
  	$('body').removeClass('day');

	// Start Pano Options

	if (window.location.href.indexOf("#s=pano11") != -1) {
		$('.back-button').hide(); 
	} else {
		$('.back-button').hide();
	}

	/* OVERVIEW */ 
	
	if (
		(window.location.href.indexOf("#s=pano11") != -1) ||
		(window.location.href.indexOf("#s=pano11XX") != -1) 

	){ 
     	$('.back-button').hide();
	}

	/* Sites */ 
	
	if (
		/* viaduct */
		(window.location.href.indexOf("#s=panoXXXX") != -1) ||
		(window.location.href.indexOf("#s=panoXXXX") != -1) ||
		(window.location.href.indexOf("#s=panoXXXX") != -1) ||

	){ 
		$('.sponsor.lottery').hide();
     	$('.sponsor.gwr').delay(4000).fadeIn();
	}



	else {
		//$('.status').hide();
		return false;
	}

		
}
		
