/*flpopslt.js-feilong.org-20150414-cs*/
//Pop to some checks or radios to choose from. as a select field. The default gap/separator is comma (,)
flsltopt();
function flsltopt(){
$(function(){



/*1*/
$('.popslt').each(function(i, el) {
	
var gap=$(this).attr('rel');if(!gap){gap=',';}
var slted=$(this).find('.slted'),sltwhat=$(this).find('.sltwhat'),sltopts=$(this).find('.sltopt'),sltshut=$(this).find('.sltshut'),sltli=$(this).closest('.sltli'),ckedarr=Array();

var allslteds=$('body').find('.slted'),otslteds=allslteds.not(allslteds[i]);
var allsltwhats=$('body').find('.sltwhat'),otsltwhats=allsltwhats.not(allsltwhats[i]);
var allsltlis=$('body').find('.sltli'),otssltlis=allsltlis.not(allsltlis[i]);



/*初始生成html*/
sltopts.each(function(k,el){/*2*/
var thissltopt=$(el),thisck=thissltopt.find('input'),thisi=thissltopt.find('i');
var thisckis=thisck.prop('checked'),thisihtml=thisi.html();
if(thisckis){ckedarr.push(thisihtml);}
});if(slted.is('input')){slted.val(ckedarr.join(gap));}else{slted.html(ckedarr.join(gap));}/*2*/


/*点击弹出*/
slted.click(function(){slted.toggleClass('on');sltwhat.toggleClass('hide');sltli.toggleClass('zmost');otslteds.removeClass('on');otsltwhats.addClass('hide');otssltlis.removeClass('zmost');});

/*点击关闭*/
sltshut.click(function(){slted.removeClass('on');sltwhat.addClass('hide');sltli.removeClass('zmost');});




/*勾选或取消勾选*/
sltopts.each(function(k,el){/*2*/

var thissltopt=$(el),thisck=thissltopt.find('input'),thisi=thissltopt.find('i');



/*3*/
thisck.click(function(){
var thisckis=thisck.prop('checked'),thisihtml=thisi.html();
var slted0=slted.val();
ckedarr=slted0?slted0.split(gap):Array();

var hasi=$.inArray(thisihtml,ckedarr); console.log(hasi);/**/

if(thisck.is(':checkbox')){
if((hasi>=0)&&(!thisckis)){ckedarr.splice(hasi,1);slted.val(ckedarr.join(gap));}/*本有勾销之*/
if((hasi<0)&&thisckis){ckedarr.unshift(thisihtml);slted.val(ckedarr.join(gap));}/*本无勾选之*/
}else{slted.val(thisihtml);sltshut.click();}

});/*3*/


thisi.click(function(){thisck.trigger('click')});

	
});/*2*/



});/*1*/







});

}/*0.5*/
