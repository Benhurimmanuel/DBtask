db.studentDb.insertMany([
  {
    name: "student1",
    class: { std: 7, sec: "B" },
    favSubject: "English",
    skills: ["Singing", "sports"],
    Attendance: [
      { date: "14 - 01 - 2020", isPresent: true },
      { date: "15 - 01 - 2020", isPresent: true },
      { date: "16 - 01 - 2020", isPresent: false },
      { date: "17 - 01 - 2020", isPresent: true },
      { date: "18 - 01 - 2020", isPresent: true },
      { date: "19 - 01 - 2020", isPresent: false },
      { date: "20 - 01 - 2020", isPresent: true },
      { date: "21 - 01 - 2020", isPresent: true },
      { date: "22 - 01 - 2020", isPresent: true },
    ],
    batch: "batch1",
  },
  {
    name: "student2",
    class: { std: 7, sec: "B" },
    favSubject: "English",
    skills: ["Singing", "sports"],
    Attendance: [
      { date: "14 - 01 - 2020", isPresent: true },
      { date: "15 - 01 - 2020", isPresent: true },
      { date: "16 - 01 - 2020", isPresent: false },
      { date: "17 - 01 - 2020", isPresent: true },
      { date: "18 - 01 - 2020", isPresent: true },
      { date: "19 - 01 - 2020", isPresent: false },
      { date: "20 - 01 - 2020", isPresent: true },
      { date: "21 - 01 - 2020", isPresent: true },
      { date: "22 - 01 - 2020", isPresent: true },
    ],
    batch: "batch1",
  },
  {
    name: "student3",
    class: { std: 7, sec: "B" },
    favSubject: "English",
    skills: ["Singing", "sports"],
    Attendance: [
      { date: "14 - 01 - 2020", isPresent: true },
      { date: "15 - 01 - 2020", isPresent: true },
      { date: "16 - 01 - 2020", isPresent: false },
      { date: "17 - 01 - 2020", isPresent: true },
      { date: "18 - 01 - 2020", isPresent: true },
      { date: "19 - 01 - 2020", isPresent: false },
      { date: "20 - 01 - 2020", isPresent: true },
      { date: "21 - 01 - 2020", isPresent: true },
      { date: "22 - 01 - 2020", isPresent: true },
    ],
    batch: "batch1",
  },

  {
    name: "student4",
    class: { std: 7, sec: "B" },
    favSubject: "English",
    skills: ["Singing", "sports"],
    Attendance: [
      { date: "14 - 01 - 2020", isPresent: true },
      { date: "15 - 01 - 2020", isPresent: true },
      { date: "16 - 01 - 2020", isPresent: false },
      { date: "17 - 01 - 2020", isPresent: true },
      { date: "18 - 01 - 2020", isPresent: true },
      { date: "19 - 01 - 2020", isPresent: false },
      { date: "20 - 01 - 2020", isPresent: true },
      { date: "21 - 01 - 2020", isPresent: true },
      { date: "22 - 01 - 2020", isPresent: true },
    ],
    batch: "batch1",
  },
  {
    name: "student5",
    class: { std: 7, sec: "B" },
    favSubject: "English",
    skills: ["Singing", "sports"],
    Attendance: [
      { date: "14 - 01 - 2020", isPresent: true },
      { date: "15 - 01 - 2020", isPresent: true },
      { date: "16 - 01 - 2020", isPresent: false },
      { date: "17 - 01 - 2020", isPresent: true },
      { date: "18 - 01 - 2020", isPresent: true },
      { date: "19 - 01 - 2020", isPresent: false },
      { date: "20 - 01 - 2020", isPresent: true },
      { date: "21 - 01 - 2020", isPresent: true },
      { date: "22 - 01 - 2020", isPresent: true },
    ],
    batch: "batch1",
  },
]);
db.batchDb.insertMany([
  {
    name: "batch1",
    type: "weekday",
    startDate: "01-01-2020",
    endDate: "01-02-2020",
    timing: "10am to 12 pm",
    Details: [
      { totalStrength: 20 },
      { studentsEnrolled: 5 },
      { list: ["student1", "student2", "student3", "student4", "student5"] },
      {
        calendar: [
          {
            date: "14 - 01 - 2020",
            studentsPresent: [
              "student1",
              "student2",
              "student3",
              "student4",
              "student5",
              "",
            ],
          },
          {
            date: "15 - 01 - 2020",
            studentsPresent: [
              "student1",
              "student2",
              "student3",
              "student4",
              "student5",
            ],
          },
          {
            date: "16 - 01 - 2020",
            studentsPresent: ["student1", "student2", "student3", "student4"],
          },
          {
            date: "17 - 01 - 2020",
            studentsPresent: ["student5", "student2", "student3", "student4"],
          },
          {
            date: "18 - 01 - 2020",
            studentsPresent: [
              "student1",
              "student2",
              "student3",
              "student4",
              "student5",
            ],
          },
          {
            date: "19 - 01 - 2020",
            studentsPresent: [
              "student1",
              "student2",
              "student3",
              "student4",
              "student5",
            ],
          },
          {
            date: "20 - 01 - 2020",
            studentsPresent: [
              "student1",
              "student2",
              "student3",
              "student4",
              "student5",
            ],
          },
          {
            date: "21 - 01 - 2020",
            studentsPresent: [
              "student1",
              "student2",
              "student3",
              "student4",
              "student5",
            ],
          },
          {
            date: "22 - 01 - 2020",
            studentsPresent: [
              "student1",
              "student2",
              "student3",
              "student4",
              "student5",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "batch2",
    type: "weekday",
    startDate: "01-02-2020",
    endDate: "01-03-2020",
    timing: "11am to 12 pm",
    Details: [
      { totalStrength: 20 },
      { studentsEnrolled: 5 },
      { list: ["student6", "student7", "student8", "student9", "student10"] },
      {
        calendar: [
          {
            date: "14 - 01 - 2020",
            studentsPresent: [
              "student1",
              "student2",
              "student3",
              "student4",
              "student5",
            ],
          },
          {
            date: "15 - 01 - 2020",
            studentsPresent: [
              "student6",
              "student7",
              "student8",
              "student9",
              "student10",
            ],
          },
          {
            date: " 16 - 01 - 2020",
            studentsPresent: ["student6", "student7", "student9", "student10"],
          },
          {
            date: "17 - 01 - 2020",
            studentsPresent: ["student6", "student7", "student5", "student9"],
          },
          {
            date: " 18 - 01 - 2020",
            studentsPresent: [
              "student6",
              "student7",
              "student8",
              "student9",
              "student10",
            ],
          },
          {
            date: "19 - 01 - 2020",
            studentsPresent: [
              "student6",
              "student7",
              "student8",
              "student9",
              "student10",
            ],
          },
          {
            date: " 20 - 01 - 2020",
            studentsPresent: [
              "student6",
              "student7",
              "student8",
              "student9",
              "student10",
            ],
          },
          {
            date: "21 - 01 - 2020",
            studentsPresent: [
              "student6",
              "student7",
              "student8",
              "student9",
              "student10",
            ],
          },
          {
            date: "22 - 01 - 2020",
            studentsPresent: [
              "student6",
              "student7",
              "student8",
              "student9",
              "student10",
            ],
          },
        ],
      },
    ],
  },
]);
db.studentDB.updateOne(
  { name: "student1" },
  { $set: { Attendance: { date: "23 - 01 - 2020", isPresent: true } } }
);
