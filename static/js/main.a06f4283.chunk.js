(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://images-na.ssl-images-amazon.com/images/I/71NSWZLgu%2BL._SY550_.jpg","clicked":false},{"id":2,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVPYG0O0ELLiPz7FqVGoZTgpdJWOG0v_xzPcI3biLIHZfvOkQc","clicked":false},{"id":3,"image":"https://comicvine1.cbsistatic.com/uploads/scale_small/1/14487/6694382-wonder%20girl.jpg","clicked":false},{"id":4,"image":"http://supertextcrown.com/upload/2018/07/13/shop-fathead-batman-sports-wall-stickers-at-lowescom-batman-wall-stickers-l-06c188c195ac1589.jpg","clicked":false},{"id":5,"image":"https://i.pinimg.com/736x/be/17/ec/be17ecfe90994d090c44c1489d8b1735--starfire-dc-dc-comic.jpg","clicked":false},{"id":6,"image":"http://www.writeups.org/wp-content/uploads/Firestorm-DC-Comics-Stein-Raymond-a.jpg","clicked":false},{"id":7,"image":"https://i.annihil.us/u/prod/marvel/i/mg/9/30/4ce189c213e4b/standard_incredible.jpg","clicked":false},{"id":8,"image":"https://vignette.wikia.nocookie.net/disney-infinity/images/0/08/ClP1WFSVAAAce7x.jpg/revision/latest?cb=20160618194605","clicked":false},{"id":9,"image":"https://www.writeups.org/wp-content/uploads/Spider-Man-Marvel-Comics-Peter-Parker-Profile-c.jpg","clicked":false},{"id":10,"image":"https://www.pnglot.com/pngfile/detail/167-1674975_there-are-four-marvel-superheroes-set-to-get.png","clicked":false},{"id":11,"image":"https://i.pinimg.com/originals/21/57/1c/21571cb09eb92e259da4b6d001d7247e.jpg","clicked":false},{"id":12,"image":"https://www.maritimeaquarium.org/assets/2531/captain_america.png","clicked":false}]')},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),i=(t(14),t(4)),s=t(5),o=t(7),m=t(6),d=t(8);t(15);var u=function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary mb-5 fixed-top"},c.a.createElement("div",{className:"navbar-header"},c.a.createElement("div",{class:"business-logo-align col-md-12"},c.a.createElement("h3",null,c.a.createElement("a",{href:"/"},"Memory Game")))),c.a.createElement("div",{class:"navbar-collapse collapse"},c.a.createElement("div",{class:" col-xs-9 col-sm-12 col-md-8 pd-t-10"},c.a.createElement("ul",{class:"nav navbar-nav  navbar-centerr"},c.a.createElement("li",null,c.a.createElement("h5",null,e.message)))),c.a.createElement("ul",{class:"nav navbar-nav navbar-right"},c.a.createElement("li",{class:"col-md-8 col-xs-6 text-center"},c.a.createElement("h5",null,"Current Score: ",e.score)),c.a.createElement("li",{class:"col-md-8 col-xs-6 text-center"},c.a.createElement("h5",null,"Top Score: ",e.topScore)))))};var p=function(){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-3 text-center"},"Clicky Game!"),c.a.createElement("p",{className:"lead text-center"},"Click on an image to earn points, but don't click on any more than once!"))};t(16);var g=function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:e.image,alt:e.id})))};var h=function(){return c.a.createElement("div",{className:"footer-copyright text-center py-3 navbar-fixed-bottom"},"\xa9 2019 Copyright:",c.a.createElement("a",{href:"https://mdbootstrap.com/education/bootstrap/"}," Memory Game"))},f=t(1);t(17);var v=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};var b=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={cards:f,currentScore:0,topScore:0,clicked:[],message:""},t.handleClick=function(e){-1===t.state.clicked.indexOf(e)?(t.handleIncrement(),t.setState({clicked:t.state.clicked.concat(e),message:"You guessed correctly!"})):(t.handleReset(),t.setState({message:"You guessed incorrectly!"}))},t.handleIncrement=function(){var e=t.state.currentScore+1;t.setState({currentScore:e,message:""}),e>=t.state.topScore?t.setState({topScore:e}):12===e&&t.setState({message:"Congratulations!!! You have a good memory"}),t.handleShuffle()},t.handleReset=function(){t.setState({currentScore:0,topScore:t.state.topScore,clicked:[],message:"Click an image to begin!"}),t.handleShuffle()},t.handleShuffle=function(){var e=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}(f);t.setState({cards:e})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u,{score:this.state.currentScore,topScore:this.state.topScore,message:this.state.message}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(p,null),c.a.createElement("div",{className:"container"},c.a.createElement(v,null,this.state.cards.map((function(a){return c.a.createElement(g,{key:a.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:a.id,image:a.image})})))),c.a.createElement(h,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a06f4283.chunk.js.map