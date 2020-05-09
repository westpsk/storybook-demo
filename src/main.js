import foo from './foo.js';
import { version } from '../package.json';
import _ from 'lodash';

export default function() {
  let a = { name: 'ivan' };
  console.log(foo);
  console.log('version ' + version);
  _.get(a, ['name']);
}

// export default function() {
//   import('./foo.js').then(({ default: foo }) => console.log(foo));
// }
