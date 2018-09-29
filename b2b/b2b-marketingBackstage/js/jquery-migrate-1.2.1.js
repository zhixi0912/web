/**
 * Created by jc on 2017/7/4.
 * 解决因jquery版本升级造成方法不存在的问题
 */
jQuery.browser={};(function(){jQuery.browser.msie=false; jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)./)){ jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
