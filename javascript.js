    let allData = JSON.parse(localStorage.getItem("user")) || [];

    function saveData() {
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const studentIdInput = document.getElementById("studentId");
      const cityInput = document.getElementById("city");
      const courseInput = document.getElementById("course");

      allData.push({
        name: nameInput.value,
        email: emailInput.value,
        studentId: studentIdInput.value,
        city: cityInput.value,
        course: courseInput.value,
      });

      localStorage.setItem("user", JSON.stringify(allData));

      nameInput.value = "";
      emailInput.value = "";
      studentIdInput.value = "";
      cityInput.value = "";
      courseInput.value = "";

      displayData();
    }

    function displayData() {
      const dataBody = document.getElementById("dataBody");
      dataBody.innerHTML = "";

      allData.forEach((item, index) => {
        const row = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.textContent = index + 1;

        const td2 = document.createElement("td");
        td2.textContent = item.name;

        const td3 = document.createElement("td");
        td3.textContent = item.email;

        const td4 = document.createElement("td");
        td4.textContent = item.studentId;

        const td5 = document.createElement("td");
        td5.textContent = item.city;

        const td6 = document.createElement("td");
        td6.textContent = item.course;

        row.append(td1, td2, td3, td4, td5, td6);
        dataBody.appendChild(row);
      });
    }

    displayData();