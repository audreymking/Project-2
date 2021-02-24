module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("Review", {
    //Review datatypes
    name: DataTypes.STRING,
    rate: DataTypes.INTEGER
  });

  Review.associate = models => {
    // Associating Reviewer with Reviews
    Review.belongsTo(models.Reviewer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Review;
};
