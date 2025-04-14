document.addEventListener("DOMContentLoaded", function () {
  const attendanceForm = document.getElementById("attendanceForm");
  const attendanceList = document.getElementById("attendanceList");

  // Load attendance from localStorage
  let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

  function displayAttendance() {
    attendanceList.innerHTML = "";
    attendance.forEach((student, index) => {
      const li = document.createElement("li");
      li.textContent = `${student.name} - ${student.date}`;
      attendanceList.appendChild(li);
    });
  }

  attendanceForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const studentName = document.getElementById("studentName").value;
    if (studentName) {
      const studentRecord = {
        name: studentName,
        date: new Date().toLocaleDateString(),
      };
      attendance.push(studentRecord);
      localStorage.setItem("attendance", JSON.stringify(attendance));
      displayAttendance();
      attendanceForm.reset();
    }
  });

  displayAttendance();
});
