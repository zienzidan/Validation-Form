function validate() {
    if (document.forms["frs"]["Nama"].value == "") {
      alert("Nama tidak boleh kosong!");
      document.forms["frs"]["Nama"].focus();
      return false;
    }
    if (document.forms["frs"]["NRP"].value == "") {
      alert("NRP tidak boleh kosong!");
      document.forms["frs"]["NRP"].focus();
      return false;
    }
    if (document.forms["frs"]["Email"].value == "") {
      alert("Email tidak boleh kosong!");
      document.forms["frs"]["Email"].focus();
      return false;
    }
    if (document.forms["frs"]["matkul"].value == "0") {
      alert("Harap memilih matkul!");
      document.forms["frs"]["matkul"].focus();
      return false;
    }
    if (document.forms["frs"]["dosen"].selectedIndex < 1) {
      alert("Harap memilih dosen!");
      document.forms["frs"]["dosen"].focus();
      return false;
    }
    if (document.forms["frs"]["faculty"].selectedIndex < 1) {
      alert("Harap memilih fakultas!");
      document.forms["frs"]["faculty"].focus();
      return false;
  }
  if (document.forms["frs"]["department"].selectedIndex < 1) {
      alert("Harap memilih departemen!");
      document.forms["frs"]["department"].focus();
      return false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const facultySelect = document.querySelector('select[name="faculty"]');
  const departmentSelect = document.querySelector('#departmentSelect');

  const defaultDepartmentOption = departmentSelect.querySelector('option[value="0"]');

  facultySelect.addEventListener("change", function () {
      const selectedFaculty = facultySelect.value;
      const departmentOptions = departmentSelect.querySelectorAll('option');

      departmentOptions.forEach(function (option) {
          option.style.display = "none";
      });

      const departmentOptionsForFaculty = departmentSelect.querySelectorAll('.faculty-' + selectedFaculty);
      departmentOptionsForFaculty.forEach(function (option) {
          option.style.display = "";
      });

      departmentSelect.value = "0";
  });
});