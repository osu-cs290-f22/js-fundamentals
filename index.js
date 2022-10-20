console.log("Hello, world!")

console.log("==========")
console.log("== Variables")
console.log("==========")

var n = 5
console.log("== n:", n)
console.log("== typeof(n):", typeof(n))

n = "this is a string"
console.log("== n:", n)
console.log("== typeof(n):", typeof(n))

console.log("==========")
console.log("== Numbers")
console.log("==========")

console.log("== 9 / 5:", 9 / 5)

console.log("==========")
console.log("== Comparisons")
console.log("==========")

if (2 == 2) {
    console.log("== 2 == 2 ✅")
}

if (2 == "2") {
    console.log("== 2 == \"2\" ✅")
}

if (2 === "2") {
    console.log("== 2 === \"2\" ❌")
}

var catNumber = parseInt("cat")
console.log("== catNumber:", catNumber)

var catString = "cat"
if (catString) {
    console.log("== catString is truthy")
}

var emptyString = ""
if (emptyString) {
    console.log("== emptyString is falsy")
}

var undefinedVariable
console.log("== undefinedVariable:", undefinedVariable)
if (undefinedVariable) {
    console.log("== undefinedVariable is falsy")
}

var ternaryResult = undefinedVariable ? 'yes' : 'no'
console.log("== ternaryResult:", ternaryResult)

console.log("==========")
console.log("== Strings")
console.log("==========")

var firstString = "this \"is\" a 'string'"
var secondString = 'this \'is\' also a "string"'

var decathlonString = "decathlon"
console.log("== decathlonString.indexOf('cat'):", decathlonString.indexOf('cat'))

var teamString = "team"
console.log("== teamString.indexOf('i'):", teamString.indexOf('i'))

// undefinedVariable?.someProperty

console.log("==========")
console.log("== Functions")
console.log("==========")

function addThreeThings(a, b, c) {
    console.log("  -- in addThreeThings(), arguments:", arguments)
    return a + b + c
}

console.log("== addThreeThings(1, 2, 3):", addThreeThings(1, 2, 3))
console.log("== addThreeThings('1', '2', '3'):", addThreeThings('1', '2', '3'))
console.log("== addThreeThings('1', '2'):", addThreeThings('1', '2'))
console.log("== addThreeThings(1, 2, 3, 4, 5, 6):", addThreeThings(1, 2, 3, 4, 5, 6))

var fn = addThreeThings
console.log("== fn:", fn)
console.log("== fn(1, 2, 3):", fn(1, 2, 3))

var anonymousFn = function (a, b) {
    console.log("== inside anonymousFn")
}
console.log("== anonymousFn:", anonymousFn)
anonymousFn()

console.log("==========")
console.log("== Arrays")
console.log("==========")

var array = [ 1, '2', anonymousFn, ['a', 'b'] ]
array.push(4)
console.log("== array:", array)
console.log("== array.length:", array.length)
for (var i = 0; i < array.length; i++) {
    console.log("  -- array[" + i + "]:", array[i])
}

console.log("== array.forEach():")
array.forEach(function (elem, idx) {
    console.log("  -- inside forEach loop, elem:", elem, "idx:", idx)
})

function printArrayElem(elem) {
    console.log("  -- in printArrayElem(), elem:", elem)
}
array.forEach(printArrayElem)
