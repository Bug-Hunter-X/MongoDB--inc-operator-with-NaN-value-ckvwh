```javascript
// Incorrect usage of $inc operator
db.collection.updateOne({"_id":ObjectId("651234567890")},{$inc:{count:NaN}});
```