```javascript
// Correct usage of $inc operator
const value = 10;
if (typeof value === 'number' && isFinite(value)) {
db.collection.updateOne({"_id":ObjectId("651234567890")},{$inc:{count: value}});
} else {
  console.error("Invalid value for $inc operator: ", value);
}
```