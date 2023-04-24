export function useGetTimeBetween(start: any, end: any) {

    const date1 = new Date(start);
    const date2 = new Date(end);

        //get total days
        // @ts-ignore
        const diffDays = Math.floor((date2 - date1) / (1000 * 3600 * 24));

        // get total years / months ect
        const diffYears = Math.floor(diffDays / 365);
        const diffWeeks = Math.floor(diffDays / 7)
        const diffMonths = Math.floor(diffWeeks / 4);

        // get remainders to display
        // does not account for leap years or feb lol
        // not confident this is accurate but it will do for now
        const remainderMonths = (diffDays % 12);
        const remainderWeeks = (diffMonths % 4);
        const remainderDays = (diffDays % 7);

        const diffs = [
            {id: 1, name: 'years', value: diffYears},
            {id: 2, name: 'months', value: diffMonths},
            {id: 3, name: 'weeks', value: diffWeeks},
            {id: 4, name: 'days', value: remainderDays},
        ]

        const remainders = [
            {id: 2, name: 'months', value: remainderMonths},
            {id: 3, name: 'weeks', value: remainderWeeks},
            {id: 4, name: 'days', value: remainderDays},
        ]
        // find the first diff with a value to start the print readable
        const diff = diffs.find(x => x.value > 0);

        // then only print out what comes after the diff
        const newRemArr = remainders.filter(x => x.id > diff.id && x.value > 0);
        const rem = newRemArr.map(r => {
            return `${r.value} ${r.name}`
        });
        const remAnd = rem.slice(0, rem.length - 1) + " and " + rem.slice(rem.length - 1);

        // put it all together!
        const printReadable = `${diff.value} ${diff.name}, ${remAnd}`;

    return {
        diffYears,
        diffMonths,
        diffWeeks,
        diffDays,
        remainderMonths,
        remainderWeeks,
        remainderDays,
        printReadable
    };
}
