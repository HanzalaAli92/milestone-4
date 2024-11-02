"use strict";
// Get references to the form and display area
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');
// Handle Form Submission
form.addEventListener('submit', (event) => {
    var _a;
    event.preventDefault(); // prevent page reload
    // Collect input values
    const profilePictureInput = document.getElementById('profilePicture');
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('father').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const card = document.getElementById('card').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    // Picture elements
    const profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    //Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}

    <h3>Personal Information</h3>
    
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>

    <p><b>Father Name:</b><span contenteditable="true">${fatherName}</span></p>

    <p><b>Email:</b><span contenteditable="true">${email}</span></p>

    <p><b>Address:</b><span contenteditable="true">${address}</span></p>

    <p><b>Phone Number:</b><span contenteditable="true">${phone}</span></p>

    <p><b>Identity Card Number:</b><span contenteditable="true">${card}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;
    //Display the generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display is missing.');
    }
});
