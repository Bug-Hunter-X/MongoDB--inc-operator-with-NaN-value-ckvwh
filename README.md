# MongoDB $inc operator with NaN value

This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numeric field by a specified value. However, if the specified value is not a number, it will result in an error. 

## Bug

The provided code uses the `$inc` operator with a `NaN` value.  This will cause the query to fail silently, and the field will remain unchanged, potentially leading to incorrect data or subtle bugs.

## Solution

The solution is to ensure that the value being passed to the `$inc` operator is always a valid number.  Check for `NaN`, `Infinity`, and `-Infinity` values before executing your MongoDB query.