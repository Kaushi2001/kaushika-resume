document.getElementById("addEducation").addEventListener("click", function() {
    var eduInput = document.createElement("input");
    eduInput.type = "text";
    eduInput.placeholder = "Education";
    document.getElementById("educationalQualifications").appendChild(eduInput);
  });

  document.getElementById("addExperience").addEventListener("click", function() {
    var expInput = document.createElement("input");
    expInput.type = "text";
    expInput.placeholder = "Work Experience";
    document.getElementById("workExperience").appendChild(expInput);
  });

  document.getElementById("addCertification").addEventListener("click", function() {
    var certInput = document.createElement("input");
    certInput.type = "text";
    certInput.placeholder = "Certification";
    document.getElementById("certifications").appendChild(certInput);
  });

  document.getElementById("addSkill").addEventListener("click", function() {
    var skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Skill";
    document.getElementById("skills").appendChild(skillInput);
  });

  document.getElementById("saveResume").addEventListener("click", function() {
    var resumeData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      linkedin: document.getElementById("linkedin").value,
      github: document.getElementById("github").value,
      educationalQualifications: [],
      workExperience: [],
      certifications: [],
      skills: []
    };

    document.querySelectorAll("#educationalQualifications input").forEach(function(input) {
      resumeData.educationalQualifications.push(input.value);
    });

    document.querySelectorAll("#workExperience input").forEach(function(input) {
      resumeData.workExperience.push(input.value);
    });

    document.querySelectorAll("#certifications input").forEach(function(input) {
      resumeData.certifications.push(input.value);
    });

    document.querySelectorAll("#skills input").forEach(function(input) {
      resumeData.skills.push(input.value);
    });
    document.getElementById("previewResume").addEventListener("click", function() {
      window.location.href = "preview.html";

    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    alert("Resume saved successfully!");
  });


  