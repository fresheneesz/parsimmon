var Parsimmon = require("./parsimmon/src/parsimmon")
for(var k in Parsimmon) {
    try {
        eval('var '+k+' = Parsimmon["'+k+'"]')
    } catch(e) {
        // ignore
    }
}

var L = createLanguage({
    a: "a",
    b: /b/,
    c: string("c"),
    d: function() {
        return string('d')
    },
    e: function(e) {
        return string(e)
    },
    recursive: function() {
        return seq('f', recursive.atMost(1))
    },
    start: function() {
        return seq(a,b,c,d,e('e'),recursive)
    }
})
for(var k in L) {
    try {
        eval('var '+k+' = L["'+k+'"]')
    } catch(e) {
        // ignore
    }
}

console.log(start.tryParse('abcdefff'))
