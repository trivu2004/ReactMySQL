const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

// Kết nối với MySQL
const db = mysql.createConnection({
  host: "localhost", // Sửa lại đúng 'localhost'
  user: "root", // Thay thế bằng tên người dùng MySQL của bạn
  password: "123456", // Thay thế bằng mật khẩu MySQL của bạn
  database: "demo", // Tên cơ sở dữ liệu MySQL
});

// Kiểm tra kết nối
db.connect((err) => {
  if (err) {
    console.error("Không thể kết nối đến MySQL:", err);
  } else {
    console.log("Đã kết nối thành công đến MySQL");
  }
});

// Endpoint mặc định
app.get("/", (req, res) => {
  return res.json("from backend side");
});

// Endpoint lấy danh sách người dùng từ cơ sở dữ liệu
app.get("/account", (req, res) => {
  const sql = "SELECT * FROM account";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Khởi chạy server
app.listen(8081, () => {
  console.log("Server đang lắng nghe trên cổng 8081");
});
