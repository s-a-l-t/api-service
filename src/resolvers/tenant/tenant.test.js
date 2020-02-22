import Tenant from './tenant';

describe('tenant', () => {
  it('returns the id from the query args as id', async () => {
    const testId = 'test-id';
    const id = await Tenant.id({}, {id: testId});

    expect(id).toBe(testId);
  });
});
