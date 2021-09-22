use('erp');

db.clientes.aggregate(
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            {
              $subtract: [
                "$$NOW",
                "$dataNascimento",
              ],
            },
            365 * 24 * 60 * 60 * 1000,
          ],
        }
      },
    },
  },
  {
    $match: {
      idade: {
        $gte: 18,
        $lte: 25,
      },
    },
  },
  {
    $count: "clientes",
  },
);
