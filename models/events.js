module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    //Giving the Reviewer model a name of type STRING
    event_name: DataTypes.STRING,
    event_location: DataTypes.STRING
  });

  return Event;
};
