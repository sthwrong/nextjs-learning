// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { id } = req.query;
  console.log(id);
  res.statusCode = 200;
  res.json({ id: 1, name: "My space in Hanoi" });
};
