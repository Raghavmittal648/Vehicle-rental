const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

let valid = false;
function loginFunction() {
  const lemail = document.getElementById("lemail").value;
  const lpassword = document.getElementById("lpassword").value;

  console.log(lemail + " " + lpassword);
}

function signupFunction() {
  const Semail = document.getElementById("Semail").value;
  const Spassword = document.getElementById("Spassword").value;
  const SCpassword = document.getElementById("SCpassword").value;

  if (Spassword === SCpassword) {
    console.log(Semail + " " + Spassword + " " + SCpassword);
  } else alert("Password doesn't Match");

  document.getElementById("Semail").value = "";
  document.getElementById("Spassword").value = "";
  document.getElementById("SCpassword").value = "";
}

// const data = { username: "example" };

// fetch("https://example.com/profile", {
//   method: "POST", // or 'PUT'
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
