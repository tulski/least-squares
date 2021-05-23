import * as minimist from 'minimist'
import help from './src/help';
import linear from "./src/linear";
import polynomial from "./src/polynomial";

export function cli(argsArray: string[]) {
    const args = minimist(argsArray.slice(2));
    let command = 'help';
    if (args.linear || args.l) {
        command = 'linear';
    }
    else if (args.polynomial || args.p) {
        command = 'polynomial';
    }

    switch (command) {
        case 'help':
            console.log(help);
            break;
        case 'linear':
            console.log(linear(JSON.parse(args._[0]), args.precision));
            break;
        case 'polynomial':
            console.log(polynomial(JSON.parse(args._[0]), args.order, args.precision));
            break;
    }
}

cli(process.argv);
