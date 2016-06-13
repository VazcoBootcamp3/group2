import {Meteor} from 'meteor/meteor'

import Flatmates from '/imports/collections/Flatmates'

Meteor.methods({
  registration(login, password) {
    Flatmates.insert({
      "name": login,
      "owes": 0,
      "flat": "pierwsze mieszkanie",
      "password": password
    });
  },
  clearDebt(flatmateToClear) {
    Flatmates.update({"name": flatmateToClear.name}, {
      $set: {
        "owes": 0
      }
    });
  },
  calculateBills(flatmates, buyersName, receiversName, price) {
    let buyer = flatmates.find(r => r.name === buyersName),
        receiver = flatmates.find(r => r.name === receiversName);

    if (buyer === receiver) {
      return;
    } else if (receiversName === 'Shared') {
      let flatmatesCount = flatmates.length - 1,
          pricePerPerson = (price / flatmatesCount),
          flatmatesToCharge = flatmates.filter(
            r => r.name !== buyersName && r.name !== 'Shared'
          );

      buyer.owes -= pricePerPerson;
      Flatmates.update({"name": buyer.name}, {
        $set: {
          "owes": buyer.owes
        }
      });

      for (flatmate of flatmatesToCharge) {
        flatmate.owes += (price / flatmatesCount);
        Flatmates.update({"name": flatmate.name}, {
          $set: {
            "owes": flatmate.owes
          }
        });
      }
    } else {
      let buyerIndex = flatmates.indexOf(buyer),
          receiverIndex = flatmates.indexOf(receiver);

      receiver.owes += price;
      buyer.owes -= price;

      Flatmates.update({"name": receiver.name}, {
        $set: {
          "owes": receiver.owes
        }
      });
      Flatmates.update({"name": buyer.name}, {
        $set: {
          "owes": buyer.owes
        }
      });
    }
  }
});
