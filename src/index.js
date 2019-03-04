import module1 from './module1';

const foo = module1;

require(`./${foo('module2')}`);
require(`./${module1('module2')}`);
