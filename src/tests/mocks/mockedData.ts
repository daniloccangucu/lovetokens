export const mockUsers = [
  {
    _id: {
      $oid: "65e86845abbaa8adc1af497d",
    },
    username: "usertest",
    email: "user@test.com",
    password: "$2b$10$wVcZuG.PuBVgGH/BPZmUJe57BrPdZon3XESQOr250yIiuw9USD30y",
    role: "user",
    joinedDate: "06.03.2024",
    affectionList: [
      {
        $oid: "65e86846abbaa8adc1af497f",
      },
    ],
    __v: 1,
  },
  {
    _id: {
      $oid: "65e8f45d11394de27b57d087",
    },
    username: "heartyheart",
    email: "heart@gmail.com",
    password: "$2b$10$FnDUV4oD/jevcpOenrqA9OLq3prNaHuaViC63qo.gHcFDJ1.lmUmy",
    role: "user",
    joinedDate: "06.03.2024",
    affectionList: [
      {
        $oid: "65e8f45d11394de27b57d089",
      },
    ],
    __v: 1,
  },
];

export const mockAffectionList = {
  _id: {
    $oid: "65e081c55bdb6ebcef1fd1cc",
  },
  user: {
    $oid: "65dc6975979ad511945dc58e",
  },
  __v: 296,
  loveTokens: [
    {
      $oid: "65cb83333ef6388c7b785979",
    },
    {
      $oid: "65cb83313ef6388c7b785974",
    },
    {
      $oid: "65cb832a3ef6388c7b78596c",
    },
    {
      $oid: "65cb83303ef6388c7b785972",
    },
  ],
};

export const mockBaseUserUrl = "http://lovetokens.com/userApi";
export const mockBaseAffectionListUrl =
  "http://lovetokens.com/AffectionListApi";

export const mockToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVlOWJkMDIxMTM5NGRlMjdiNTdkMjcxIiwidXNlcm5hbWUiOiJkYW5yMHgiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDk4ODkxOTIsImV4cCI6MTcwOTk3NTU5Mn0.RzNC-jwU62wLIC2HzQcGUbgivQmsQziPfPpTIUApCZU";
