// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

console.log(findMatching(drivers, 'Bobby')); 
console.log(findMatching(drivers, 'sally')); 

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => driver.startsWith(string)
    )

}
console.log(fuzzyMatch(drivers,'S'))


const Drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(obj,string){
    
      return obj.filter(driver=>driver.name===string)
}
console.log(matchName(Drivers,'Bobby'))