document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const serviceID = "service_33nknsw";
    const templateID = "template_be28y7h";
    const data = {
      from_name: document.getElementById("from_name").value,
      email: document.getElementById("email").value,
      message: "FN" + Math.floor(Math.random() * 1000000 + 100000),
    };

    document.getElementById("message").value =
      "FN" + Math.floor(Math.random() * 1000000 + 100000);

    console.log(this);

    emailjs.sendForm(serviceID, templateID, this).then(
      (res) => {
        console.log("success", res.status);
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
    document.getElementById("email").value = "";
    document.getElementById("from_name").value = "";
    document.getElementById("id01").style.display = "none";
  });
