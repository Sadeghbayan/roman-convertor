export default class RomanNumerals {
    // eslint-disable-next-line class-methods-use-this
    toRoman(number: number | string) {
        interface IRomanNumList {
            [key: number]: { [key: string]: string };
        }
        const arrConv: IRomanNumList = {
            0: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX' },
            1: { 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC' },
            2: { 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM' },
            3: {
                1: 'M',
                2: 'MM',
                3: 'MMM',
                4: 'MMMM',
                5: 'MMMMM',
                6: 'MMMMMM',
                7: 'MMMMMMM',
                8: 'MMMMMMMM',
                9: 'MMMMMMMMM',
            },
        };

        if (number < 1 || number > 3999) return 'Enter a number between 1 and 3999';

        const arr = number.toString().split('').reverse();
        const romansArray = arr.map((a, i) => {
            return arrConv[i][a] || '';
        });

        return romansArray.reverse().join('');
    }

    // eslint-disable-next-line class-methods-use-this
    fromRoman(romanString: string) {
        interface IRomanNumList {
            [key: string]: number;
        }
        const numeral: IRomanNumList = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        let total = 0;
        let current;
        let last = 0;
        romanString
            .split('')
            .reverse()
            .forEach((e) => {
                current = numeral[e];
                if (current >= last) {
                    total += current;
                } else {
                    total -= current;
                }
                last = current;
            });

        return total;
    }
}
