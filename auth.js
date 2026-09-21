// Cập nhật logic
function login(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    }
    if (!username || username.trim() === '') {
        throw new Error('Tài khoản không được để trống');
    }
    return false;
}

module.exports = login;
