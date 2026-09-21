const login = require('./auth');

test('Smoke Test: Đăng nhập THÀNH CÔNG với đúng tài khoản và mật khẩu', () => {
    expect(login('admin', '123')).toBe(true);
});
