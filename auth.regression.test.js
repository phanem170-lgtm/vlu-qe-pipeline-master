const login = require('./auth');

describe('Regression Test: Các trường hợp ngoại lệ đăng nhập', () => {
    test('Đăng nhập THẤT BẠI khi sai mật khẩu', () => {
        expect(login('admin', '9999')).toBe(false);
    });

    test('Đăng nhập THẤT BẠI khi sai tên tài khoản', () => {
        expect(login('khachhang', '123')).toBe(false);
    });

    test('Báo lỗi khi để trống tên tài khoản', () => {
        expect(() => login('', '123')).toThrow('Tài khoản không được để trống');
    });
});
