const help = `
USAGE:
    ts-node index.ts [FLAGS] [CONFIG] <DATA>
    e.g. ts-node index.ts -l --order 2 "[[0, 4.43], [3, 6.43], [6, 8.71], [9, 9.08], [12, 11.7]]"
   
FLAGS:
    -h, --help          prints this help information
    -l, --linear        returns straight line equation y= ax + b
    -p, --polynomial    returns polynomial curve equation a_nx^n + ... + a1x + a0

CONFIG:
    --precision         coefficients precision, default value is 2
    --order             polynomial equation order, default value is 2
    
DATA:
    data must be in a specific form, you should pass array of points as in the example below
    e.g. [[0, 4.43], [3, 6.43], [6, 8.71], [9, 9.08], [12, 11.7]]"
`

export default help;
