var a = 1;
console.log( a );
var b = a++;
console.log( b );
var c = ++a;
console.log( c );
var d = "hello";
console.log( d );
var e = false;
console.log( e );
d++;
console.log( d );
e++;
console.log( e );
var perplexed;
console.log( perplexed );
perplexed + 2;
console.log( perplexed)
var price = 2.7;
console.log( price);
price.toFixed(2);
console.log( price);
isNaN(0)
console.log(isNaN(0))
isNaN(1)
console.log(isNaN(1))
isNaN("")
console.log(isNaN(""))
isNaN("string")
console.log("string")
isNaN("0")
console.log(isNaN("0"))
isNaN("1")
console.log(isNaN("1"))
isNaN("3.145")
console.log(isNaN("3.145"))
isNaN(Number.MAX_VALUE)
console.log(isNaN(Number.MAX_VALUE))
isNaN(Infinity)
console.log(isNaN())
isNaN("true")
console.log(isNaN())
isNaN(true)
console.log(isNaN(true))
isNaN("false")
console.log(isNaN("false"))
isNaN(false)
console.log( isNaN(false))
// to illustrate why the isNaN() function is needed:
NaN == NaN
!true
console.log(!true)
!false
console.log(!false)
!!true
console.log(!!true)
!!false
console.log(!!false)
!!0
console.log(!!0)
!!-0
console.log(!!-0)
!!1
console.log(!!1)
!!-1
console.log(!!-1)
!!0.1
console.log(!!0.1)
!!"hello"
console.log(!!"hello")
!!""
console.log(!!"")
!!''
console.log(!!'')
!!"false"
console.log(!!"false")
!!"0"
console.log(!!"0")
// excersise # 2
var sample = "Hello Codeup";
console.log(sample.length);
console.log(sample.toUpperCase())
sample = sample + " Students ";
console.log(sample)
console.log(sample.replace(" Students", " Class"));
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
console.log(sample.substring(6, 12));
console.log(sample.substring(sample.indexOf("C"), sample.indexOf("p") + 1));
// exercise # 3
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
console.log((littleMermaid + brotherBear + hercules) * 3);
var google = 400;
var amazon = 380;
var facebook = 350;
console.log((google * 6) + (facebook * 10) + (amazon * 4))

var classNotFull = true;
var noconflict = true;
var enrolled = classNotFull && noconflict;

var premium = true
var numberOfItems = 2
var notexpired = true
var offer = notexpired && (numberOfItems > 2 || premium)

var username = 'codeup';
var password = 'notastrongpassword';
var passwordAtleastFive = password.length >= 5;
var passwordNoUser = password.lastIndexOf(username) === -1;
var usernameMax = username.length <= 20;
var noWhiteSpace = username.trim() && password.trim();

