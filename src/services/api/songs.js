import { API, PROXY } from '../../constants';
import { get } from './axios';

export function songs(category, limit = 100) {
  const url = API + `/api/v1/us/apple-music/${category}/all/${limit}/non-explicit.json`;

  return get(PROXY + url);
}
