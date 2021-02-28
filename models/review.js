module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "reviews",
    {
      //Giving the Reviewer model a name of type STRING
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
