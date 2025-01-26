//Destructure
const course = {
    courseName:"js in english",
    coursePrice:"999",
    courseInstructor :"hitesh Sir"   
}

//course.courseInstructor

const{courseInstructor:instructor}=course;
console.log(instructor);

//API

//JSon

// {
//     "name": "hitesh",
//     "coursename":"jsinhindi",
//     "price":"free"
// }