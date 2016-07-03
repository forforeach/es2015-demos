import * as logger from './logger';
import { get } from './api';

get('/tags').then((tags) => logger.log(tags));