module.exports = (sequelize, DataTypes) => {
  const Reviewer = sequelize.define("Reviewer", {
    //Giving the Reviewer model a name of type STRING
    name: DataTypes.STRING
  });

  Reviewer.associate = models => {
    // Associating Reviewer with Reviews
    Reviewer.hasMany(models.Review, {
    onDelete: "cascade"
    });
  };
  return Reviewer;
}