# E2E 測試 Cypress (End to End Testing Cypress)

## 測試種類

### 單元測試 (Unit testing)

- 測試程式碼含有邏輯的最小單位( method, function, class, 行為)

### 整合測試 (Integration testing)

- 測試模組跟模組之間的互動正常，跟單元測試最大的差別在於有無與外部服務(如時間、Session、Cookie、資料庫，硬體，網路等等不受程式控制的因素)有相依

### 端對端測試 (End-to-end testing)

- 端對端分別指的是，使用者端跟真實系統端

## 為什麼要使用 E2E 測試?

- 單元測試與整合測試都無法確保程式最終的執行結果是客戶真正要的
- 以真實、完整的系統進行測試

## 使用 Cypress 目的

- 模擬使用者直接使用產品
- 快速且自動化
- 去除人工測試時的失誤

### Cypress 第一章

  ```bash
  npm init
  ***
  npm install cypress
  ```
  package.json
  ```
  "scripts": {
    - "test": "echo \"Error: no test specified\" && exit 1",
    + "cy:open": "cypress open",
    + "cy:run": "cypress run"
  },
  ```
