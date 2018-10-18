import { Endorsements } from "/imports/api/endorsements/collection.js";

// Meteor.publish("EndorsementsList", function() {
//   const data = Endorsements.find();
//   if (data) return data;
//   return self.ready();
// });

Meteor.publish("EndorsementsList", function(endorsDate) {
  const self = this;

  let startD = new Date(endorsDate);
  let endD = new Date(endorsDate);

  startD.setHours(0, 0, 0);
  endD.setHours(23, 59, 59);

  const data = Endorsements.find({
    created: {
      $gte: startD,
      $lte: endD
    }
  });
  if (data) return data;
  return self.ready();
});
