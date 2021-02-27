module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      //Giving the Reviewer model a name of type STRING
      name: DataTypes.STRING,
      rate: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );

  return Review;
};
