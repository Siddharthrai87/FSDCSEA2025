// console.log("hello");
const student={
    name:"sid",
    age:20,
    branch:"cse a",
    language:[{
        lang1:"java",
        lang2:"c",
    },
    {
        database1:"mySql",
        database2:"oracle",
        database3:"mongo",
    },
    {
        frameWork1:"Hibernate",
        frameWork2:"React",
    }
]
}
console.log(student);
console.log(student.language[2].frameWork2);
console.log(student["language"][0]);
delete student.name;
console.log(student);