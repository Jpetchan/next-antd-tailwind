const handleError = (code: string): string => {
  let message = "ไม่สามารถทำรายการได้ กรุณาติดต่อแอดมิน";
  switch (code) {
    case "LG003":
      message = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
      break;
    case "UA001":
      message = "USERNAME ถูกใข้งานแล้ว";
      break;
    case "UA002":
      message = "ไม่พบสิทธิ์การใช้งาน";
      break;
    case "U001":
      message = "ไม่พบ Unit";
      break;
    case "U002":
      message = "UNIT อยู่ในระบบแล้ว";
      break;
    case "CUS001":
      message = "กรุณาระบุข้อมูลลูกค้าให้ครบถ้วน";
      break;
    case "CUS002":
      message = "มีลูกค้าอยู่ในระบบแล้ว";
      break;
    case "CUS003":
      message =
        "ไม่มีสามารถนำเข้าลูกค้าได้ มีลูกค้าอยู่ในระบบแล้ว กรุณาตรวจสอบข้อมูล";
      break;
    case "CUS004":
      message = "ไม่พบลูกค้าอยู่ในระบบแล้ว กรุณาตรวจสอบข้อมูล";
      break;
    case "P001":
      message = "ไม่สามารถทำรายการได้ กรุณาระบุข้อมูลสินค้าให้ครบถ้วน";
      break;
    case "P002":
      message = "รหัสสินค้า ถูกใข้งานแล้ว";
      break;
    case "P003":
      message =
        "ไม่มีสามารถนำเข้าสินค้าได้ มีสินค้าบางรายการอยู่ในระบบแล้ว กรุณาตรวจสอบข้อมูล";
      break;
    case "LT001":
      message = "ไม่สามารถทำรายการได้ กรุณาระบุข้อมูลสต็อกให้ครบถ้วน";
      break;
    case "LT002":
      message = "รหัส LOT ถูกใข้งานแล้ว";
      break;
    case "LT003":
      message =
        "ไม่สามารถนำเข้าสต็อกได้ มีสต็อกบางรายการอยู่ในระบบแล้ว กรุณาตรวจสอบข้อมูล";
      break;
    case "LT004":
      message =
        "ไม่สามารถทำรายการได้ ไม่พบสต็อกบางรายการอยู่ในระบบ กรุณาตรวจสอบข้อมูล";
      break;
    case "OR002":
      message = "ไม่สามารถยกเลิกออเดอร์ได้ กรุณาตรวจสอบข้อมูล";
      break;
    case "OR003":
      message = "ไม่สามารถอัพเดทออเดอร์ได้ เลข Invoice ซ้ำในระบบ";
      break;
    case "CO002":
      message = "ไม่สามารถทำรายการได้ ไม่พบ เลขที่ Invoice บางรายการ";
      break;
    default:
      break;
  }
  return message;
};

export { handleError };
