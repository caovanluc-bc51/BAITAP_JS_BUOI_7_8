//lẤY DANH SÁCH SỐ NGƯỜI DÙNG NHẬP VÀO
var listNumber = [];
function layGiaTri() {
  var giaTri = document.getElementById("giaTriNhapVao").value * 1;
  var danhSachGiaTri = listNumber.push(giaTri);
  document.getElementById("danhSachGiaTri").innerHTML =
    "Danh Sách Giá Trị Nhập Vào: " + listNumber;
}
//1. TỔNG CÁC SỐ DƯƠNG TRONG MẢNG
function tongCacSoDuong(){
    var tongCacSoDuong = 0;
    if(listNumber.length === 0){
        alert('VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!');
        return;
    }
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0){
            tongCacSoDuong+=listNumber[i];
        }
    }
    document.getElementById('tongSoDuong').innerHTML = 'Tổng Các Số Dương Là: ' + tongCacSoDuong;

}
//2. ĐẾM CÓ BAO NHIÊU SỐ DƯƠNG TRONG MẢNG
function demCacSoDuong(){
    var demCacSoDuong = 0;
    if(listNumber.length === 0){
        alert('VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!');
        return;
    }
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0){
            demCacSoDuong++;
        }
    }
    document.getElementById('demSoDuong').innerHTML = 'Có ' + demCacSoDuong + ' Số Dương';
}

//3. TÌM SỐ NHỎ NHẤT TRONG MẢNG
function soNhoNhat(){
    var soNhoNhat = listNumber[0];
    for(var i = 1; i < listNumber.length; i++){
        if(listNumber[i] < soNhoNhat){
            soNhoNhat = listNumber[i];
        }
    }
    document.getElementById('soNhoNhat').innerHTML = 'Số Nhỏ Nhất Là: ' + soNhoNhat;
}

//4. TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
function soDuongNhoNhat(){
    
}