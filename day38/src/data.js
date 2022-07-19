const users = [
  { name: "mario", premium: true },
  { name: "luigi", premium: false },
  { name: "yoshi", premium: true },
  { name: "toad", premium: true },
  { name: "peach", premium: false },
];

const getPremUser = (users) => {
  return users.filter((user) => user.premium);
};

export { getPremUser, users as default };
