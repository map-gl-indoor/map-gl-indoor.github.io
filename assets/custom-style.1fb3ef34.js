import{a as r,I as a,b as e}from"./style.532636f9.js";import{m as t,a as n}from"./mapbox-gl.2e8cdf54.js";const s=document.querySelector("#app"),o=new t.exports.Map({container:s,zoom:18,center:[2.3592843,48.8767904],style:"mapbox://styles/mapbox/streets-v10",accessToken:n,hash:!0});r(o);const i=[{filter:["filter-==","indoor","room"],id:"indoor-rooms",type:"fill",source:"indoor",paint:{"fill-color":"#FF0000","fill-opacity":.5}},{filter:["filter-==","indoor","area"],id:"indoor-areas",type:"fill",source:"indoor",paint:{"fill-color":"#0000FF","fill-opacity":.5}}],l=await(await fetch("maps/gare-de-l-est.geojson")).json();o.indoor.addMap(a.fromGeojson(l,{layers:i}));o.addControl(new e);
//# sourceMappingURL=custom-style.1fb3ef34.js.map
