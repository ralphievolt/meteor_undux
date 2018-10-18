import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

import { Endorsements } from "/imports/api/endorsements/collection.js";
import TurnOverFeeds from "/imports/ui/pages/TurnOver-Feeds";
import Store from "/imports/api/store/store";

const TurnOverFeedsContainer = withTracker(props => {
  const handle = Meteor.subscribe(
    "EndorsementsList",
    props.store.get("calendarDate")
  );

  return {
    endorsementsLoading: !handle.ready(),
    endorsements: Endorsements.find().fetch()
  };
})(TurnOverFeeds);

export default Store.withStore(TurnOverFeedsContainer);
