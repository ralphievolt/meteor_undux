import { check } from "meteor/check";

import { Endorsements } from "/imports/api/endorsements/collection.js";

Meteor.methods({
  async "add.Endorsement"(endoObj) {
    check(endoObj, {
      endorsement: String,
      section: String,
      shift: Number
    });

    let endorsId;
    try {
      endoObj.created = new Date();
      endoObj.createdBy = "system";

      endorsId = await Endorsements.insert(endoObj);
    } catch (error) {
      throw new Meteor.Error(
        "oops",
        "something is wrong when saving your endorsement"
      );
    } finally {
      return endorsId;
    }
  }
});
