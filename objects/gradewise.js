// Problem-4 Grade Student Marks

// Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// Sample Input
// [
// 	{
// 		grade: "V",
// 		students: [
// 			{name: "Nrupul", marks: [10, 20, 30]},
// 			{name: "Prateek", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VI",
// 		students: [
// 			{name: "Aman", marks: [10, 20, 30]},
// 			{name: "Albert", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VII",
// 		students: [
// 			{name: "Yogesh", marks: [10, 20, 30]},
// 			{name: "Sandhya", marks: [20, 30, 40]}
// 		]
// 	}
// ]
// Sample Output
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90


var grades = {

    data1:[],
  
    students_list_1: function(name,grade,maths,science,english)
    {
      var details = 
      {
        name: name,
        grade : grade,
        marks: [maths,science,english]
      }
      
    this.data1.push(details);
    },
  
    list_1 : function()
    {
      var sum_1 = 0;
      var sum_2 = 0;
      var marks_1 = this.data1[0]["marks"]
      var marks_2 = this.data1[1]["marks"]
  
      for (var num = 0; num < marks_1.length; num++)
      {
        sum_1 = sum_1 + marks_1[num]
        sum_2 = sum_2 + marks_2[num]
      }
  
      if (sum_1 > sum_2)
      {
        var highest_1 = []
        highest_1.push(this.data1[0]["grade"],this.data1[0]["name"],sum_1)
        return highest_1.join("-")
      }
      else
      { 
        var highest_2 = []
  
        highest_2.push(this.data1[1]["grade"],this.data1[1]["name"],sum_2)
        
        return highest_2.join("-")
      }
    },
  
  
    data2:[],
  
    students_list_2: function(name,grade,maths,science,english)
    {
      var details = 
      {
        name: name,
        grade : grade,
        marks: [maths,science,english]
      }
      
    this.data2.push(details);
    },
  
    list_2 : function()
    {
      var sum_1 = 0;
      var sum_2 = 0;
      var marks_1 = this.data2[0]["marks"]
      var marks_2 = this.data2[1]["marks"]
  
      for (var num = 0; num < marks_1.length; num++)
      {
        sum_1 = sum_1 + marks_1[num]
        sum_2 = sum_2 + marks_2[num]
      }
  
      if (sum_1 > sum_2)
      {
        var highest_1 = []
        highest_1.push(this.data2[0]["grade"],this.data2[0]["name"],sum_1)
        return highest_1.join("-")
      }
      else
      { 
        var highest_2 = []
  
        highest_2.push(this.data2[1]["grade"],this.data2[1]["name"],sum_2)
        
        return highest_2.join("-")
      }
    },
  
  
    data3:[],
  
    students_list_3: function(name,grade,maths,science,english)
    {
      var details = 
      {
        name: name,
        grade : grade,
        marks: [maths,science,english]
      }
      
    this.data3.push(details);
    },
  
    list_3 : function()
    {
      var sum_1 = 0;
      var sum_2 = 0;
      var marks_1 = this.data3[0]["marks"]
      var marks_2 = this.data3[1]["marks"]
  
      for (var num = 0; num < marks_1.length; num++)
      {
        sum_1 = sum_1 + marks_1[num]
        sum_2 = sum_2 + marks_2[num]
      }
  
      if (sum_1 > sum_2)
      {
        var highest_1 = []
        highest_1.push(this.data3[0]["grade"],this.data3[0]["name"],sum_1)
        return highest_1.join("-")
      }
      else
      { 
        var highest_2 = []
  
        highest_2.push(this.data3[1]["grade"],this.data3[1]["name"],sum_2)
        
        return highest_2.join("-")
      } 
    }
  }
  
  
  grades.students_list_1("Nrupul","V",10, 20, 30);
  grades.students_list_1("Prateek","V",20, 30, 40);
  
  console.log(grades.list_1())
  
  grades.students_list_2("Aman","VI",10, 20, 30);
  grades.students_list_2("Albert","VI",20, 30, 40);
  
  console.log(grades.list_2())
  
  grades.students_list_3("Yogesh","VII",10, 20, 30);
  grades.students_list_3("Sandhya","VII",20, 30, 40);
  
  console.log(grades.list_3())
  
  // **************************************************************************