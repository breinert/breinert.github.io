(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,n,a){e.exports=a(378)},158:function(e,n,a){},376:function(e,n,a){},378:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(56),s=a.n(r),i=(a(158),a(57)),o=a(58),c=a(61),u=a(59),m=a(60),h=a(7),d=a(19),p=Object(d.withScriptjs)(Object(d.withGoogleMap)(function(e){return l.a.createElement(d.GoogleMap,{defaultZoom:12,defaultCenter:{lat:40.027587,lng:-83.0624},center:e.center[0]||e.center},e.showingVenues&&e.showingVenues.map(function(n,a){var t=e.venues.find(function(e){return e.venue.id===n.id});return l.a.createElement(d.Marker,{key:a,position:{lat:n.lat,lng:n.lng},onClick:function(){return e.handleOnClick(n)},animation:n.isOpen?google.maps.Animation.BOUNCE:google.maps.Animation.null},n.isOpen&&e.click<=1&&l.a.createElement(d.InfoWindow,{onCloseClick:function(){return e.handleCloseMarker(n)}},l.a.createElement("p",null,e.showingVenues.name)),n.isOpen&&e.click>1&&l.a.createElement(d.InfoWindow,{onCloseClick:function(){return e.handleCloseMarker(n)}},l.a.createElement("figure",null,l.a.createElement("img",{src:"".concat(t.bestPhoto.prefix,"200x200").concat(t.bestPhoto.suffix),alt:"Venue"}),l.a.createElement("figcaption",null,t.name," ",l.a.createElement("br",null),t.location.address," ",l.a.createElement("br",null),t.hours.status,l.a.createElement("a",{href:"".concat(t.url),target:"_blank",rel:"noopener noreferrer"},"Link")," "))))}),l.a.createElement(d.BicyclingLayer,{autoUpdate:!0}))})),g=function(e){function n(){return Object(i.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement(p,Object.assign({},this.props,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDUZDt6xP79oqTXaAB6leSmMCYzZkc4Zdo",loadingElement:l.a.createElement("div",{style:{height:"100vh"}}),containerElement:l.a.createElement("div",{style:{height:"100vh",width:"75%"}}),mapElement:l.a.createElement("div",{style:{height:"100vh"}})}))}}]),n}(l.a.Component),O=function(e){var n=e.showModal?"modal display-block":"modal display-none";return l.a.createElement("div",{className:n},l.a.createElement("div",{className:"modal-content"},l.a.createElement("h2",null,"Select a marker on the map or name in the list for information.",l.a.createElement("br",null)," Select again to find coffee shoppes near that biking area."),l.a.createElement("button",{className:"begin",onClick:e.handleCloseModal},"Begin")))},k=function(e){var n=e.click>=1?"searchWrapper display-block":"searchWrapper display-none";return l.a.createElement("div",{className:n},l.a.createElement("input",{id:"filter",type:"text",placeholder:"Search by name",role:"search",value:e.query,onChange:function(n){return e.updateQuery(n.target.value)}}),l.a.createElement("button",{className:"filterButton","aria-label":"search reset",onClick:function(){return e.clearQuery()}},"Show all"))},f=function(e){return l.a.createElement("div",{className:"sidebar"},l.a.createElement("h2",{className:"title"},"Cycle And Coffee"),l.a.createElement("h2",{className:"venuebar"},"Venues"),l.a.createElement(k,{markers:e.markers,showinVenues:e.showingVenues,query:e.query,click:e.click,updateQuery:e.updateQuery,clearQuery:e.clearQuery}),l.a.createElement("ol",{className:"venueList"},e.showingVenues&&e.showingVenues.map(function(n,a){return l.a.createElement("li",{className:"listItem",key:a,position:{lat:n.lat,lng:n.lng},onClick:function(){!1===n.isOpen&&e.handleOnClick(n)},tabIndex:2},n.name)})))},b=function(e){var n={display:e.hover?"block":"none"};return l.a.createElement("div",{className:"reset"},l.a.createElement("button",{"aria-label":"reset","z-index":"100",tabIndex:"1",onMouseOver:function(){return e.handleMouseOver()},onMouseOut:function(){return e.handleMouseOver()},onClick:function(){return e.handleReset()}},"\u2630"),l.a.createElement("div",{className:n},"Restart"))},v=a(89),y=a.n(v),C=a(152),E=a.n(C),w=(a(376),function(e){function n(e){var a;return Object(i.a)(this,n),(a=Object(c.a)(this,Object(u.a)(n).call(this,e))).handleClose=function(){a.setState({showModal:!1})},a.handleGetNewData=function(e){if(0===a.state.click){var n=[e.lat,e.lng],t={lat:e.lat,lng:e.lng},l=a.state.click+1;a.setState({venueLocation:n,center:t,markers:[],names:[],venues:[],click:l}),a.getStores()}else{a.setState({markers:Object.assign(a.state.markers,e)});var r=a.state.venues.find(function(n){return n.venue.id===e.id}),s="https://api.foursquare.com/v2/venues/".concat(e.id,"?");y.a.get(s+new URLSearchParams({client_id:"JDO1KAGDULQO3ETFJ4EDPEHN203BEDKSD1HB5UUKRDP2R3H2",client_secret:"UWMFNIMGT33V31ZGCVI1GICMRK43DSYBJSNBNJTKC2ECKIHH",v:"20181010"})).then(function(e){var n=Object.assign(r,e.data.response.venue);a.setState({venues:Object.assign(a.state.venues,n),click:a.state.click+1})}).catch(function(e){alert("Your information could not be obtained. Please restart the app to try again.")})}},a.handleOnClick=function(e){e.isOpen?a.handleGetNewData(e):a.handleCloseMarker(),e.isOpen=!0,a.setState({showingVenues:Object.assign(a.state.showingVenues,e)})},a.handleCloseMarker=function(){var e=a.state.showingVenues.map(function(e){return e.isOpen=!1,e});a.setState({showingVenues:Object.assign(a.state.showingVenues,e)}),2===a.state.click&&a.setState({click:1})},a.handleMouseOver=function(){a.setState({hover:!a.state.hover})},a.updateQuery=function(e){a.setState({query:e.trim()}),a.updateSearchedVenues(e)},a.updateSearchedVenues=function(e){if(a.state.query){var n=new RegExp(E()(a.state.query),"i");a.setState({showingVenues:Object.assign(a.state.showingVenues.filter(function(e){return n.test(e.name)}))})}else a.setState({showingVenues:a.state.markers})},a.clearQuery=function(){a.setState({query:"",showingVenues:a.state.markers})},a.handleReset=function(){a.setState({showModal:!0,hover:!1,query:"",click:0,venues:[],showingVenues:[{name:"Antrim Park",lat:40.0784,lng:-83.0377,isOpen:!1},{name:"Park of Roses",lat:40.044,lng:-83.0253,isOpen:!1},{name:"Clinton-Como Park",lat:40.0261,lng:-83.0225,isOpen:!1},{name:"Thompson Park",lat:40.0438,lng:-83.0717,isOpen:!1},{name:"Burbank Park",lat:40.0535,lng:-83.0846,isOpen:!1},{name:"Fancyburg Park",lat:40.023258,lng:-83.087907,isOpen:!1},{name:"Olentangy Trail",lat:40.002127,lng:-83.021716,isOpen:!1}],venueLocation:[],center:[{lat:40.027587,lng:-83.0624}],markers:[{name:"Antrim Park",lat:40.0784,lng:-83.0377,isOpen:!1},{name:"Park of Roses",lat:40.044,lng:-83.0253,isOpen:!1},{name:"Clinton-Como Park",lat:40.0261,lng:-83.0225,isOpen:!1},{name:"Thompson Park",lat:40.0438,lng:-83.0717,isOpen:!1},{name:"Burbank Park",lat:40.0535,lng:-83.0846,isOpen:!1},{name:"Fancyburg Park",lat:40.023258,lng:-83.087907,isOpen:!1},{name:"Olentangy Trail",lat:40.002127,lng:-83.021716,isOpen:!1}]})},a.state={showModal:!0,hover:!1,query:"",click:0,venues:[],showingVenues:[{name:"Antrim Park",lat:40.0784,lng:-83.0377,isOpen:!1},{name:"Park of Roses",lat:40.044,lng:-83.0253,isOpen:!1},{name:"Clinton-Como Park",lat:40.0261,lng:-83.0225,isOpen:!1},{name:"Thompson Park",lat:40.0438,lng:-83.0717,isOpen:!1},{name:"Burbank Park",lat:40.0535,lng:-83.0846,isOpen:!1},{name:"Fancyburg Park",lat:40.023258,lng:-83.087907,isOpen:!1},{name:"Olentangy Trail",lat:40.002127,lng:-83.021716,isOpen:!1}],venueLocation:[],center:[{lat:40.027587,lng:-83.0624}],markers:[{name:"Antrim Park",lat:40.0784,lng:-83.0377,isOpen:!1},{name:"Park of Roses",lat:40.044,lng:-83.0253,isOpen:!1},{name:"Clinton-Como Park",lat:40.0261,lng:-83.0225,isOpen:!1},{name:"Thompson Park",lat:40.0438,lng:-83.0717,isOpen:!1},{name:"Burbank Park",lat:40.0535,lng:-83.0846,isOpen:!1},{name:"Fancyburg Park",lat:40.023258,lng:-83.087907,isOpen:!1},{name:"Olentangy Trail",lat:40.002127,lng:-83.021716,isOpen:!1}]},a.handleCloseModal=a.handleClose.bind(Object(h.a)(Object(h.a)(a))),a.handleOnClick=a.handleOnClick.bind(Object(h.a)(Object(h.a)(a))),a.handleCloseMarker=a.handleCloseMarker.bind(Object(h.a)(Object(h.a)(a))),a.handleMouseOver=a.handleMouseOver.bind(Object(h.a)(Object(h.a)(a))),a.updateQuery=a.updateQuery.bind(Object(h.a)(Object(h.a)(a))),a.clearQuery=a.clearQuery.bind(Object(h.a)(Object(h.a)(a))),a.handleReset=a.handleReset.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(n,e),Object(o.a)(n,[{key:"getStores",value:function(){var e=this,n={client_id:"JDO1KAGDULQO3ETFJ4EDPEHN203BEDKSD1HB5UUKRDP2R3H2",client_secret:"UWMFNIMGT33V31ZGCVI1GICMRK43DSYBJSNBNJTKC2ECKIHH",query:"coffee",limit:"10",ll:this.state.venueLocation,v:"20181010"};y.a.get("https://api.foursquare.com/v2/venues/explore?"+new URLSearchParams(n)).then(function(n){var a=n.data.response.groups[0].items,t=a.map(function(e){return{lat:e.venue.location.lat,lng:e.venue.location.lng,name:e.venue.name,id:e.venue.id,isOpen:!1,isVisible:!0}}),l=t;e.setState({venues:a,markers:t,showingVenues:l})}).catch(function(e){alert("Your information could not be obtained. Please restart the app to try again.")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,Object.assign({},this.state,{handleMouseOver:this.handleMouseOver,handleReset:this.handleReset})),l.a.createElement(f,Object.assign({},this.state,{handleOnClick:this.handleOnClick,updateQuery:this.updateQuery,clearQuery:this.clearQuery})),l.a.createElement(g,Object.assign({},this.state,{handleOnClick:this.handleOnClick,handleCloseMarker:this.handleCloseMarker})),l.a.createElement(O,Object.assign({},this.state,{handleCloseModal:this.handleCloseModal})))}}]),n}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[153,2,1]]]);
//# sourceMappingURL=main.41a6ed81.chunk.js.map