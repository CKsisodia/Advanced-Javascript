class Student {
  static i = 0;
  constructor(name, age, phoneNumber, boardMarks) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.boardMarks = boardMarks;
  }

  checkEligibility() {
    if (this.boardMarks >= 40) {
      console.log(`${this.name} is eligible for college`);
    } else {
      console.log(`${this.name} is not eligible for college`);
    }
  }

  trackOfStudents() {
    Student.i = Student.i + 1;
  } 

  placementAge(minPlacementAge){
    return (minMarks) => {
        if(this.boardMarks > minMarks && this.age > minPlacementAge){
            console.log(this.name + ' is ready for placement');
        }
        else {
            console.log(this.name + 'is not ready for placement');
        }
    }
  }
}
const student1 = new Student("John", 25, 12345, 30);
const student2 = new Student("Hardy", 26, 23456, 40);
const student3 = new Student("Williams", 27, 34567, 25);
const student4 = new Student("Kevin", 28, 45678, 60);
const student5 = new Student("Trump", 29, 56789, 70);

student1.checkEligibility();
student2.checkEligibility();
student3.checkEligibility();
student4.checkEligibility();
student5.checkEligibility();

student1.trackOfStudents();
student2.trackOfStudents();
student3.trackOfStudents();
student4.trackOfStudents();
student5.trackOfStudents();

student1.placementAge(18)(40);

console.log("Number of students = ", Student.i);

