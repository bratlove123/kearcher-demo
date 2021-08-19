import "reflect-metadata";
import { types } from '../errors';

describe('Error classes', () => {
  it('Should be instance of defined errors', async () => {
    expect.assertions(4);

    // Arrange
    const unKnownError = new types.UnknownError('Unknown error message');
    const operationError = new types.OperationError('Operation error message');
    const databaseError = new types.DatabaseError('Database error message');
    const validationError = new types.ValidationError('010', 'Validation error message');


    // Act - Assert
    expect(unKnownError instanceof types.UnknownError).toEqual(true);
    expect(operationError instanceof types.OperationError).toEqual(true);
    expect(databaseError instanceof types.DatabaseError).toEqual(true);
    expect(validationError instanceof types.ValidationError).toEqual(true);
  });
});
