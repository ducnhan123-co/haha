// Lấy các phần tử từ DOM
const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

function checkEmpty(input) {
    if (input.value.trim() === "") {
        input.parentElement.classList.add("error");
        input.parentElement.querySelector("small").innerText = "Không được để trống";
        return false; // Trả về false nếu có lỗi
    } else {
        input.parentElement.classList.remove("error");
        input.parentElement.querySelector("small").innerText = "";
        return true;
    }
}

function checkEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (input.value.trim() !== "" && !emailRegex.test(input.value.trim())) {
        input.parentElement.classList.add("error");
        input.parentElement.querySelector("small").innerHTML = "Email không hợp lệ";
        return false;
    } else {
        input.parentElement.classList.remove("error");
        input.parentElement.querySelector("small").innerHTML = "";
        return true;
    }
}

function checkUsernameLength(input) {
    if (input.value.trim().length < 3) {
        input.parentElement.classList.add("error");
        input.parentElement.querySelector("small").innerText = "Tên đăng nhập phải có ít nhất 3 ký tự";
        return false;
    } else {
        input.parentElement.classList.remove("error");
        input.parentElement.querySelector("small").innerText = "";
        return true;
    }
}

function checkEmailLength(input) {
    if (input.value.trim().length < 3) {
        input.parentElement.classList.add("error");
        input.parentElement.querySelector("small").innerText = "Tên email phải có ít nhất 3 ký tự + @gmail.com";
        return false;
    } else {
        input.parentElement.classList.remove("error");
        input.parentElement.querySelector("small").innerText = "";
        return true;
    }
}

function checkPassWordLength(input) {
    if (input.value.trim().length < 6) {
        input.parentElement.classList.add("error");
        input.parentElement.querySelector("small").innerText = "Mật khẩu phải có độ dài lớn hơn 6 chữ cái";
        return false;
    } else {
        input.parentElement.classList.remove("error");
        input.parentElement.querySelector("small").innerText = "";
        return true;
    }
}

function confirmCheckPassWord(input) {
    if (input.value.trim().length !== password.value.trim().length) {
        input.parentElement.classList.add("error");
        input.parentElement.querySelector("small").innerText = "Mật khẩu không khớp";
        return false;
    } else {
        let isMatch = true;
        for (let i = 0; i < input.value.length; i++) {
            if (input.value[i] !== password.value[i]) {
                isMatch = false;
                break;
            }
        }
        if (!isMatch) {
            input.parentElement.classList.add("error");
            input.parentElement.querySelector("small").innerText = "Mật khẩu không khớp (sai mật khẩu)";
            return false;
        } else {
            input.parentElement.classList.remove("error");
            input.parentElement.querySelector("small").innerText = "";
            return true;
        }
    }
}

// Thêm sự kiện submit cho form
form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Dùng biến `isFormValid` để kiểm tra xem tất cả các trường đều hợp lệ hay không
    let isFormValid = true;

    // Kiểm tra từng trường nhập liệu
    isFormValid &= checkEmpty(username);
    isFormValid &= checkEmpty(password);
    isFormValid &= checkEmpty(confirmPassword);
    isFormValid &= checkEmpty(email);
    isFormValid &= checkEmail(email);
    isFormValid &= checkUsernameLength(username);
    isFormValid &= checkEmailLength(email);
    isFormValid &= checkPassWordLength(password);
    isFormValid &= confirmCheckPassWord(confirmPassword);

    // Kiểm tra biến `isFormValid`, nếu tất cả các trường hợp đều hợp lệ thì báo thành công
    if (isFormValid) {
        alert("Form hợp lệ");
        window.location.href = "hello.html"; // Chuyển đến trang mới
    }
});
