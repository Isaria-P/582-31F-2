const jsonText = '{"title":"Web Interface Programming 2","credits":3,"active":true}';

const parseText = JSON.parse(jsonText);
console.log("Object Below")
console.log(parseText)
console.log(parseText.title)
console.log(parseText.credits)


// =========================
/** 
convert it to JSON text
log the result
log the type
 */
const course = {
  title: "Advanced Programming",
  credits: 3,
  active: true
};


const courseToJSON = JSON.stringify(course)
console.log(courseToJSON)
console.log( typeof courseToJSON)


const prettyCourse = JSON.stringify(course, null, 2)
console.log(prettyCourse)



