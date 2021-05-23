import {Point} from "./domain";

const linear = (points: Point[], precision = 2) => {
    const sum = [0, 0, 0, 0, 0];
    let len = 0;

    for (const [x, y] of points) {
        len++;
        sum[0] += x;
        sum[1] += y;
        sum[2] += x * x;
        sum[3] += x * y;
        sum[4] += y * y;
    }

    const run = ((len * sum[2]) - (sum[0] * sum[0]));
    const rise = ((len * sum[3]) - (sum[0] * sum[1]));
    const a = run ? +(rise / run).toFixed(precision) : 0;
    const b = +((sum[1] / len) - ((a * sum[0]) / len)).toFixed(precision);

    return `y = ${a}x ${b && `+ ${b}`}`;
};

export default linear;
