(this.webpackJsonpjeopardy=this.webpackJsonpjeopardy||[]).push([[0],{36:function(e,t,a){e.exports=a(46)},41:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(27),i=a.n(s),o=(a(41),a(7)),c=a(8),l=a(12),d=a(10),u=a(11),p=a(14),h=a(59);var m=function(e){return{root:{flexGrow:1,backgroundColor:"white"},boardZone:{textAlign:"center",color:e.palette.text.primary,fontSize:"4vh",display:"grid",gridGap:"2vh",gridTemplateRows:"10fr 1fr",justifyItems:"center"},teamBoardZone:{textAlign:"center",color:e.palette.text.secondary,fontSize:"3vh",display:"grid",gridGap:"20vw",gridTemplateColumns:"1fr 1fr",justifyItems:"center"},titleCardZone:{textAlign:"center",color:e.palette.text.secondary,fontSize:"6vh",display:"grid",gridGap:"2vh",gridTemplateRows:"1fr 10fr",justifyItems:"center",paddingTop:"0vh",paddingBottom:"3vh"},qaCard:{width:"50vw",minHeight:"50vh",paddingTop:"5vh",paddingBottom:"5vh",paddingLeft:"10vw",paddingRight:"10vw",textAlign:"center",color:e.palette.text.primary,fontSize:"7vh",display:"grid",gridGap:e.spacing(3),gridTemplateRows:"4fr 1fr"},btnZone:{display:"grid",gridGap:"15vw",gridTemplateColumns:"1fr 1fr"},hintZone:{minHeight:"10vh",color:e.palette.text.secondary,fontSize:"3vh",paddingTop:"1vh",paddingBottom:"2vh",display:"grid",gridTemplateRows:"1fr 1fr",gridGap:"1vh"},hintBtnZone:{fontSize:"2vh",marginLeft:"2vw",marginRight:"2vw",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"2vw"},hintBtn:{backgroundColor:"#f5f5f5"},answerBtnZone:{fontSize:"4vh",color:e.palette.text.primary},goBackBtn:{width:"20vw",paddingTop:"1vh",paddingBottom:"1vh",paddingLeft:"2vw",paddingRight:"2vw"},goBackBtnZone:{fontSize:"4vh",color:e.palette.text.primary,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"},teamPtsBtnZone:{fontSize:"4vh",color:e.palette.text.primary,display:"grid",gridGap:"5vw",gridTemplateColumns:"1fr 1fr"},teamPtsBtn:{paddingTop:"2vh",paddingBottom:"2vh",paddingLeft:"2vw",paddingRight:"2vw"},verticalCenter:{display:"flex",flexDirection:"column",justifyContent:"center"},pointsCard:{paddingTop:"4vh",paddingBottom:"4vh",textAlign:"center",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:"1.5vh",marginRight:"1.5vh",marginLeft:"1.5vh",fontSize:"3vh"},card0:{backgroundColor:"#ffe3e4"},card1:{backgroundColor:"#fffae3"},card2:{backgroundColor:"#f0ffe3"},card3:{backgroundColor:"#dfffef"},card4:{backgroundColor:"#dffcff"},cardAns0:{backgroundColor:"#fff2f3"},cardAns1:{backgroundColor:"#fffdf2"},cardAns2:{backgroundColor:"#f5fdef"},cardAns3:{backgroundColor:"#edfef5"},cardAns4:{backgroundColor:"#eafafc"},greyedOut:{backgroundColor:"darkgrey"}}},f=a(58),v=a(3),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"getColourClass",value:function(){var e=this.props.classes,t="";this.props.answered?t="greyedOut":t="card"+(this.props.col-5*Math.floor(this.props.col/5));return e[t]}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.setCurrState,r=e.row,s=e.col;return n.a.createElement(f.a,{className:Object(v.a)(t.pointsCard,this.getColourClass()),wrap:"nowrap",onClick:function(){a("question",null,{row:r,col:s})}},this.props.text)}}]),a}(n.a.Component),C=Object(p.a)((function(e){return m(e)}))(g),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).setWrapperRef=r.setWrapperRef.bind(Object(l.a)(r)),r.handleClickOutside=r.handleClickOutside.bind(Object(l.a)(r)),r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("mouseup",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.handleClickOutside)}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.props.setCurrState("board")}},{key:"getColourClass",value:function(){var e=this.props.classes,t=this.props.col-5*Math.floor(this.props.col/5);return e["answer"===this.props.currState?"cardAns"+t:"card"+t]}},{key:"getHintBtn",value:function(e,t){var a=this,r=this.props.classes,s=n.a.createElement(f.a,{className:Object(v.a)(r.verticalCenter,r.hintBtn,r.greyedOut)},t);return e&&(s=n.a.createElement(f.a,{className:Object(v.a)(r.verticalCenter,r.hintBtn),onClick:function(){return a.props.setCurrState("hint",e)}},t)),s}},{key:"render",value:function(){var e,t=this,a=this.props.classes;switch(this.props.currState){case"question":var r=this.getHintBtn(this.props.hint1,1),s=this.getHintBtn(this.props.hint2,2),i=this.getHintBtn(this.props.hint3,3);e=n.a.createElement(h.a,{container:!0,className:a.btnZone},n.a.createElement(h.a,{item:!0},n.a.createElement(f.a,null,n.a.createElement(h.a,{container:!0,className:a.hintZone},n.a.createElement(h.a,{item:!0,className:a.verticalCenter},"Hints"),n.a.createElement(h.a,{item:!0,className:a.hintBtnZone},r,s,i)))),n.a.createElement(f.a,{className:Object(v.a)(a.verticalCenter,a.answerBtnZone),onClick:function(){return t.props.setCurrState("answer")}},"Answer"));break;case"hint":e=n.a.createElement("div",{className:a.goBackBtnZone},n.a.createElement(f.a,{className:Object(v.a)(a.verticalCenter,a.goBackBtn),onClick:function(){return t.props.setCurrState("question")}},"Go Back"));break;case"answer":e=n.a.createElement(h.a,{container:!0,className:a.teamPtsBtnZone},n.a.createElement(f.a,{className:Object(v.a)(a.verticalCenter,a.teamPtsBtn),onClick:function(){t.props.setAnswered(),t.props.addPoints(1),t.props.setCurrState("board")}},this.props.pts," for Team 1"),n.a.createElement(f.a,{className:Object(v.a)(a.verticalCenter,a.teamPtsBtn),onClick:function(){t.props.setAnswered(),t.props.addPoints(2),t.props.setCurrState("board")}},this.props.pts," for Team 2"));break;default:e=n.a.createElement("div",null,"That's strange! The system reached an unknown state... Try refreshing.")}return n.a.createElement(h.a,{container:!0,className:a.titleCardZone},n.a.createElement(h.a,{item:!0},this.props.category+": "+this.props.pts),n.a.createElement("div",{ref:this.setWrapperRef},n.a.createElement(f.a,{className:Object(v.a)(a.qaCard,this.getColourClass())},n.a.createElement(h.a,{item:!0,className:a.verticalCenter},this.props.text),n.a.createElement(h.a,{item:!0},e))))}}]),a}(n.a.Component),w=Object(p.a)((function(e){return m(e)}))(y),b=a(29),k=a(64),E=a(60),S=a(65),j={fontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"]},O=Object(b.a)({typography:{h1:j,h2:j,h3:j,h4:j,h5:j}});O=Object(k.a)(O);var B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e="h1";switch(this.props.titleType){case"category":e="h4";break;case"title":e="h1"}return n.a.createElement(E.a,{theme:O},n.a.createElement(S.a,{variant:e,align:"center"},n.a.createElement("div",{className:"title"},this.props.text)))}}]),a}(n.a.Component),I=Object(p.a)((function(e){return m(e)}))(B),A=a(62),x=a(28),T=a.n(x),R=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).setCurrState=r.setCurrState.bind(Object(l.a)(r)),r.addPointsManually=r.addPointsManually.bind(Object(l.a)(r)),r.state={currState:"board",categories:null,cardsAnswered:null,currCardInd:{col:null,row:null},currHint:null,team1pts:0,team2pts:0,csv:null},r}return Object(c.a)(a,[{key:"setCurrState",value:function(e,t,a){var r={currState:e};t&&(r.currHint=t),a&&(r.currCardInd=a),this.setState(r)}},{key:"setAnswered",value:function(e,t,a){var r=this.state.cardsAnswered.slice();r[e][t]=!a,this.setState({cardsAnswered:r})}},{key:"addPoints",value:function(e,t){if(1===e){var r=this.state.team1pts;this.setState({team1pts:r+a.getPoints(t)})}else if(2===e){var n=this.state.team2pts;this.setState({team2pts:n+a.getPoints(t)})}else console.error("Unknown team number, "+e+". Points weren't added.")}},{key:"componentDidMount",value:function(){window.addpts=this.addPointsManually}},{key:"handleCSVUpload",value:function(e){var t=e.target.files[0],a=new FileReader;a.readAsText(t),a.onload=function(e){var t=e.target.result,a={csv:t,categories:this.readInfo(t,"c")};this.resetCardsAnswered(a.csv),this.setState(a)}.bind(this),a.onerror=function(){alert("Unable to read "+t.fileName+". Is it a CSV file? Is it in the format as outlined by the readme?")}}},{key:"resetCardsAnswered",value:function(e){for(var t=[],a=this.readInfo(e,"c").length,r=0;r<5;r++){t.push([]);for(var n=0;n<a;n++)t[r].push(!1)}this.setState({cardsAnswered:t})}},{key:"readInfo",value:function(e,t){var a=T.a.parse(e,{header:!0}),r=[];return a.data.forEach((function(e){r.push(e[t])})),r}},{key:"getQuestion",value:function(e,t){return this.readInfo(this.state.csv,"q"+e)[t]}},{key:"getAnswer",value:function(e,t){return this.readInfo(this.state.csv,"a"+e)[t]}},{key:"getHint",value:function(e,t,a){return this.readInfo(this.state.csv,"h"+e+"_"+(parseInt(a)-1))[t]}},{key:"addPointsManually",value:function(e,t){if(1===t){var a=this.state.team1pts;this.setState({team1pts:a+e})}else if(2===t){var r=this.state.team2pts;this.setState({team2pts:r+e})}else console.error("Unknown team number, "+t+". Points weren't added.")}},{key:"createGameBoard",value:function(){for(var e=this.props.classes,t=[],r=0;r<5;r++){var s="row"+a.getPoints(r);t[r]=n.a.createElement(h.a,{container:!0,item:!0,key:s},n.a.createElement(N,{categories:this.state.categories,currRow:r,rowAnswered:this.state.cardsAnswered[r],setCurrState:this.setCurrState,key:s}))}return n.a.createElement(h.a,{container:!0,className:e.boardZone},n.a.createElement(h.a,{style:{width:"80vw",marginTop:"2vh"},item:!0},t),n.a.createElement(h.a,{item:!0},n.a.createElement(h.a,{container:!0,className:e.teamBoardZone},n.a.createElement(h.a,{item:!0},"Team 1: ",this.state.team1pts," pts"),n.a.createElement(h.a,{item:!0},"Team 2: ",this.state.team2pts," pts"))))}},{key:"createQACard",value:function(e){var t=this;return n.a.createElement(w,{text:e,category:this.state.categories[this.state.currCardInd.col],pts:a.getPoints(this.state.currCardInd.row),col:this.state.currCardInd.col,currState:this.state.currState,setCurrState:this.setCurrState,setAnswered:function(){return t.setAnswered(t.state.currCardInd.row,t.state.currCardInd.col)},addPoints:function(e){return t.addPoints(e,t.state.currCardInd.row)},hint1:this.getHint(this.state.currCardInd.row,this.state.currCardInd.col,1),hint2:this.getHint(this.state.currCardInd.row,this.state.currCardInd.col,2),hint3:this.getHint(this.state.currCardInd.row,this.state.currCardInd.col,3),key:"question"})}},{key:"render",value:function(){var e,t=this,a=this.props.classes,r={};if(this.state.categories){var s="",i=!1;switch(this.state.currState){case"board":r={},e=this.createGameBoard();break;case"question":s=this.getQuestion(this.state.currCardInd.row,this.state.currCardInd.col),i=!0;break;case"hint":s=this.state.currHint,i=!0;break;case"answer":s=this.getAnswer(this.state.currCardInd.row,this.state.currCardInd.col),i=!0;break;default:e=n.a.createElement("div",null,"That's strange! The system reached an unknown state... Try refreshing.")}i&&(r={backgroundColor:"#f8f8f8"},e=this.createQACard(s))}else e=n.a.createElement("div",null,n.a.createElement("p",null,'Upload a CSV file with questions and answers, as described by the "custom jeopardy questions and answers section" of the ',n.a.createElement("span",null," "),n.a.createElement("a",{href:"https://github.com/jessvb/jeopardy/blob/static-upload-csv/README.md#custom-jeopardy-questions-and-answers"},"readme")," ",n.a.createElement("span",null," "),"and ",n.a.createElement("a",{href:"https://github.com/jessvb/jeopardy/blob/static-upload-csv/src/jeopardy_qa.template.csv"},"shown in the example on GitHub"),"."),n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("input",{type:"file",name:"File Upload",accept:".csv",onChange:function(e){t.handleCSVUpload(e)}})));return n.a.createElement("div",{className:a.root,style:r},n.a.createElement(h.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},e))}}],[{key:"getPoints",value:function(e){return 100*(e+1)}}]),a}(n.a.Component);function N(e){for(var t=[],a=R.getPoints(e.currRow),r=0;r<e.categories.length;r++){var s="col"+r+"-"+a,i=n.a.createElement(C,{text:a,col:r,row:e.currRow,answered:e.rowAnswered[r],setCurrState:e.setCurrState,key:s});0!==e.currRow?t[r]=n.a.createElement(h.a,{item:!0,xs:!0,key:s},i):t[r]=n.a.createElement(h.a,{item:!0,xs:!0,key:s},n.a.createElement(A.a,{mb:2},n.a.createElement(I,{text:e.categories[r],titleType:"category"})),i)}return n.a.createElement(n.a.Fragment,null,t)}var P=Object(p.a)(m)(R);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f04d30e8.chunk.js.map