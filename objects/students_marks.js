// Create an object with the following functionality
// Ability to add student details and 3 subject marks
// Methods to find the student with the least and highest total
console.log("Total Marks : ")

var students_details = {

  data : [],

  addStudents: function(name,cls,sec,mths,social,scnce)
  {
    var student = 
    {
      name : name,
      clss : cls,
      section : sec,
      maths : mths,
      social : social,
      science : scnce
    }

    this.data.push(student)
  },

  low_High_Score: function()
  {
    var low_student = "";
    var high_student = "";
    var low_score = 0;
    var high_score = 0;

    for (var num = 0; num < this.data.length;num++)
    {
      var currentStudent = this.data[num];
      var total_marks = currentStudent.maths + currentStudent.social + currentStudent.science;
      
      console.log(currentStudent.name," - ",total_marks)

      if (low_score == 0 || low_score > total_marks)
      {
        low_score = total_marks;
        low_student = currentStudent;
      }

      if (high_score < total_marks)
      {
        high_score = total_marks;
        high_student = currentStudent;
      }
    }
    console.log("\n","Highest Total : ","\n",high_student)
    console.log("\n","Lowest Total :","\n",low_student);
  }
}

students_details.addStudents("Anand",10,"A",85,88,91);
students_details.addStudents("Vijay",10,"B",73,94,84);
students_details.addStudents("Pradeep",10,"C",91,80,77);
students_details.addStudents("Ganesh",10,"A",89,78,92);
students_details.addStudents("Rohan",10,"B",79,92,90);
students_details.addStudents("Suraj",10,"C",95,73,87);

students_details.low_High_Score();