<?php
 // Sample DB connection (use your real credentials)
conn = new mysqli("localhost", "root", "", "users_db");

if (_SERVER["REQUEST_METHOD"] == "POST") {
  email =_POST['email'];
  password =_POST['password'];

  stmt =conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
  stmt->bind_param("ss",email, password);stmt->execute();
  result =stmt->get_result();

  if ($result->num_rows === 1) {
    echo "<script>alert('Login Successful'); window.location.href='dashboard.html';</script>";
  } else {
    echo "<script>
      alert('Account not found. Would you like to register?');
      window.location.href='register.html';
    </script>";
  }
}
?>