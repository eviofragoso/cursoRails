(function () {
  var scheme = (("https:" == document.location.protocol) ? "https" : "http");
  var adnxs_domain = 'secure.adnxs.com';
  var aol_domain = 'secure.leadback.advertising.com';
  var rule = ["*", "*"];
  if (scheme=='http') { adnxs_domain = 'ib.adnxs.com'; aol_domain = 'leadback.advertising.com';}
  var el = document.createElement("div");
  el.style["width"] = "1px";
  el.style["height"] = "1px";
  el.style["display"] = "inline";
  el.style["position"] = "absolute";
  var content = unescape('%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/r/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/f/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/b/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/x/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/l/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/o/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/g/out%3fgoogle_nid%3dadroll2%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22//googleads.g.doubleclick.net/pagead/viewthroughconversion/1011350631/%3fvalue%3d0%26amp%3blabel%3dxutUCIm5zwkQ5_if4gM%26amp%3bguid%3dON%26amp%3bscript%3d0%26amp%3bord%3d%5bord%5d%22/%3e%20%20%09%09%09%09%09%09%09%0a%0a%3cimg%20src%3d%22%5bprotocol%5d%3a//%5badnxs_domain%5d/seg%3fadd%3d689255%26t%3d2%22%20width%3d%221%22%20height%3d%221%22%20/%3e%0a');

  var rollcrawl_opts = {
      "regexp": ".*",
      "blacklist_regexp": "",
      "regexp_group": {"attribute":"data-course-id","path":"a.ud-courseimpressiontracker","scheme":"html","regular_expression":"","regular_expression_replace":""},
      "product_group_regexp": null,
      "product_group_group": null
  };

  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','//connect.facebook.net/en_US/fbevents.js');

  try {
      try {
          
(function(){
    var scr = document.createElement("script");
    scr.type = "text/javascript";
    scr.src = "//s.adroll.com/j/sendrolling.js";
    ((document.getElementsByTagName("head") || [null])[0] || document.getElementsByTagName("script")[0].parentNode).appendChild(scr);
}());

      } catch(e) {}
      try {
          __adroll.extract_pid(rollcrawl_opts, "facebook", function(pid){
    if(pid) {
      if(!pid.product_action) {
        pid.product_action = "ViewContent";
      } else if(pid.product_action == "Purchase"){
        pid.product_action = "CustomPurchase";
      }
      var product_id_param = "";
      if(pid.product_id instanceof Array) {
        product_id_param = "[";
        for (var i = 0; i < pid.product_id.length; i++) {
          var x = __adroll.normalize_var(pid.product_id[i].replace("\"", "\\\"")).toLowerCase() + "_";
          if (pid.product_group) {
            x += __adroll.normalize_var(pid.product_group + '').toLowerCase();
          }
          product_id_param += "\"" + x + "\"";
          if (i < pid.product_id.length - 1) {
            product_id_param += ",";
          }
        }
        product_id_param = encodeURIComponent(product_id_param + "]");
      } else {
        product_id_param = encodeURIComponent(__adroll.normalize_var(pid.product_id + '').toLowerCase()) + "_";
        if (pid.product_group) {
            product_id_param += encodeURIComponent(__adroll.normalize_var(pid.product_group + '').toLowerCase());
        }
      }


      var url = __adroll._srv("/fb/tr/?id=304647029721873" +
                              "&ev=" + encodeURIComponent(pid.product_action) +
                              "&cd[content_type]=product" +
                              "&cd[content_ids]=" + product_id_param +
                              "&cd[application_id]=321379434608647" +
                              "&cd[product_catalog_id]=1703448206544884");
      var img = document.createElement("img");
      img.src = url;
      img.height = img.width = 1;
      img.border = 0;
      __adroll._head().appendChild(img);
    }
});

      } catch(e) {}
      try {
          if(typeof __adroll.fb === 'undefined'){
        fbq('init', '304647029721873');
    __adroll.fb=true;

    var __fbcd = {segment_eid: "X5ZXA5BKDNCWTK63S7ASA7,VH5RDLCI7NHB5GFMJDUBVW,AYK464Z62JC6HIRV5QB5WN"};
    for (var prop in __adroll.get_external_data()){
        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
    }

    fbq('track', "PageView", __fbcd);


} else {
    var __fbcd = {event: "EventSegment", segment_eid: "X5ZXA5BKDNCWTK63S7ASA7,VH5RDLCI7NHB5GFMJDUBVW,AYK464Z62JC6HIRV5QB5WN"};
    for (var prop in __adroll.get_external_data()){
        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
    }

    fbq('track', "CustomEvent", __fbcd);

}


      } catch(e) {}
  } catch(e) {}

  __adroll.get_pid(rollcrawl_opts);

  var r = Math.random()*10000000000000000;
  content = content.replace(/\[ord\]/gi, r);
  content = content.replace(/\[protocol\]/gi, scheme);
  content = content.replace(/\[adnxs_domain\]/gi, adnxs_domain);
  content = content.replace(/\[aol_domain\]/gi, aol_domain);
  content = __adroll.replace_external_data(content);
  el.innerHTML = content;
  __adroll._head().appendChild(el);
  if (typeof __adroll.set_pixel_cookie != 'undefined') {__adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id, "VH5RDLCI7NHB5GFMJDUBVW");}
}());
