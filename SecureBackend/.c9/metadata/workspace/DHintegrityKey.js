{"changed":true,"filter":false,"title":"DHintegrityKey.js","tooltip":"/DHintegrityKey.js","value":"'use strict';\nvar forge = require('node-forge');\nconst crypto = require('crypto');\nconst EventEmitter = require('events');\nconst util = require('util');\n\nfunction IntegrityKey() {\n    EventEmitter.call(this);\n    var integritykey = integritykey;\n\n    this.setintegritykey = function(s) {\n        integritykey = s;\n    }\n\n    this.getintegritykey = function() {\n        return integritykey;\n    }\n}\nutil.inherits(IntegrityKey, EventEmitter);\nIntegrityKey.prototype.__proto__ = EventEmitter.prototype;\n\nIntegrityKey.prototype.GenerateIntegrityKey = function(SessionResult) {\n   // var bytesv2 = []; // char codes\n    var bytes = [];\n\n    for (var i = 0; i < SessionResult.length; ++i) {\n        var code = SessionResult.charCodeAt(i);\n        bytes = bytes.concat([code]);\n      //  bytesv2 = bytesv2.concat([code & 0xff, code / 256 >>> 0]);\n    }\n   // console.log(\"lenght is\" + bytes.length)\n    var IntegrityArray = bytes.slice(Math.min(bytes.length/2,16),Math.min(bytes.length,32));\n    //console.log(\"hash \" + IntegrityArray.bytes);\n\n    this.setintegritykey(IntegrityArray);\n}\nIntegrityKey.prototype.returnIntegrityKey = function(SessionResult) {\n    return this.getintegritykey();\n}\n\n\nmodule.exports = IntegrityKey","undoManager":{"mark":75,"position":100,"stack":[[{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"insert","lines":["s"],"id":752}],[{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["o"],"id":753}],[{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["l"],"id":754}],[{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["e"],"id":755}],[{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["."],"id":756}],[{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["l"],"id":757}],[{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":["o"],"id":758}],[{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":["g"],"id":759}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":17},"action":"insert","lines":["()"],"id":760}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["l"],"id":761}],[{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["e"],"id":762}],[{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["n"],"id":763}],[{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["g"],"id":764}],[{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["h"],"id":765}],[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["t"],"id":766}],[{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":[" "],"id":767}],[{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["i"],"id":768}],[{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["s"],"id":769}],[{"start":{"row":30,"column":25},"end":{"row":30,"column":26},"action":"insert","lines":["+"],"id":770}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["\""],"id":771}],[{"start":{"row":30,"column":26},"end":{"row":30,"column":27},"action":"insert","lines":["\""],"id":772}],[{"start":{"row":30,"column":28},"end":{"row":30,"column":29},"action":"insert","lines":["b"],"id":773}],[{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":["y"],"id":774}],[{"start":{"row":30,"column":30},"end":{"row":30,"column":31},"action":"insert","lines":["t"],"id":775}],[{"start":{"row":30,"column":31},"end":{"row":30,"column":32},"action":"insert","lines":["e"],"id":776}],[{"start":{"row":30,"column":32},"end":{"row":30,"column":33},"action":"insert","lines":["s"],"id":777}],[{"start":{"row":30,"column":33},"end":{"row":30,"column":34},"action":"insert","lines":["."],"id":778}],[{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"insert","lines":["l"],"id":779}],[{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"remove","lines":["l"],"id":780},{"start":{"row":30,"column":34},"end":{"row":30,"column":40},"action":"insert","lines":["length"]}],[{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"insert","lines":[" "],"id":781},{"start":{"row":30,"column":29},"end":{"row":30,"column":30},"action":"insert","lines":[" "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":31,"column":41},"end":{"row":31,"column":42},"action":"remove","lines":["5"],"id":782}],[{"start":{"row":31,"column":41},"end":{"row":31,"column":42},"action":"insert","lines":["6"],"id":783}],[{"start":{"row":34,"column":25},"end":{"row":34,"column":30},"action":"remove","lines":["bytes"],"id":784},{"start":{"row":34,"column":25},"end":{"row":34,"column":39},"action":"insert","lines":["IntegrityArray"]}],[{"start":{"row":31,"column":40},"end":{"row":31,"column":44},"action":"insert","lines":["Math"],"id":785}],[{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"insert","lines":["."],"id":786}],[{"start":{"row":31,"column":45},"end":{"row":31,"column":46},"action":"insert","lines":["m"],"id":787}],[{"start":{"row":31,"column":46},"end":{"row":31,"column":47},"action":"insert","lines":["i"],"id":788}],[{"start":{"row":31,"column":47},"end":{"row":31,"column":48},"action":"insert","lines":["n"],"id":789}],[{"start":{"row":31,"column":48},"end":{"row":31,"column":49},"action":"insert","lines":["("],"id":790}],[{"start":{"row":31,"column":49},"end":{"row":31,"column":60},"action":"insert","lines":["ytes.length"],"id":791}],[{"start":{"row":31,"column":49},"end":{"row":31,"column":50},"action":"insert","lines":["b"],"id":792}],[{"start":{"row":31,"column":61},"end":{"row":31,"column":62},"action":"insert","lines":["/"],"id":793}],[{"start":{"row":31,"column":62},"end":{"row":31,"column":63},"action":"insert","lines":["2"],"id":794}],[{"start":{"row":31,"column":63},"end":{"row":31,"column":64},"action":"insert","lines":["."],"id":795}],[{"start":{"row":31,"column":63},"end":{"row":31,"column":64},"action":"remove","lines":["."],"id":796}],[{"start":{"row":31,"column":63},"end":{"row":31,"column":64},"action":"insert","lines":[","],"id":797}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"insert","lines":[")"],"id":798}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":["/"],"id":799}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["/"],"id":800}],[{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["/"],"id":801}],[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["/"],"id":802}],[{"start":{"row":22,"column":3},"end":{"row":22,"column":4},"action":"insert","lines":["/"],"id":803}],[{"start":{"row":22,"column":4},"end":{"row":22,"column":5},"action":"insert","lines":["/"],"id":804}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"insert","lines":[","],"id":805}],[{"start":{"row":31,"column":68},"end":{"row":31,"column":69},"action":"insert","lines":["m"],"id":806}],[{"start":{"row":31,"column":68},"end":{"row":31,"column":69},"action":"remove","lines":["m"],"id":807}],[{"start":{"row":31,"column":68},"end":{"row":31,"column":69},"action":"insert","lines":["m"],"id":808}],[{"start":{"row":31,"column":68},"end":{"row":31,"column":69},"action":"remove","lines":["m"],"id":809}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"remove","lines":[","],"id":810}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"insert","lines":["M"],"id":811}],[{"start":{"row":31,"column":68},"end":{"row":31,"column":69},"action":"insert","lines":["a"],"id":812}],[{"start":{"row":31,"column":69},"end":{"row":31,"column":70},"action":"insert","lines":["t"],"id":813}],[{"start":{"row":31,"column":70},"end":{"row":31,"column":71},"action":"insert","lines":["h"],"id":814}],[{"start":{"row":31,"column":67},"end":{"row":31,"column":68},"action":"insert","lines":[","],"id":815}],[{"start":{"row":31,"column":72},"end":{"row":31,"column":73},"action":"insert","lines":["."],"id":816}],[{"start":{"row":31,"column":73},"end":{"row":31,"column":74},"action":"insert","lines":["m"],"id":817}],[{"start":{"row":31,"column":74},"end":{"row":31,"column":75},"action":"insert","lines":["i"],"id":818}],[{"start":{"row":31,"column":75},"end":{"row":31,"column":76},"action":"insert","lines":["n"],"id":819}],[{"start":{"row":31,"column":76},"end":{"row":31,"column":78},"action":"insert","lines":["()"],"id":820}],[{"start":{"row":31,"column":77},"end":{"row":31,"column":89},"action":"insert","lines":["bytes.length"],"id":821}],[{"start":{"row":31,"column":89},"end":{"row":31,"column":90},"action":"insert","lines":[","],"id":822}],[{"start":{"row":31,"column":90},"end":{"row":31,"column":91},"action":"insert","lines":["3"],"id":823}],[{"start":{"row":31,"column":91},"end":{"row":31,"column":92},"action":"insert","lines":["2"],"id":824}],[{"start":{"row":31,"column":39},"end":{"row":31,"column":40},"action":"remove","lines":[" "],"id":825}],[{"start":{"row":31,"column":38},"end":{"row":31,"column":39},"action":"remove","lines":[","],"id":826}],[{"start":{"row":31,"column":37},"end":{"row":31,"column":38},"action":"remove","lines":["0"],"id":827}],[{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":828}],[{"start":{"row":40,"column":0},"end":{"row":42,"column":1},"action":"insert","lines":["IntegrityKey.prototype.returnIntegrityKey = function(SessionResult) {","    return this.getintegritykey();","}"],"id":829}],[{"start":{"row":40,"column":23},"end":{"row":40,"column":42},"action":"remove","lines":["returnIntegrityKey "],"id":830},{"start":{"row":40,"column":23},"end":{"row":40,"column":24},"action":"insert","lines":["m"]}],[{"start":{"row":40,"column":24},"end":{"row":40,"column":25},"action":"insert","lines":["i"],"id":831}],[{"start":{"row":40,"column":25},"end":{"row":40,"column":26},"action":"insert","lines":["t"],"id":832}],[{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"insert","lines":["s"],"id":833}],[{"start":{"row":40,"column":27},"end":{"row":40,"column":28},"action":"insert","lines":["o"],"id":834}],[{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"insert","lines":["s"],"id":835}],[{"start":{"row":41,"column":3},"end":{"row":41,"column":34},"action":"remove","lines":[" return this.getintegritykey();"],"id":836},{"start":{"row":41,"column":3},"end":{"row":41,"column":4},"action":"insert","lines":["c"]}],[{"start":{"row":41,"column":4},"end":{"row":41,"column":5},"action":"insert","lines":["o"],"id":837}],[{"start":{"row":41,"column":5},"end":{"row":41,"column":6},"action":"insert","lines":["n"],"id":838}],[{"start":{"row":41,"column":6},"end":{"row":41,"column":7},"action":"insert","lines":["s"],"id":839}],[{"start":{"row":41,"column":7},"end":{"row":41,"column":8},"action":"insert","lines":["o"],"id":840}],[{"start":{"row":41,"column":8},"end":{"row":41,"column":9},"action":"insert","lines":["l"],"id":841}],[{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"insert","lines":["e"],"id":842}],[{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"insert","lines":["."],"id":843}],[{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"insert","lines":["l"],"id":844}],[{"start":{"row":41,"column":12},"end":{"row":41,"column":13},"action":"insert","lines":["o"],"id":845}],[{"start":{"row":41,"column":13},"end":{"row":41,"column":14},"action":"insert","lines":["f"],"id":846}],[{"start":{"row":41,"column":13},"end":{"row":41,"column":14},"action":"remove","lines":["f"],"id":847}],[{"start":{"row":41,"column":13},"end":{"row":41,"column":14},"action":"insert","lines":["g"],"id":848}],[{"start":{"row":41,"column":14},"end":{"row":41,"column":16},"action":"insert","lines":["()"],"id":849}],[{"start":{"row":41,"column":15},"end":{"row":41,"column":27},"action":"insert","lines":["integritykey"],"id":850}],[{"start":{"row":41,"column":28},"end":{"row":41,"column":29},"action":"insert","lines":[";"],"id":851}],[{"start":{"row":40,"column":0},"end":{"row":42,"column":1},"action":"remove","lines":["IntegrityKey.prototype.mitsos= function(SessionResult) {","   console.log(integritykey);","}"],"id":852}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":5},"end":{"row":12,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1474626296419}