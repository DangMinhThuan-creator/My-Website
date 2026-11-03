/* =========================================================
   PHẦN 3: JavaScript cơ bản
   ========================================================= */

// 1. Mảng object dữ liệu tĩnh: danh sách kỹ năng
const skills = [
  { ten: 'HTML5', mucDo: 90 },
  { ten: 'CSS3 / SCSS', mucDo: 80 },
  { ten: 'JavaScript', mucDo: 70 },
  { ten: 'Git', mucDo: 65 },
  { ten: 'Responsive Design', mucDo: 85 }
];

// 2. Tạo DOM từ mảng (arrow function + map), không viết cứng trong HTML
const skillList = document.querySelector('#skill-list');

const renderSkills = (list) => {
  skillList.innerHTML = '';                       // xoá nội dung cũ
  list.map(({ ten, mucDo }) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${ten}</strong> - ${mucDo}%
      <div class="bar"><span style="width:${mucDo}%"></span></div>`;
    return li;
  }).forEach(li => skillList.appendChild(li));
};

renderSkills(skills);

// Dùng filter: chỉ hiện kỹ năng có mức độ >= 80
const btnTop = document.querySelector('#btn-top-skills');
let onlyTop = false;
btnTop.addEventListener('click', () => {
  onlyTop = !onlyTop;
  btnTop.classList.toggle('active', onlyTop);
  renderSkills(onlyTop ? skills.filter(s => s.mucDo >= 80) : skills);
});

// 3. Xử lý submit form: validate bằng JS (bổ sung cho HTML5)
const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

const setError = (field, msg) => {
  document.querySelector(`#err-${field}`).textContent = msg;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();                              // chặn reload trang
  formStatus.textContent = '';
  ['name', 'email', 'phone', 'birthday', 'message'].forEach(f => setError(f, ''));

  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const phone = form.elements['phone'].value.trim();
  const birthday = form.elements['birthday'].value;
  const message = form.elements['message'].value.trim();
  let valid = true;

  if (name.length < 2) {
    setError('name', 'Họ tên tối thiểu 2 ký tự'); valid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError('email', 'Email không hợp lệ'); valid = false;
  }
  if (!/^0\d{9}$/.test(phone)) {
    setError('phone', 'SĐT gồm 10 chữ số, bắt đầu bằng 0'); valid = false;
  }
  // Ngày sinh không được ở tương lai
  if (!birthday || new Date(birthday) > new Date()) {
    setError('birthday', 'Ngày sinh không hợp lệ'); valid = false;
  }
  if (message.length < 10) {
    setError('message', 'Nội dung tối thiểu 10 ký tự'); valid = false;
  }

  if (valid) {
    formStatus.textContent = `Cảm ơn ${name}, mình đã nhận được tin nhắn!`;
    form.reset();
  }
});