/*
flslt.js-fl20150711gz
Pop to some checks or radios to choose from. as a select field. The default gap/separator is comma (,)
Author URI: http://feilong.org
*/


function flsltopt(){




/*1*/
var sltboxs=$('.sltbox');

sltboxs&&sltboxs.each(function(i, el) {
var sltbox=$(el),gap=sltbox.attr('rel');if(!gap){gap=',';}

var slted=sltbox.find('.slted'),sltpop=sltbox.find('.sltpop'),sltopts=sltbox.find('.sltopt'),sltxts=sltbox.find('.sltxt'),sltshut=sltbox.find('.sltshut'),ckedarr=Array(),ckedstr,ckedstr0;

var otsltboxs=sltboxs.not(sltboxs[i]);

var sltv=sltbox.find('.slted,.v');



/*初始生成ckedstr*/
sltopts.each(function(k,kl){/*2*/
var thisopt=$(kl),thisck=thisopt.find('.sltipt'),thisi=thisopt.find('.sltxt'),otis=sltxts.not(thisi);
var thisckis=thisck.prop('checked'),thisihtml=thisi.html();
if(thisckis){ckedarr.push(thisihtml);thisi.addClass('sltcked');}
});
ckedstr=ckedarr.join(gap);
if(slted.is('input')){slted.val(ckedstr);}else{slted.html(ckedstr);}
/*2*/


/*点击弹出*/
sltv.click(function(ev){ev.stopPropagation();
sltbox.toggleClass('slton');otsltboxs.removeClass('slton');});

/*点击关闭*/
sltshut.click(function(ev){ev.stopPropagation();
sltbox.removeClass('slton');});




/*勾选或取消勾选*/
sltopts.each(function(j,jl){/*2*/

var thisopt=$(jl),thisck=thisopt.find('.sltipt'),thisi=thisopt.find('.sltxt'),otis=sltxts.not(thisi);



/*3*/
thisck.click(function(ev){ev.stopPropagation();
var thisckis=thisck.prop('checked'),thisihtml=thisi.html();/*console.log(thisckis);*/



if(thisck.is(':checkbox')){if(thisckis){thisi.addClass('sltcked');}else{thisi.removeClass('sltcked');}}	
if(thisck.is(':radio')){thisi.addClass('sltcked');otis.removeClass('sltcked');}	



if(slted.is('input')){ckedstr0=slted.val();}else{ckedstr0=slted.html();}
ckedarr=ckedstr0?ckedstr0.split(gap):Array();

var hasi=$.inArray(thisihtml,ckedarr);/*console.log(hasi);*/

if(thisck.is(':checkbox')){
if((hasi>=0)&&(!thisckis)){ckedarr.splice(hasi,1);ckedstr=ckedarr.join(gap);}/*本有勾销之*/
if((hasi<0)&&thisckis){ckedarr.unshift(thisihtml);ckedstr=ckedarr.join(gap);}/*本无勾选之*/
}
if(thisck.is(':radio')){ckedstr=thisihtml;}

if(slted.is('input')){slted.val(ckedstr);}else{slted.html(ckedstr);}


});/*3*/


thisi.click(function(ev){ev.stopPropagation();thisck.trigger('click')});

	
});/*2*/



});/*1*/

$(document).click(function(ev){sltboxs.removeClass('slton');});


}/*0.5*/


/*feilong.org-20150709-gz-end*/
