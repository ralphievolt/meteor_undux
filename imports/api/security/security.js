import { Endorsements } from "/imports/api/endorsements/collection.js";

Endorsements.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});
Endorsements.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
});
