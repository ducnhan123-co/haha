// Lấy các phần tử từ DOM
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let form = document.querySelector("form");

// Hàm hiển thị lỗi
function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.add("error");
    small.innerText = message;
}

// Hàm hiển thị thành công
function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.remove("error");
    small.innerText = "";
}

// Kiểm tra trường rỗng
function checkEmptyError(listInput) {
    let isEmpty = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmpty = true;
            showError(input, 'Không được để trống');
        } else {
            showSuccess(input);
        }
    });
    return isEmpty;
}

// Kiểm tra định dạng email
function checkEmailError(input) {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    input.value = input.value.trim();
    if (!regexEmail.test(input.value)) {
        showError(input, 'Email không hợp lệ');
        return true;
    } else {
        showSuccess(input);
        return false;
    }
}

// Kiểm tra độ dài của trường nhập
function checkLengthError(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Không được quá ${max} ký tự`);
        return true;
    }
    showSuccess(input);
    return false;
}

// Kiểm tra xác nhận mật khẩu
function checkMatchPassword(passwordInput, confirmPasswordInput) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, "Mật khẩu không trùng khớp");
        return true;
    }
    showSuccess(confirmPasswordInput);
    return false;
}

// Lắng nghe sự kiện submit
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Kiểm tra lỗi
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUserNameLengthError = checkLengthError(username, 3, 10);
    let isPasswordLengthError = checkLengthError(password, 6, 20);
    let isMatchError = checkMatchPassword(password, confirmPassword);

    // Chỉ submit form nếu không có lỗi
    if (!isEmptyError && !isEmailError && !isUserNameLengthError && !isPasswordLengthError && !isMatchError) {
        // Thực hiện hành động khi form hợp lệ, ví dụ gửi form hoặc thông báo
        alert("Form hợp lệ và đã được gửi!");
    }
});
