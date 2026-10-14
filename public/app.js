const ADMIN_PASSWORD = "admin123";

const defaultApplications = [
  {
    id: 1,
    user: "Иванов Иван Иванович",
    room: "Конференц-зал «Альфа»",
    date: "15.10.2026",
    payment: "Очное посещение",
    status: "Новая",
  },
  {
    id: 2,
    user: "Петрова Анна Сергеевна",
    room: "Аудитория 305",
    date: "09.11.2026",
    payment: "СБП",
    status: "Мероприятие назначено",
  },
];

function getApplications() {
  return (
    JSON.parse(localStorage.getItem("applications")) || defaultApplications
  );
}

function saveApplications(applications) {
  localStorage.setItem("applications", JSON.stringify(applications));
}

function adminLogin() {
  const password = prompt("Введите пароль администратора:");

  if (password === ADMIN_PASSWORD) {
    sessionStorage.setItem("admin", "true");

    window.location.href = "admin.html";
  } else if (password !== null) {
    alert("Неверный пароль!");
  }
}

function checkAdmin() {
  if (sessionStorage.getItem("admin") !== "true") {
    const password = prompt(
      "Доступ только для администратора.\nВведите пароль:",
    );

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin", "true");
    } else {
      alert("Доступ запрещён.");
      window.location.href = "induh.html";
    }
  }
}

function adminLogout() {
  sessionStorage.removeItem("admin");

  window.location.href = "induh.html";
}

function getBadge(status) {
  switch (status) {
    case "Новая":
      return "bg-primary";

    case "Мероприятие назначено":
      return "bg-warning text-dark";

    case "Завершено":
      return "bg-success";

    default:
      return "bg-secondary";
  }
}
