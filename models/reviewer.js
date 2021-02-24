module.exports = (sequelize, DataTypes) => {
  const Reviewer = sequelize.define("Reviewer", {
    //Reviewer datatypes
    name: DataTypes.STRING
  });

  Reviewer.associate = models => {
    // Associating Reviewer with Reviews
    Reviewer.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };
  return Reviewer;
};
