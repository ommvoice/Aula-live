import axios from 'axios';
import { get } from '../axios';
import { SONGS } from '../../../mocks/fixtures/songs';
 
jest.mock('axios');
 
describe('Axios', () => { 
	const url = 'url';

	it('calls axios with correct url', async () => {
		get(url);

		expect(axios.get).toHaveBeenCalledWith(url);
	});

	it('fetches successfully data from an API', async () => {	 
		axios.get.mockImplementationOnce(() => Promise.resolve(SONGS));
	 
		await expect(get(url)).resolves.toEqual(SONGS);
	});
});
