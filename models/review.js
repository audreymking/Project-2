module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      party_name: DataTypes.STRING,
      client_comment: DataTypes.STRING,
      client_rate: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  return Review;
};
