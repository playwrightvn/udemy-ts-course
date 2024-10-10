# Bài 1
- Mở Postman
- Đăng nhập
- Tạo request với Postman
- Lưu request lại để dùng lại

# Bài 2
- Import request
- Chạy request trong collection
- Sử dụng variable

# Bài 3: Thực hành
Thực hành tạo các collection và API sau:
- Tạo collection: 
    - **name**=`Free APIs`
    - **description**=`Free API, không cần xác thực đăng nhập`
- Tạo collection: 
    - **name**=`Conduit APIs`
    - **description**=`API cần xác thực đăng nhập`
- Tạo API và lưu chúng vào collection `Free APIs`:
    - API 1:
        - **method**=`GET`
        - **url**=`https://api.ipify.org/?format=json`
        - **name**=`Kiểm tra địa chỉ IP của bạn`
    - API 2:
        - **method**=`GET`
        - **url**=`https://api.nationalize.io/?name={tên_bạn}`
        - **name**=`Dự đoán quốc gia theo tên`
    - API 3:
        - **method**=`GET`
        - **url**=`https://api.coindesk.com/v1/bpi/currentprice.json`
        - **name**=`Giá bitcoin hiện tại`
- Tạo API và lưu chúng vào collection `Conduit APIs`:
    - **method**=`POST`
    - **url**=`https://conduit-api.bondaracademy.com/api/users/login`
    - **body**=`{"user":{"email":"teovn84@gmail.com","password":"teo@123"}}`
    - **name**=`login`

# Bài 4: Random value
- Sử dụng biến {{random...}}

# Bài 5: Pre-request script
- Pre-request script sử dụng để set giá trị 