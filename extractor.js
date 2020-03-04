
output='<html><head><title>SEO 404 Extraction Tool</title><style type=\'text/css\'>body,table{font-family:Tahoma,Verdana,Segoe,sans-serif;font-size:11px;color:#000}h1,h2,th{color:#405850}th{text-align:left}h2{font-size:11px;margin-bottom:3px}.status_404{colore:red;}</style></head><body>';

output+="<h1>SEO SERP Extraction Tool</h1>";

(function(e, s) {
    e.src = s;
    e.onload = function() {
        jQuery.noConflict();
        console.log('jQuery injected');
        proceed();
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')

function getStatus(originalURL){

  console.log('Get Status URL: ', originalURL);
var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL
var status;
$=jQuery;
$.ajax({
  url: queryURL,
  method: "GET",
  dataType: "json",    
  async: false, // Mode synchrone
  // this headers section is necessary for CORS-anywhere
  headers: {
    "x-requested-with": "xhr" 
  }
}).done(function(response) {
  console.log(400);
  status = 400;
}).fail(function(jqXHR, textStatus) { 
  console.error(jqXHR.status);
  status = jqXHR.status;
});
return status;

}

function proceed () {
    
pageAnchors=document.getElementsByTagName('a');
divClasses=document.getElementsByTagName('div');
var linkcount=0;var linkLocation='';
var linkAnchorText='';

output+='<table><th>ID</th><th>Link</th><th>Anchor</th>';

for(i=0;i<pageAnchors.length;i++){

	if(pageAnchors[i].parentNode.parentNode.getAttribute('class')!='iUh30'){
	
		var anchorText = pageAnchors[i].textContent;
		var anchorLink = pageAnchors[i].href;
		var linkAnchor = anchorLink + '\t'+anchorText;
		var anchorID = pageAnchors[i].id;
		
		if(anchorLink!=''){
			if(anchorLink.match(/^((?!google\.|cache|blogger.com|\.yahoo\.|youtube\.com\/\?gl=|youtube\.com\/results|javascript:|api\.technorati\.com|botw\.org\/search|del\.icio\.us\/url\/check|digg\.com\/search|search\.twitter\.com\/search|search\.yahoo\.com\/search|siteanalytics\.compete\.com|tools\.seobook\.com\/general\/keyword\/suggestions|web\.archive\.org\/web\/|whois\.domaintools\.com|www\.alexa\.com\/data\/details\/main|www\.bloglines\.com\/search|www\.majesticseo\.com\/search\.php|www\.semrush\.com\/info\/|www\.semrush\.com\/search\.php|www\.stumbleupon\.com\/url|wikipedia.org\/wiki\/Special:Search).)*$/i)){
				if(anchorID.match(/^((?!hdtb_more|hdtb_tls|uh_hl).)*$/i)){
					linkLocation+=anchorLink+'<br />';
					linkAnchorText+=anchorText+'<br />';
					linkcount++;
					if (anchorText === undefined) anchorText = pageAnchors[i].innerText;output+='<tr>';
                    status = getStatus(pageAnchors[i].href);
					output+='<td>'+linkcount+'</td>';
					output+='<td>'+pageAnchors[i].href+'</a></td>';
					output+='<td>'+anchorText+'</td>';
					output+='<td class="status_'+status+'">'+status+'</td>';
					output+='</tr>\n';
					}
				}
			}
		}
	}

output+='</table><br/><h2>URL List</h2><div>';
output+=linkLocation;output+='</div><br/><h2>Anchor Text List</h2><div>';
output+=linkAnchorText;output+='<br/>%C2%A0<br/><p align=center><a href=\'https://github.com/aleblanc/Extract404UrlGoogleJS\'>Extract404UrlGoogleJS</a></p>';
with(window.open()){document.write(output);document.close();}
}


