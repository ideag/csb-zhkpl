parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"tnCT":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(n){e(this,t),n&&Object.assign(this,n)}return n(t,[{key:"getName",value:function(){return this.name}},{key:"getRating",value:function(){return this.rating}}]),t}();exports.default=r;
},{}],"ClLH":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,s,i){return s&&e(t.prototype,s),i&&e(t,i),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function e(s){t(this,e),this.id="",this.teams=[],this.playbyplay=[],this.possession=null,this.quarter=-1,this.quarters=4,this.score=[0,0],this.score_quarters=[],this.time_quarter=600,this.time_overtime=300,s&&Object.assign(this,s)}return s(e,[{key:"tipOff",value:function(){this.possession=this._random([0,1]),this.score=[0,0],this.time=this.time_quarter,this.store(this.teams[this.possession].getName()+" wins the tip-off.",1)}},{key:"startQuarter",value:function(){this.quarter++,this.score_quarters[this.quarter]=[0,0],this.time=this.time_quarter,this.store("Q"+this.quarter+" starts.",1)}},{key:"startOvertime",value:function(){this.quarter++,this.score_quarters[this.quarter]=[0,0],this.time=this.time_overtime,this.store("O"+(this.quarter-this.quarters)+" starts.",1)}},{key:"endQuarter",value:function(){this.store("Q"+this.quarter+" ends.",2)}},{key:"endOvertime",value:function(){this.store("O"+(this.quarter-this.quarters)+" ends.",2),this.quarter++}},{key:"endGame",value:function(){this.store("Game over.",3)}},{key:"doPossession",value:function(){this.time-=20,0>this.time&&(this.time=0);var t=this.possession,e=1===this.possession?0:1,s=this._outcomes(this.teams[t],this.teams[e]),i=this._random(s);switch(i){case 0:this.store(this.teams[this.possession].getName()+" failed to score.",1),this.switchPossesion();break;case 1:case 2:case 3:case 4:this.store(this.teams[this.possession].getName()+" scored "+i+".",1),this.countScore(this.possession,i),this.switchPossesion();break;case-1:this.store(this.teams[this.possession].getName()+" failed to score.",1),this.store(this.teams[this.possession].getName()+" offensive rebound.",1)}0===this.time&&this.store("End of quarter.",1)}},{key:"runRegulation",value:function(){for(;this.quarter<this.quarters-1;){for(this.startQuarter();this.time>0;)this.doPossession();this.endQuarter()}}},{key:"runOvertime",value:function(){for(;this.score[0]===this.score[1];){for(this.startOvertime();this.time>0;)this.doPossession();this.endOvertime()}}},{key:"runGame",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.tipOff(),this.runRegulation(),t&&this.runOvertime(),this.endGame()}},{key:"switchPossesion",value:function(){this.possession=0===this.possession?1:0}},{key:"countScore",value:function(t,e){this.score[t]+=e,this.score_quarters[this.quarter][t]+=e}},{key:"store",value:function(t,e){var s="[Q"+this.quarter+"] ";s+=this._time(this.time)+" ",s+=this._score()+" ",s+=t,this.playbyplay.push({message:s,level:e})}},{key:"showPlayByPlay",value:function(){var t=this.playbyplay;return this.show(t)}},{key:"showQuarters",value:function(){var t=this.playbyplay.filter(function(t){return t.level>1});return this.show(t)}},{key:"showGame",value:function(){var t=this.playbyplay.filter(function(t){return t.level>2});return this.show(t)}},{key:"whoWon",value:function(){return this.score[0]>this.score[1]?0:this.score[1]>this.score[0]?1:-1}},{key:"whoLost",value:function(){return this.score[0]>this.score[1]?1:this.score[1]>this.score[0]?0:-1}},{key:"getWinner",value:function(){return this.teams[this.whoWon()]}},{key:"getLoser",value:function(){return this.teams[this.whoLost()]}},{key:"show",value:function(t){return t.map(function(t){return"<code>"+t.message+"</code>"}).join("<br/>")}},{key:"showFinalScore",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=this.teams[0].getName();return s+="-",s+=this.teams[1].getName(),s+=" ",s+=this._score(),e&&(s+=" (",s+=this.score_quarters.map(function(e){return t._score(e)}).join(" "),s+=")"),s}},{key:"_outcomes",value:function(t,e){for(var s=[],i=t.getRating(),r=i/(i+e.getRating()),o=0;o<10;++o)o<10*r?s.push(2):s.push(0);return s.push(1),s.push(3),s.push(3),s.push(4),s.push(-1),s}},{key:"_time",value:function(t){var e=Math.floor(t/60),s=t-60*e;return e.toString().padStart(2,"0")+":"+s.toString().padStart(2,"0")}},{key:"_score",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!1===t&&(t=this.score),t[0]+":"+t[1]}},{key:"_random",value:function(t){return t[Math.floor(Math.random()*t.length)]}}]),e}();exports.default=i;
},{}],"OnFV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./Game"));function t(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function n(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}var a=function(){function t(e){i(this,t),this.limit=4,this.type="wins",this.home=0,this.wins=[0,0],this.games=[],e&&Object.assign(this,e)}return n(t,[{key:"runSeries",value:function(){for(;!this.isWon();)this.playGame()}},{key:"isWon",value:function(){switch(this.type){case"wins":default:return this.limit<=this.wins[0]||this.limit<=this.wins[1]}}},{key:"playGame",value:function(){switch(this.type){case"wins":default:if(0===this.home){this.home=1;var e=this.homeGame();e.runGame();var t=e.whoWon();this.wins[t]+=1,this.games.push(e)}else{this.home=0;var i=this.awayGame();i.runGame();var s=0===i.whoWon()?1:0;this.wins[s]+=1,this.games.push(i)}}}},{key:"getWinner",value:function(){var e=this.wins[0]>this.wins[1]?0:1;return this.teams[e]}},{key:"getLoser",value:function(){var e=this.wins[0]>this.wins[1]?1:0;return this.teams[e]}},{key:"homeGame",value:function(){return new e.default({teams:[this.teams[0],this.teams[1]]})}},{key:"awayGame",value:function(){return new e.default({teams:[this.teams[1],this.teams[0]]})}},{key:"showFinalScore",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.teams[0].getName();return t+="-",t+=this.teams[1].getName(),t+=" ",t+=this._score(),e&&(t+=" (",t+=this.games.map(function(e){return e._score()}).join(" "),t+=")"),t}},{key:"_score",value:function(){return this.wins[0]+":"+this.wins[1]}}]),t}();exports.default=a;
},{"./Game":"ClLH"}],"Zmii":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./Series"));function r(e){return e&&e.__esModule?e:{default:e}}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,s)}return t}function s(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?t(Object(s),!0).forEach(function(r){i(e,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))})}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){for(var t=0;t<r.length;t++){var s=r[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function a(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}var u=function(){function r(e){n(this,r),this.teams=[],this.winners=[],this.losers=[],this.series=[],e&&Object.assign(this,e)}return a(r,[{key:"runPlayOff",value:function(){for(var r in this.createPairs(),this.pairs){var t=s({teams:this.pairs[r]},this.serieOptions);this.series.push(new e.default(t))}var i=[];for(var n in this.series)this.series[n].runSeries(),this.winners.push(this.series[n].getWinner()),this.losers.push(this.series[n].getLoser()),i.push(this.series[n].showFinalScore());return i}},{key:"getWinners",value:function(){return this.winners}},{key:"getLosers",value:function(){return this.losers}},{key:"createPairs",value:function(){for(var e=Math.floor(this.teams.length/2),r=[],t=0;t<e;++t)r.push([this.teams[t],this.teams[this.teams.length-1-t]]);this.pairs=r}},{key:"showFinalScore",value:function(){var e=[];for(var r in this.series)e.push(this.series[r].showFinalScore());return e}}]),r}();exports.default=u;
},{"./Series":"OnFV"}],"TrKa":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function r(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e(this,r),this.realN=t,this.n=t%2==0?t:t+1,this.randomize=n}return t(r,[{key:"getPair",value:function(e,r){var t=0,n=0;return 0!==r&&0>=(t=r-e)&&(t+=this.n-1),0>=(n=this.n-1-r-e)&&(n+=this.n-1),[t,n]}},{key:"getRounds",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=[],t=0;t<this.n-1;++t)r.push(this.getRound(t));return e&&(r=this._reverse(r)),this.randomize&&(r=this._shuffle(r)),r}},{key:"_shuffle",value:function(e){return e.sort(function(e,r){return.5-Math.random()})}},{key:"_reverse",value:function(e){var r=JSON.parse(JSON.stringify(e));for(var t in r)for(var n in r[t])r[t][n]=r[t][n].reverse();return r}},{key:"getRound",value:function(e){var r=Math.ceil(this.n/2);console.log("Pairs",r);for(var t=[],n=0;n<r;++n){var i=this.getPair(e,n);(this.n===this.realN||i[0]!==this.n-1&&i[1]!==this.n-1)&&t.push(i)}return t}}]),r}();exports.default=n;
},{}],"dXam":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./Game")),s=e(require("./RoundRobin"));function e(t){return t&&t.__esModule?t:{default:t}}function a(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function i(t,s){for(var e=0;e<s.length;e++){var a=s[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,s,e){return s&&i(t.prototype,s),e&&i(t,e),t}var r=function(){function e(t){a(this,e),this.teams=[],this.rounds=2,this.days=[],this.day=0,this.table=[],this.tableSort=function(t,s){return s.wins-t.wins},t&&Object.assign(this,t);for(var s=0;s<this.teams.length;++s)this.teams[s].id=s,this.table[s]={id:s,games:0,wins:0,loses:0,points:0};this.setupSchedule(),this.setupGames()}return n(e,[{key:"runLeague",value:function(){var t=[];for(var s in this.days)this.runDay();return t.push(this.showTable()),t}},{key:"setupSchedule",value:function(){for(var t=new s.default(this.teams.length,!0),e=0;e<this.rounds;++e){var a=t.getRounds(e%2==1);this.days=this.days.concat(a)}this.days=this._shuffle(this.days)}},{key:"_shuffle",value:function(t){return t.sort(function(t,s){return.5-Math.random()})}},{key:"setupGames",value:function(){for(var s in this.days)for(var e in this.days[s])this.days[s][e]=new t.default({teams:[this.teams[this.days[s][e][0]],this.teams[this.days[s][e][1]]]})}},{key:"showTable",value:function(){var t=[];t.push("<table>");var s=JSON.parse(JSON.stringify(this.table));for(var e in s.sort(this.tableSort),s)t.push("<tr>"),t.push("<td>"),t.push(this.teams[s[e].id].getName()),t.push("</td>"),t.push("<td>"),t.push(s[e].games),t.push("</td>"),t.push("<td>"),t.push(s[e].wins),t.push("</td>"),t.push("<td>"),t.push(s[e].loses),t.push("</td>"),t.push("<td>"),t.push(s[e].points),t.push("</td>"),t.push("</tr>");return t.push("</table>"),t.join("")}},{key:"getTeamsStandings",value:function(){var t=[],s=JSON.parse(JSON.stringify(this.table));for(var e in s.sort(this.tableSort),s)t.push(this.teams[s[e].id]);return t}},{key:"runDay",value:function(){var t=[];for(var s in this.days[this.day]){this.days[this.day][s].runGame();var e=this.days[this.day][s].getWinner().id,a=this.days[this.day][s].getLoser().id;this.table[e].games++,this.table[e].wins++,this.table[e].points++,this.table[a].games++,this.table[a].loses++,t.push(this.days[this.day][s].showFinalScore())}return++this.day,t}}]),e}();exports.default=r;
},{"./Game":"ClLH","./RoundRobin":"TrKa"}],"ACc7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./PlayOff")),t=n(require("./League"));function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var o=function(){function n(e){r(this,n),this.teams=[],this.regularSeasonOptions={rounds:4},this.limitPlayoffs=8,this.quarterFinalsOptions={serieOptions:{type:"wins",limit:2}},this.semiFinalsOptions={serieOptions:{type:"wins",limit:3}},this.smallFinalsOptions={serieOptions:{type:"wins",limit:3}},this.finalsOptions={serieOptions:{type:"wins",limit:4}},e&&Object.assign(this,e)}return u(n,[{key:"runSeason",value:function(){var e=[];return e=(e=(e=(e=(e=e.concat(this.runRegularSeason())).concat(this.runQuarterFinals())).concat(this.runSemiFinals())).concat(this.runSmallFinals())).concat(this.runFinals())}},{key:"runRegularSeason",value:function(){var e=[];return this.regularSeason=new t.default(i({teams:this.teams},this.regularSeasonOptions)),e=e.concat(this.regularSeason.runLeague()),this.playoffTeams=this.regularSeason.getTeamsStandings().slice(0,this.limitPlayoffs),e}},{key:"runQuarterFinals",value:function(){var t=[];return this.quarterFinals=new e.default(i({teams:this.playoffTeams},this.quarterFinalsOptions)),t.push(""),t=t.concat(this.quarterFinals.runPlayOff()),this.semiFinalsTeams=this.quarterFinals.getWinners(),t}},{key:"runSemiFinals",value:function(){var t=[];return this.semiFinals=new e.default(i({teams:this.semiFinalsTeams},this.semiFinalsOptions)),t.push(""),t=t.concat(this.semiFinals.runPlayOff()),this.smallFinalsTeams=this.semiFinals.getLosers(),this.finalsTeams=this.semiFinals.getWinners(),t}},{key:"runSmallFinals",value:function(){var t=[];return this.smallFinals=new e.default(i({teams:this.smallFinalsTeams},this.smallFinalsOptions)),t.push(""),t=t.concat(this.smallFinals.runPlayOff()),this.winners=this.smallFinals.getWinners(),t}},{key:"runFinals",value:function(){var t=[];return this.finals=new e.default(i({teams:this.finalsTeams},this.finalsOptions)),t.push(""),t=t.concat(this.finals.runPlayOff()),this.winners=this.finals.getWinners(),t}}]),n}();exports.default=o;
},{"./PlayOff":"Zmii","./League":"dXam"}],"LNlD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./PlayOff")),t=n(require("./League"));function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var o=function(){function n(e){r(this,n),this.teams=[],this.regularSeasonOptions={rounds:2},this.limitPlayoffs=8,this.quarterFinalsOptions={serieOptions:{type:"wins",limit:3}},this.semiFinalsOptions={serieOptions:{type:"wins",limit:1}},this.smallFinalsOptions={serieOptions:{type:"wins",limit:1}},this.finalsOptions={serieOptions:{type:"wins",limit:1}},e&&Object.assign(this,e)}return u(n,[{key:"runSeason",value:function(){var e=[];return e=(e=(e=(e=(e=e.concat(this.runRegularSeason())).concat(this.runQuarterFinals())).concat(this.runSemiFinals())).concat(this.runSmallFinals())).concat(this.runFinals())}},{key:"runRegularSeason",value:function(){var e=[];return this.regularSeason=new t.default(i({teams:this.teams},this.regularSeasonOptions)),e=e.concat(this.regularSeason.runLeague()),this.playoffTeams=this.regularSeason.getTeamsStandings().slice(0,this.limitPlayoffs),e}},{key:"runQuarterFinals",value:function(){var t=[];return this.quarterFinals=new e.default(i({teams:this.playoffTeams},this.quarterFinalsOptions)),t.push(""),t=t.concat(this.quarterFinals.runPlayOff()),this.semiFinalsTeams=this.quarterFinals.getWinners(),t}},{key:"runSemiFinals",value:function(){var t=[];return this.semiFinals=new e.default(i({teams:this.semiFinalsTeams},this.semiFinalsOptions)),t.push(""),t=t.concat(this.semiFinals.runPlayOff()),this.smallFinalsTeams=this.semiFinals.getLosers(),this.finalsTeams=this.semiFinals.getWinners(),t}},{key:"runSmallFinals",value:function(){var t=[];return this.smallFinals=new e.default(i({teams:this.smallFinalsTeams},this.smallFinalsOptions)),t.push(""),t=t.concat(this.smallFinals.runPlayOff()),this.winners=this.smallFinals.getWinners(),t}},{key:"runFinals",value:function(){var t=[];return this.finals=new e.default(i({teams:this.finalsTeams},this.finalsOptions)),t.push(""),t=t.concat(this.finals.runPlayOff()),this.winners=this.finals.getWinners(),t}}]),n}();exports.default=o;
},{"./PlayOff":"Zmii","./League":"dXam"}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var a=t(require("./classes/Team")),e=t(require("./classes/LKL")),n=t(require("./classes/Euroleague"));function t(a){return a&&a.__esModule?a:{default:a}}var i=new a.default({name:"Zalgiris",city:"Kaunas",rating:505}),u=new a.default({name:"Alba",city:"Kaunas",rating:505}),s=new a.default({name:"Bayern",city:"Kaunas",rating:505}),r=new a.default({name:"CSKA",city:"Kaunas",rating:505}),l=new a.default({name:"Chimki",city:"Kaunas",rating:505}),c=new a.default({name:"Zenit",city:"Kaunas",rating:505}),d=new a.default({name:"Asvel",city:"Kaunas",rating:505}),m=new a.default({name:"Real",city:"Kaunas",rating:505}),f=new a.default({name:"Barcelona",city:"Kaunas",rating:505}),y=new a.default({name:"Valencia",city:"Kaunas",rating:505}),g=new a.default({name:"Baskonia",city:"Kaunas",rating:505}),K=new a.default({name:"Olympiacos",city:"Kaunas",rating:505}),w=new a.default({name:"Panathinaicos",city:"Kaunas",rating:505}),o=new a.default({name:"Anadolu Efes",city:"Kaunas",rating:505}),v=new a.default({name:"Fenerbache",city:"Kaunas",rating:505}),A=new a.default({name:"Maccabi",city:"Kaunas",rating:505}),b=new a.default({name:"Crvena Zvezda",city:"Kaunas",rating:505}),q=new a.default({name:"Armani",city:"Kaunas",rating:505}),B=[],h=new n.default({teams:[i,u,s,r,l,c,d,m,f,y,g,K,w,o,v,A,b,q]});B=(B=B.concat(h.runSeason())).join("<br/>"),document.getElementById("app").innerHTML=B;
},{"./styles.css":"D9Nj","./classes/Team":"tnCT","./classes/LKL":"ACc7","./classes/Euroleague":"LNlD"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-zhkpl/src.72423671.js.map