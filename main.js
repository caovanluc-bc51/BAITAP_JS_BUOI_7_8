//lẤY DANH SÁCH SỐ NGƯỜI DÙNG NHẬP VÀO
var listNumber = [];
function layGiaTri() {
  var giaTri = document.getElementById("giaTriNhapVao").value * 1;
  listNumber.push(giaTri);
  document.getElementById("danhSachGiaTri").innerHTML =
    "Danh Sách Giá Trị Nhập Vào: " + listNumber;
}
//1. TỔNG CÁC SỐ DƯƠNG TRONG MẢNG
function tongCacSoDuong() {
  var tongCacSoDuong = 0;
  if (listNumber.length === 0) {
    alert("VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      tongCacSoDuong += listNumber[i];
    }
  }
  document.getElementById("tongSoDuong").innerHTML =
    "Tổng Các Số Dương Là: " + tongCacSoDuong;
}
//2. ĐẾM CÓ BAO NHIÊU SỐ DƯƠNG TRONG MẢNG
function demCacSoDuong() {
  var demCacSoDuong = 0;
  if (listNumber.length === 0) {
    alert("VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      demCacSoDuong++;
    }
  }
  document.getElementById("demSoDuong").innerHTML =
    "Có " + demCacSoDuong + " Số Dương";
}

//3. TÌM SỐ NHỎ NHẤT TRONG MẢNG
function soNhoNhat() {
  if (listNumber.length === 0) {
    alert("VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!");
    return;
  }
  var soNhoNhat = listNumber[0];
  for (var i = 1; i < listNumber.length; i++) {
    if (listNumber[i] < soNhoNhat) {
      soNhoNhat = listNumber[i];
    }
  }
  document.getElementById("soNhoNhat").innerHTML =
    "Số Nhỏ Nhất Là: " + soNhoNhat;
}

//4. TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
var soDuong = [];
function soDuongNhoNhat() {
  if (listNumber.length === 0) {
    alert("VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      soDuong.push(listNumber[i]);
    }
  }
  if (soDuong.length === 0) {
    document.getElementById("soDuongNhoNhat").innerHTML = "Không Có Số Dương Trong Mảng";
    return;
  }
  var soDuongNhoNhat = soDuong[0];
  for (var j = 1; j < soDuong.length; j++) {
    if (soDuong[j] < soDuongNhoNhat) {
      soDuongNhoNhat = soDuong[j];
    }
  }
  document.getElementById("soDuongNhoNhat").innerHTML =
    "Số Dương Nhỏ Nhất Là: " + soDuongNhoNhat;
}

//5. TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG
var soChan = [];
function soChanCuoiCung() {
  if (listNumber.length === 0) {
    alert("VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 === 0) {
      soChan.push(listNumber[i]);
    }
  }
  if (soChan.length === 0) {
    document.getElementById("soChanCuoiCung").innerHTML = -1;
  } else {
    document.getElementById("soChanCuoiCung").innerHTML =
      "Số Chẵn Cuối Cùng Là: " + soChan.pop();
  }
}

//6. ĐỔI CHỖ 2 VỊ TRÍ - DONE

function doiViTriSo() {
  var doiViTri = [];
  if (listNumber.length === 0) {
    alert("VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!");
    return;
  }
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;
  var temp = listNumber[viTri1];
  listNumber[viTri1] = listNumber[viTri2];
  listNumber[viTri2] = temp;
  for (var i = 0; i < listNumber.length; i++) {
    doiViTri.push(listNumber[i]);
  }
  document.getElementById("doiViTriSo").innerHTML = doiViTri;
}

//7. SẮP XẾP TĂNG DẦN - DONE
function sapXepTangDan() {
  if (listNumber.length === 0) {
    alert("VUI VÀO NHẬP VÀO MỘT SỐ BẤT KÌ!");
    return;
  }
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        //hoán vị mượn biến tạm
        var temp = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = temp;
      }
    }
  }
  document.getElementById("sapXepTangDan").innerHTML =
    "Danh Sách Giá Trị Sau Khi Sắp Xếp Là: " + listNumber;
}

//8. SỐ NGUYÊN TỐ ĐẦU TIÊN - DONE
function soNguyenToDauTien() {
  var soLonHon1 = [];
  if (listNumber.length === 0) {
    alert("VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 1) {
      soLonHon1.push(listNumber[i]);
    }
  }
  if (soLonHon1.length === 0) {
    document.getElementById("soNguyenToDauTien").innerHTML =
      -1;
    return;
  }
  var soNguyenToDauTien = [];
  soNguyenToDauTien = soLonHon1.filter((number) => {
    for (var j = 2; j < number; j++) {
      if (number % j === 0) return false;
    }
    return number;
  });
  if (soNguyenToDauTien.length === 0) {
    document.getElementById("soNguyenToDauTien").innerHTML =
      -1;
  } else {
    document.getElementById("soNguyenToDauTien").innerHTML =
      "Số Nguyên Tố Đầu Tiên Trong Mảng Là: " + soNguyenToDauTien[0];
  }
}

//9. ĐẾM SỐ NGUYÊN - DONE
var danhSachNhapThem = [];
var danhSach2Mang = listNumber;
function nhapThemSo() {
  var giaTriNhapThem = document.getElementById("nhapThemSo").value * 1;
  danhSachNhapThem.push(giaTriNhapThem);
  document.getElementById("giaTriNhapThem").innerHTML =
    "Danh Sách Giá Trị Nhập Thêm Là: " + danhSachNhapThem;
  danhSach2Mang = listNumber.concat(danhSachNhapThem);
  document.getElementById("nhapThemSoVaoMang").innerHTML =
    "Danh Sách Giá Trị Nhập Vào Của Cả 2 Mảng là: " + danhSach2Mang;
}
function baoNhieuSoNguyen() {
  if (listNumber.length === 0 && danhSachNhapThem.length === 0) {
    alert("VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!");
    return;
  }
  var count = 0;
  for (var i = 0; i < danhSach2Mang.length; i++) {
    if (Number.isInteger(danhSach2Mang[i])) {
      count++;
    }
  }
  document.getElementById("baoNhieuSoNguyen").innerHTML =
    "Có " + count + " Số Nguyên";
}

// //10. SO SÁNH SỐ ÂM VÀ SỐ DƯƠNG - DONE
function soSanhSoAmDuong() {
  var countAm = 0;
  var countDuong = 0;
  if (listNumber.length === 0) {
    alert("VUI LÒNG NHẬP VÀO MỘT SỐ BẤT KÌ!");
    return;
  }
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      countDuong++;
    } else if (listNumber[i] < 0) {
      countAm++;
    }
  }
  if (countDuong > countAm) {
    document.getElementById("soSanhSoAmDuong").innerHTML = "Số Dương > Số Âm";
  } else if (countAm > countDuong) {
    document.getElementById("soSanhSoAmDuong").innerHTML = "Số Âm > Số Dương";
  } else {
    document.getElementById("soSanhSoAmDuong").innerHTML = "Số Âm = Số Dương";
  }
}
