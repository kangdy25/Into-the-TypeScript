// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  age: number;
};

let user1: User = {
  id: 1,
  name: "강동윤",
  nickname: "동불이",
  birth: "2001.05.25",
  age: 25,
};

let user2: User = {
  id: 2,
  name: "최하진",
  nickname: "철수",
  birth: "2003.09.09",
  age: 23,
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  Unitedstate: "us",
  UnitedKingdom: "uk",
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  Unitedstate: 840,
  UnitedKingdom: 826,
};
