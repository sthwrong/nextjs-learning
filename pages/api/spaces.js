// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    { id: 1, name: "My space in Hanoi" },
    { id: 2, name: "Bac giang space" },
  ]);
};
