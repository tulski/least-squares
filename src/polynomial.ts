import {Point} from "./domain";

const polynomial = (points: Point[], order = 2, precision = 2) => {
    const lhs: number[] = [];
    const rhs: number[][] = [];
    let a = 0;
    let b = 0;
    const _order = order + 1;

    for (let i = 0; i < _order; i++) {
        for (const [x, y] of points) {
            a += (x ** i) * y;
        }
        lhs.push(a);
        a = 0;
        const c: number[] = [];
        for (let j = 0; j < _order; j++) {
            for (const [x] of points) {
                b += x ** (i + j);
            }
            c.push(b);
            b = 0;
        }
        rhs.push(c);
    }
    rhs.push(lhs);

    const coefficients = rowReduction(rhs, _order).map(v => +v.toFixed(precision));

    let equation = 'y = ';
    for (let i = coefficients.length - 1; i >= 0; i--) {
        if (i > 1) {
            equation += `${coefficients[i]}x^${i} + `;
        } else if (i === 1) {
            equation += `${coefficients[i]}x + `;
        } else {
            equation += coefficients[i];
        }
    }
    return equation;
};

const rowReduction = (matrix: number[][], order: number): number[] => {
    const n = matrix.length - 1;
    const coefficients = [order];

    for (let i = 0; i < n; i++) {
        let maxRow = i;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][maxRow])) {
                maxRow = j;
            }
        }
        for (let k = i; k < n + 1; k++) {
            const tmp = matrix[k][i];
            matrix[k][i] = matrix[k][maxRow];
            matrix[k][maxRow] = tmp;
        }
        for (let j = i + 1; j < n; j++) {
            for (let k = n; k >= i; k--) {
                matrix[k][j] -= (matrix[k][i] * matrix[i][j]) / matrix[i][i];
            }
        }
    }

    for (let j = n - 1; j >= 0; j--) {
        let total = 0;
        for (let k = j + 1; k < n; k++) {
            total += matrix[k][j] * coefficients[k];
        }
        coefficients[j] = (matrix[n][j] - total) / matrix[j][j];
    }

    return coefficients;
};

export default polynomial;
