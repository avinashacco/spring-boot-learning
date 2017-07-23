(function (angular) {
  'use strict'

  angular
    .module('CiModule')
    .factory('ProductService', ProductService);

  ProductService.$inject = ['$http'];
  function ProductService($http) {

    var data = [
      {
        "id": "59705a345ee0198a36e30237",
        "index": 0,
        "guid": "3b668f71-d29a-47cd-a249-0726d16b229e",
        "isActive": true,
        "fundName": "CODAX",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a345c1ce689dc53402f",
        "index": 1,
        "guid": "ba49c52d-a141-4887-a081-e0bf0a8265ed",
        "isActive": true,
        "fundName": "SULTRAX",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34498121f92289a6cb",
        "index": 2,
        "guid": "2ad0993c-0ecc-4114-9807-05c552675d0f",
        "isActive": true,
        "fundName": "ETERNIS",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34d66a1a1f89687c0e",
        "index": 3,
        "guid": "b7b38af8-c57a-4e5f-90ca-40965e8068f6",
        "isActive": true,
        "fundName": "PROVIDCO",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34213d9460fb8612fa",
        "index": 4,
        "guid": "d6d00df0-76ab-4331-8713-c18656e7392a",
        "isActive": true,
        "fundName": "REMOTION",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34d59bb1fa081b843b",
        "index": 5,
        "guid": "55d4ab92-ee88-4709-8a7a-f2698e0b4e6a",
        "isActive": true,
        "fundName": "MUSANPOLY",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34adb3f95d31c26ff0",
        "index": 6,
        "guid": "c6749483-b679-4c8c-8ee9-8aac8c2d2790",
        "isActive": false,
        "fundName": "KRAGGLE",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34023744586229c6c9",
        "index": "XXXX",
        "guid": "41c3b3b1-8b6f-4c95-a55f-41b67cfd9831",
        "isActive": true,
        "fundName": "ASSITIA",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a345d804141f2491687",
        "index": 8,
        "guid": "667e9a8e-6110-4633-b5d5-8c0a3b422568",
        "isActive": false,
        "fundName": "BESTO",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34133dcf3da588651f",
        "index": 9,
        "guid": "cf22cf5b-a74e-470f-b7a7-23a5bbcdc2cb",
        "isActive": true,
        "fundName": "MARVANE",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a341b678ff31789543b",
        "index": 10,
        "guid": "e078b603-c522-4583-8f0e-01d118bbe84b",
        "isActive": true,
        "fundName": "COMVOY",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34ccdae2dfe57c1d0f",
        "index": 11,
        "guid": "5a8bb16e-1728-4a9e-95fe-84562c0174b7",
        "isActive": true,
        "fundName": "HALAP",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a348ba0b4bf1f47add1",
        "index": 12,
        "guid": "45110527-4e02-41d6-b1a1-7f7e5f242dec",
        "isActive": false,
        "fundName": "POLARAX",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34bf7519b74e6063af",
        "index": 13,
        "guid": "61c0f60d-2b80-4503-b163-39830305a257",
        "isActive": true,
        "fundName": "KIGGLE",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34a8baee5b329f52aa",
        "index": 14,
        "guid": "304ed329-54d7-4d24-9666-49bbf9b3f7b2",
        "isActive": false,
        "fundName": "ZOARERE",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34553de9263f47734d",
        "index": 15,
        "guid": "97c62fff-769c-474b-b7a5-c7b71ca7f570",
        "isActive": false,
        "fundName": "BIOTICA",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a341743f35a1687e141",
        "index": 16,
        "guid": "eec58c88-ae01-40e2-a0e0-d3e07a5fbf6b",
        "isActive": false,
        "fundName": "STEELTAB",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a340669f2d244e4a725",
        "index": 17,
        "guid": "c729e869-e044-4b4a-adfe-80d581974b61",
        "isActive": true,
        "fundName": "COGENTRY",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a349a2ef7c2efb07ff6",
        "index": 18,
        "guid": "825ea82c-6551-4dff-ae93-73fc118a084d",
        "isActive": false,
        "fundName": "AQUAZURE",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34f91572ce130d25ef",
        "index": 19,
        "guid": "1cb94b32-4a3b-4438-99a5-83b1084d59ee",
        "isActive": false,
        "fundName": "ASIMILINE",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34a85ea7545d738fb4",
        "index": 20,
        "guid": "d130920f-cebc-4542-b33a-75c0333283d8",
        "isActive": false,
        "fundName": "POSHOME",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34619133a6a09e433f",
        "index": 21,
        "guid": "61821030-c82f-4b1a-98b8-641fd8f0c788",
        "isActive": true,
        "fundName": "PYRAMAX",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34ec1ec622bc9afd64",
        "index": 22,
        "guid": "52a1d682-e7c2-4308-847c-51010eeff008",
        "isActive": false,
        "fundName": "EQUICOM",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a340423cb6f45f90f60",
        "index": 23,
        "guid": "c4eab250-7ff5-46b9-949f-bdceaf557321",
        "isActive": false,
        "fundName": "COMCUBINE",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a347c70667c2020e772",
        "index": 24,
        "guid": "2d14f28c-bf40-4f78-9da1-684f67567504",
        "isActive": true,
        "fundName": "DOGNOSIS",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34227ffc4480131058",
        "index": 25,
        "guid": "3570ef3a-aed7-4f9b-98c7-f7953c7e7313",
        "isActive": false,
        "fundName": "OVATION",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34841eddd698c23193",
        "index": 26,
        "guid": "889fd608-a4c4-4538-b396-699f3b4f3ff7",
        "isActive": false,
        "fundName": "NIKUDA",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34e1974a3e18c941c0",
        "index": 27,
        "guid": "b65b6906-aab0-41d0-8062-306feb3436e4",
        "isActive": false,
        "fundName": "ZILENCIO",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a3471c415bfa1350a2f",
        "index": 28,
        "guid": "16afe096-c42b-4129-a4ff-2ae24466a78d",
        "isActive": false,
        "fundName": "AUSTEX",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34c57f55f4450bfcd4",
        "index": 29,
        "guid": "816c5285-d14c-42eb-beb1-4fc56ac4c402",
        "isActive": false,
        "fundName": "APPLICA",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a348d3f7f2a9506d772",
        "index": 30,
        "guid": "2a5c01fd-a2be-428a-a91a-31a36e9fefee",
        "isActive": false,
        "fundName": "ZENCO",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a344a8539326d6e9548",
        "index": 31,
        "guid": "6ba90861-9d2f-48e1-a3cf-54267d245f28",
        "isActive": false,
        "fundName": "MAXEMIA",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34610824b961395c91",
        "index": 32,
        "guid": "e38dc5e5-1e6f-4603-8718-32a370a509b1",
        "isActive": true,
        "fundName": "ARTIQ",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a349a6075eb3fca7e92",
        "index": 33,
        "guid": "c4e2b7da-9f20-40d3-904f-dbf6cc1d2c72",
        "isActive": true,
        "fundName": "LUDAK",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a34810bbecb5193661a",
        "index": 34,
        "guid": "886968f3-ae7a-4bf4-92bc-9b7dec73c494",
        "isActive": true,
        "fundName": "COMTEXT",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a342b4ba7ea1a55d112",
        "index": 35,
        "guid": "2f4ded50-984f-432e-bdb9-5b9d79383535",
        "isActive": true,
        "fundName": "GRAINSPOT",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a342a6510cdd3c36b41",
        "index": 36,
        "guid": "7ab78b75-a347-432b-bc73-abf75c58e57a",
        "isActive": true,
        "fundName": "INSOURCE",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a343e515bebf0d738d5",
        "index": 37,
        "guid": "8e596713-ffe9-4468-9ca3-e23f14cc880f",
        "isActive": false,
        "fundName": "ASSISTIX",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      },
      {
        "id": "59705a342866324956cb2cbf",
        "index": 38,
        "guid": "66567fbe-150e-4ba9-a26a-2f757cfda1e7",
        "isActive": true,
        "fundName": "VENOFLEX",
        "isin": "XXXX",
        "ticker": "XXXX",
        "sedol": "XXXX"
      }
    ];

    return {
      getProducts: getProducts
    };

    function getProducts() {
      return data;
    }
  }
})(angular)