var AP_extras={store_meta_data:1};var SSM_page_data={};var AP_cookie="";var SSM_page_identifier;var AP_retarget_tag_id="";var SSM_publisher_id="";var SSM_publisher_group_id="C0A801C30cc572538BjmjJE4BD84";var SSM_publisher_group_name="Autotrader.com";var SSM_video_cookie="";var AP_product_id="";var SSM_ct_path="//cdn.speedshiftmedia.com/products/dynamicwebads/adserving/includes/javascript/cookietagging/cookietag.js";var SSM_useGFU=1;ssm_magnum_pixel={};var _mag_script="ssm-magnum-pixel.min.js";var _mag_host="magnum.cdn.speedshiftmedia.com";var _mag_protocol=(document.location.protocol==="https:"?"https://":"http://");var ssm_convs={};var ssm_iian_convs={};var SSM_scriptSource=(function(a){a=document.getElementsByTagName("script");var g=a.length;for(var d=g-1;d>=0;d--){var c=a[d],f=null,b=null;if(c.getAttribute.length!==undefined){if(typeof(c.src)=="undefined"||c.src===null||c.src===""){continue}try{b=c.src||c.getAttribute("src")}catch(h){continue}}try{if(!b.match(/speedshiftmedia/)){continue}else{return b}}catch(h){continue}}return null}());function SSM_loadJSInclude(b,d){var a=document.createElement("SCRIPT");a.type="text/javascript";a.src=b;var c=document.getElementsByTagName("HEAD");if(c[0]!==null){c[0].appendChild(a)}if(d!==null){if(a.addEventListener){a.addEventListener("load",d,false)}else{if(a.readyState){a.onreadystatechange=function(){if(a.readyState in {loaded:1,complete:1}){a.onreadystagechange=null;d()}}}}}}if(!window.jQuery&&typeof(jQuery)=="undefined"){SSM_loadJSInclude("//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js",SSM_run_include)}else{SSM_run_include()}function SSM_run_include(){window.SSM_gf_interval=setInterval(function(){if(typeof(SSM_useGFU)!="undefined"&&SSM_useGFU==1&&typeof(window.SSMGF)!="undefined"&&window.SSMGF.u.guid!==""){SSM_loadJSInclude(SSM_ct_path,SSM_ready_func);clearInterval(window.SSM_gf_interval);if(typeof(window.SSM_gf_timeout)!="undefined"){clearTimeout(window.SSM_gf_timeout)}}else{if(typeof(SSM_useGFU)=="undefined"||SSM_useGFU!=1){SSM_loadJSInclude(SSM_ct_path,SSM_ready_func);clearInterval(window.SSM_gf_interval)}else{if(typeof(window.SSM_gf_timeout)=="undefined"){window.SSM_gf_timeout=setTimeout(function(){SSM_loadJSInclude(SSM_ct_path,SSM_ready_func);clearInterval(window.SSM_gf_interval)},2000)}}}},100)}function SSM_ready_func(){jQuery(document).ready(function(){var c=window.location.hostname,d=window.location.pathname,a=window.document.referrer,e=window.location.search,b=SSM_get_vehicle_data();AP_product_id=AP_get_product_id();AP_cookie=AP_getCookie("SSM_UTC_LS");if(b!=false){AP_extras.inventory_fields=JSON.stringify(b)}if(AP_cookie===""){if(AP_product_id!==false&&typeof(AP_product_id)!=="undefined"){AP_makeJsonp("AP_make_pixel",SSMDomain+"/products/dynamicwebads/adserving/retarget_uid.php?callback=?",{})}}else{if(AP_product_id!==false&&typeof(AP_product_id)!=="undefined"){AP_prep_pixel(AP_cookie)}}})}function SSM_get_vehicle_data(){try{var b=KBB.DataLayer[0];var a={};a[1]="";a[2]=b.classifiedsinfo.listing.vin;a[3]="";a[4]="";a[5]=b.info.yearid;a[6]=b.info.vehicle.trimdisplayname;a[7]=b.info.vehicle.primarycategory;a[8]=b.classifiedsinfo.atcmakecode;a[9]=b.classifiedsinfo.atcmodelcode;return a}catch(c){return false}return false}function AP_get_product_id(){var b="";var a=window.location.hostname,c=window.location.pathname;try{if(a.indexOf("kbb.com")>-1){b=KBB.DataLayer[0].classifiedsinfo.listing.vin}}catch(d){b=false}if(b===""||typeof(b)=="undefined"){b=false}return b}function SSM_log_event(a,b){if(typeof(ssm_convs)!=="undefined"&&ssm_convs[a]!==undefined){SSM_send_pm5k_conversion_obj({label:a,id:ssm_convs[a].c});callMagnum(ssm_convs[a])}if(typeof(ssm_iian_convs)!=="undefined"&&ssm_iian_convs[a]!==undefined&&b!==true){SSM_send_pm5k_iian_conversion({label:a,id:ssm_iian_convs[a].c});callMagnum(ssm_iian_convs[a])}};