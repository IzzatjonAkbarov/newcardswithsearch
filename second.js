const Base_url = `https://api.escuelajs.co/api/v1/auth/login`;

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  e.preventDefault();
  //   email = form.emailValue.value;
  //   password = form.passwordValue.value;
  fetch(Base_url, {
    method: "POST",
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      console.log(data.statusText);
      go(data);
    })
    .catch((err) => {
      console.log(err.statusText);
    });
});
// john@mail.com
// changeme
function go(data) {
  if (data.status !== 401) {
    window.location.href = "./info.html";
    localStorage.setItem(
      "access_token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg"
    );
    localStorage.setItem(
      "refresh_token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjcyODAyMDI4fQ.P1_rB3hJ5afwiG4TWXLq6jOAcVJkvQZ2Z-ZZOnQ1dZw"
    );
  }
}
