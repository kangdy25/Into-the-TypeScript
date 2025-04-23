// Object (객체)
let user: { id?: number; name: string } = {
  id: 1,
  name: "강동윤",
};

let dog: { name: string; color: string } = {
  name: "보리",
  color: "brown",
};

// Readonly 키워드는 값 변환을 방지한다.
let config: { readonly apiKey: string } = {
  apiKey: "My API Key",
};

// config.apiKey = "Hacked!!!";
