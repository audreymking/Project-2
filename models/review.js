const { DATE } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      client_comment: DataTypes.STRING,
      client_name: DataTypes.STRING,
      event_id: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  return Review;
};
