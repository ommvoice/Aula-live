import { songs } from '../songs';
import * as api from '../axios';
 
describe('Songs', () => { 
	const getSpy = jest.spyOn(api, 'get');

	afterEach(() => {
		getSpy.mockClear();
	});

	it('is called correctly', async () => {	 
		songs('top-albums')
		expect(getSpy).toHaveBeenCalledTimes(1);
	});
});
