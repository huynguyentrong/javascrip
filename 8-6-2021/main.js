document.getElementById("demo").onclick = function (e) {
    e.preventDefault(); 
    var name = document.getElementById("name").value;
    var tongthunhap = document.getElementById("tongthunhap").value;
    var songuoiphuthuoc = document.getElementById("songuoiphuthuoc").value;
    var tongThuNhapPhaiChiuThue = tongThuNhapChiuThue(tongthunhap,songuoiphuthuoc);
    console.log(tongThuNhapPhaiChiuThue);
    var thueThuNhap = sotienthuephaidong(tongThuNhapPhaiChiuThue,tongthunhap);
    console.log(thueThuNhap);
    document.getElementById("btnfooter").innerHTML = " Số Tiền: " + name + " phải đóng: " +  thueThuNhap +"Triệu VNĐ"; 
}

function tongThuNhapChiuThue(tongthunhap,songuoiphuthuc){
    return tongthunhap - 4 - (songuoiphuthuc*1.6);
}
function sotienthuephaidong(tongThuNhapChiuThue,tongthunhap){
    var thue = 0;
    if(tongThuNhapChiuThue > 0 && tongThuNhapChiuThue <=60  ){
               return thue = tongthunhap * 0.05;
            }else if(tongThuNhapChiuThue > 60 && tongThuNhapChiuThue <= 120){
                return thue = tongthunhap * 0.1;
            }else if(tongThuNhapChiuThue >120 && tongThuNhapChiuThue <=216){
                return thue = tongthunhap * 0.15;
            }else if(tongThuNhapChiuThue >216 && tongThuNhapChiuThue <=384){
                return thue = tongthunhap * 0.2;
            }else if(tongThuNhapChiuThue >384 && tongThuNhapChiuThue <=624){
                return thue =tongthunhap * 0.25;
            }else if(tongThuNhapChiuThue >624 && tongThuNhapChiuThue <=960){
                return thue =tongthunhap * 0.3;
            }else if(tongThuNhapChiuThue > 960){
               return thue = tongthunhap * 0.35;
            }else{
                alert("vui lòng nhập lại");
            }
            return thue;
 }   

 function tongDiem(diemVan, diemToan, diemLy, khuVuc, doiTuong) {
    return diemVan + diemToan + diemLy + khuVuc + doiTuong;
  }
  function ketQua(diemVan, diemToan, diemLy, diemChuan, khuVuc, doiTuong) {
    if (
      diemChuan <= tongDiem(diemVan, diemToan, diemLy, khuVuc, doiTuong) &&
      diemVan > 0 &&
      diemToan > 0 &&
      diemLy > 0
    ) {
      return "đậu";
    } else {
      return "rớt";
    }
  }
  document.getElementById("btnTinhTien").onclick = function (event) {
    event.preventDefault();
    var diemChuan = document.getElementById("txtDiemChuan").value;
    var diemVan = document.getElementById("txtDiemVan").value;
    diemVan = parseFloat(diemVan);
    var diemToan = document.getElementById("txtDiemToan").value;
    diemToan = parseFloat(diemToan);
    var diemLy = document.getElementById("txtDiemLy").value;
    diemLy = parseFloat(diemLy);
    var khuVuc = document.getElementById("khuVuc").value;
    khuVuc = parseFloat(khuVuc);
    var doiTuong = document.getElementById("doiTuong").value;
    doiTuong = parseFloat(doiTuong);
    var tongdiem = tongDiem(diemVan, diemToan, diemLy, khuVuc, doiTuong);
  
    var info = "<div>Tổng Điểm :" + tongdiem + "</div>";
    info +=
      "<div> Kết Quả Cuối :" +
      ketQua(diemVan, diemToan, diemLy, diemChuan, khuVuc, doiTuong) +
      "</div>";
    document.getElementById("footercard").innerHTML = info;
  };
  
  Lân đã gửi Hôm nay lúc 23:45
  const phiHoaDonNhaDan = 4.5;
  const phiHoaDonDoanhNghiep = 15;
  const phiDiChVuNhaDan = 20.5;
  const phiDiChVuDoanhNghiep = 75;
  const kenhCaoCapNhaDan = 7.5;
  const kenhCaoCapDoanhNghiep = 50;
  // var ketNoi =
  var tongTien = 0;
  function hoaDonNhaDan(kenhCaoCap) {
    if (kenhCaoCap >= 1) {
      tongTien =
        kenhCaoCap * kenhCaoCapNhaDan + phiHoaDonNhaDan + phiDiChVuNhaDan;
    } else {
      tongTien = 0;
    }
  }
  function hoaDonDoanhNghiep(kenhCaoCap, ketNoi) {
    if (ketNoi > 10 && kenhCaoCap > 0) {
      tongTien =
        phiHoaDonDoanhNghiep +
        phiDiChVuDoanhNghiep +
        kenhCaoCapDoanhNghiep * kenhCaoCap +
        (ketNoi - 10) * 5;
    } else if (ketNoi < 10 && kenhCaoCap > 0) {
      tongTien =
        phiHoaDonDoanhNghiep +
        phiDiChVuDoanhNghiep +
        kenhCaoCapDoanhNghiep * kenhCaoCap;
    }
  }
  function chonLoaiHinh() {
    var loaiHinh = document.getElementById("loaiHinh").value;
  
    if (loaiHinh == 1) {
      return "nhaDan";
    } else if (loaiHinh == 2) {
      return "doanhNghiep";
    }
  }
  document.getElementById("btnTinhTienCap").onclick = function (event) {
    event.preventDefault();
    var maKhachHang = document.getElementById("txtMa").value;
    var soKetNoi = document.getElementById("txtSoKetNoi").value;
    var kenhCaoCap = document.getElementById("txtSoKenhDangKy").value;
    switch (chonLoaiHinh()) {
      case "nhaDan":
        hoaDonNhaDan(kenhCaoCap);
        break;
      case "doanhNghiep":
        hoaDonDoanhNghiep(kenhCaoCap, soKetNoi);
        break;
    }
  
    var info = "<div>Tên :" + maKhachHang + "</div>";
    info += "<div> Tổng thuế phải trả :" + tongTien + "USD </div>";
    document.getElementById("footercard3").innerHTML = info;
  };
