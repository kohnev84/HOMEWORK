const  testPackage = require('./npm_package/index');

console.log(testPackage.dayOfWeek())
console.log(testPackage.today())
console.log(testPackage.dayOfCelebrate('2022, 08, 13' , '2022, 07, 30'))
console.log(testPackage.dayForBirthday('2022,06,30', 100))