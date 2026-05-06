
let student = { 
    id: 3928,
    name: "Lilly Peteals",
    program: "Softwear Design",
    semester: 3,
    bio: "Back Ground in webdesign and i slloking to grow more of her technical side"
}

let enrolled = true;
const loadcoursesBtn = document.getElementById("load-courses-btn")
const p = document.getElementById("status")

function getStudentsData() {
    let promise = new Promise((resolve, reject) => {
        if (enrolled == true) {
            setTimeout(() => {
                resolve({
                    Id: student.id,
                    name: student.name,
                    Program: student.program,
                    Semester: student.semester,
                    Bio: student.bio
                })
            }, 1000);
        } else {
            setTimeout(() => {
                resolve("Student Is Not Enrolled")
            })
        }
        
    });
    return promise;
}   

getStudentsData().then(studentData => {
    console.log(studentData)
    return studentData;
}).catch(error => {
    console.log(error)
})
 
const studentContainer = document.getElementById("student-container")
const loadStudentBtn = document.getElementById("load-student-btn");

function renderStudent(student) {
    studentContainer.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
        Student ID: ${student.id},
        Student Name: ${student.name},
        Student Program: ${student.program},
        Student Semester: ${student.semester},
        Student Bio: ${student.bio},`;
    studentContainer.append(div);
    return div;
}


loadStudentBtn.addEventListener("click", () => {
    p.textContent = "Student has loaded succesfully."
    renderStudent(student)
})

const courses = [
  { code: "WIP2", title: "Web Interface Programming 2" },
  { code: "AWP", title: "Advanced Programming" },
  { code: "DB2", title: "Database Management Systems 2" }
]

function getCoursesData() {
    let promise = new Promise((resolve, reject) => {
        if (enrolled == true) {
            setTimeout(() => {
                resolve(courses)
            }, 2000);
        } else {
            reject("Student has not been Enrolled")
        }
    })
    return promise;
}

getCoursesData().then(courseData => {
    console.log(...courseData)
    // coursesContainer.textContent = "courseData" // here [object Object],[object Object],[object Object]
    // return courseData
})
  .catch(error => {
    return error
})

let coursesContainer = document.getElementById("courses-container")

function renderCourses(courses) {
    coursesContainer.innerHTML = "";

    const ul = document.createElement("ul")
    courses.forEach(course => {
        const li = document.createElement("li")
        li.innerHTML = `Course Code: ${course.code}, Course Title: ${course.title}`;
        ul.append(li);
        return ul;
    })
    coursesContainer.append(ul)

   return  coursesContainer
}



loadcoursesBtn.addEventListener("click", () => {
    p.textContent = "Loading courses..."
    coursesContainer.textContent = ""

    getCoursesData().then(result => {
        console.log(result)
        p.textContent = "Courses has loaded succesfully."
        renderCourses(result)
    })
    .catch(error => {
        coursesContainer.textContent = error
    })

})

/**
 * When the Clear button is clicked:

clear the student container
clear the courses container
reset the status message to "Ready."
 */

const clearBtn = document.getElementById("clear-btn")
clearBtn.addEventListener("click", () => {
    studentContainer.textContent = ""
    coursesContainer.textContent = ""
    p.textContent = "Ready"
})



