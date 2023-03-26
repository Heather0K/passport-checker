export function useGetTimeBetween(start: any, end: any) {

    const date1 = new Date(start);
    const date2 = new Date(end);

    //get total days
    const diffDays = Math.floor((date2 - date1) / (1000 * 3600 * 24));

    // get total years / months ect
    const diffYears = Math.floor(diffDays/365);
    const diffMonths = Math.floor(diffYears/12);
    const diffWeeks = Math.floor(diffYears/52);

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
    ]
    const remainders = [
        {id: 2, name: 'months', value: remainderMonths},
        {id: 3, name: 'weeks', value: remainderWeeks},
        {id: 4, name: 'days', value: remainderDays},
    ]

        const diff = diffs.find(x => x.value > 0);
        const newRemArr = remainders.filter(x => x.id > diff.id && x.value > 0);
        const rem = newRemArr.map(r => {return `${r.value} ${r.name}`});
        const printReadable = `${diff.value} ${diff.name} ${rem} ago`;


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
