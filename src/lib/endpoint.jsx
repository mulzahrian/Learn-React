//EndPoint list
export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password/",
    SEND_OTP: "/auth/verify-otp",
    SESSION: "/auth/:id",
  },
  USERS: {
    PROFILE: "/auth/profile/",
    ADD: "/auth/register/",
    GETALL: "/users/",
    GETBYID: "/users/:id",
    UPDATE: "/users/:id",
    DELETE: "/users/:id",
    CHANGE_PASSWORD: "/auth/change-password/",
  },
  ROLE: {
    ADD: "/auth/insert-user-role/",
    GETALL: "/roles/",
    GETBYID: "/roles/:id",
    UPDATE: "/roles/:id",
    DELETE: "/roles/:id",
  },
  ORDER: {
    GETALL: "/orders/",
    UPLOAD: "/orders/upload", // for upload document
    DOWNLOAD: "/orders/download/pdf/eudr001-ordersDetail.mrt", // for download document
    SUMMARY: "/orders/summary",
    SUPPORT: "/orders/support/upload", // for support files and geolocation
    ORDER_DOCUMENT: "/orders/documents", // for order documents
    ORDER_SUPPORT_DOCUMENT: "/orders/support-documents", // for support documents
  },
  DIVISION: {
    GETALL: "/division/",
    ADD: "/division/",
    GETBYID: "/division/:id",
    UPDATE: "/division/:id",
  },
  MILL: {
    GETALL: "/mill/",
    ADD: "/mill/",
    GETBYID: "/mill/:id",
    UPDATE: "/mill/:id",
  },
  TRADING: {
    GETALL: "/trading/",
    ADD: "/trading/",
    GETBYID: "/trading/:id",
    UPDATE: "/trading/:id",
  },
};
