//Modules - Encapsulated Code(only share minimum)

const names=require('./4-names.js') //import from 4-names.js by require
const sayHi=require('./5-utils.js')  //import from 5-utils.js by require
const items=require('./6-alternative-flavor.js')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)