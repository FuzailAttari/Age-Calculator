document.write( ` <font color =red> <Center> <h1 >  Age Calculator </h1>`)


var userinpu= prompt("Enter Your DOB We Show Your Current Age Enter this Formated Example 12 Dec,1991 ")
var getdate = new Date().getTime()
var dob = new Date(userinpu).getTime()
var mius= getdate-dob
var formula = mius / (1000*60*60*24*365)
document.write( ` <h1> Your Current Age is  ` + Math.floor(formula))